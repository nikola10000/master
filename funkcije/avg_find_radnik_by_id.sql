CREATE OR REPLACE FUNCTION avg_find_radnik_by_id (
	rbt IN NUMBER, 
	br_ponavljanja IN NUMBER, 
	tip_indeksa IN NUMBER 			-- 0 nikakav, 1 B stablo, 2 binarni
) RETURN NUMBER AS
	t_start NUMBER;
	t_end NUMBER;
	t_diff NUMBER;
	suma NUMBER := 0; 
	iter NUMBER;
	temp radnik_2%ROWTYPE;
	upit VARCHAR2(100); 
BEGIN
	
	BEGIN 
			dbms_output.put_line('DROP INDEX idx_radnik_' || rbt);
		EXECUTE IMMEDIATE 'DROP INDEX idx_radnik_' || rbt;
		EXCEPTION
			WHEN OTHERS THEN
				NULL; 
	END; 
	IF tip_indeksa = 1 THEN
		BEGIN
			dbms_output.put_line('CREATE INDEX idx_radnik_' || rbt || ' ON radnik_' || rbt || ' (mbr)');
			EXECUTE IMMEDIATE 'CREATE INDEX idx_radnik_' || rbt || ' ON radnik_' || rbt || ' (mbr)';
			EXCEPTION
				WHEN OTHERS THEN 
					NULL;
		END; 
	ELSIF tip_indeksa = 2 THEN 
		BEGIN
			dbms_output.put_line('CREATE BITMAP INDEX idx_radnik_' || rbt || ' ON radnik_' || rbt || ' (mbr)');
			EXECUTE IMMEDIATE 'CREATE BITMAP INDEX idx_radnik_' || rbt || ' ON radnik_' || rbt || ' (mbr)';
			EXCEPTION
				WHEN OTHERS THEN 
					NULL;
		END; 
	END IF; 
	BEGIN
		FOR iter IN 0..br_ponavljanja 
		LOOP
			upit := 'SELECT * FROM radnik_' || rbt || ' WHERE mbr = ' || FLOOR(dbms_random.VALUE(1, rbt * 1000000));
			write_master_log(upit, 'avg_find_radnik_by_id.log');
--			dbms_output.put_line(upit);
			t_start := dbms_utility.get_time;
			EXECUTE IMMEDIATE upit INTO temp;
			t_end := dbms_utility.get_time;
			t_diff := (t_end - t_start) / 100;
			suma := suma + t_diff; 
		END LOOP;
		EXCEPTION 
			WHEN NO_DATA_FOUND THEN 		-- If no data was found, return -1
				suma := -1 * br_ponavljanja; 
	END;
	RETURN suma / br_ponavljanja; 
END avg_find_radnik_by_id; 
/

commit; 

DECLARE 
	prosek NUMBER; 
	iter NUMBER; 
	br_petlji NUMBER := 20; 
	temp_ime VARCHAR2(25); 
BEGIN
--	avg4 := prosecno_vreme('SELECT COUNT(*) FROM radnik_4 WHERE plt < 9', 20); 
--	avg8 := prosecno_vreme('SELECT COUNT(*) FROM radnik_8 WHERE plt < 9', 20); 
--	avg12 := prosecno_vreme('SELECT COUNT(*) FROM radnik_12 WHERE plt < 9', 20); 
--	avg16 := prosecno_vreme('SELECT COUNT(*) FROM radnik_16 WHERE plt < 9', 20); 
--	avg20 := prosecno_vreme('SELECT COUNT(*) FROM radnik_20 WHERE plt < 9', 20); 
	FOR iter IN 1..5
	LOOP
		dbms_output.put_line('Prosecno vreme odziva, radnik_' || (iter * 4) || ' je: ' || avg_find_radnik_by_id(iter * 4, 20, 2));
	END LOOP; 
END; 
/



































