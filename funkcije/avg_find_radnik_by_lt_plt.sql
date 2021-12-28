CREATE OR REPLACE FUNCTION avg_find_radnik_by_lt_plt (
	rbt IN NUMBER, 
	br_ponavljanja IN NUMBER, 
	tip_indeksa IN NUMBER 			-- 0 nikakav, 1 B stablo, 2 binarni
) RETURN NUMBER AS
	TYPE radnik_tab IS TABLE OF radnik_1%ROWTYPE;
	t_start NUMBER;
	t_end NUMBER;
	t_diff NUMBER;
	suma NUMBER := 0; 
	iter NUMBER;
	temp radnik_tab;
	upit VARCHAR2(100); 
BEGIN
	
	BEGIN 
--		dbms_output.put_line('DROP INDEX idx_radnik_' || rbt);
		EXECUTE IMMEDIATE 'DROP INDEX idx_radnik_' || rbt;
		EXCEPTION
			WHEN OTHERS THEN
				NULL; 
	END; 
	IF tip_indeksa = 1 THEN
		BEGIN
--			dbms_output.put_line('CREATE INDEX idx_radnik_' || rbt || ' ON radnik_' || rbt || ' (plt)');
			EXECUTE IMMEDIATE 'CREATE INDEX idx_radnik_' || rbt || ' ON radnik_' || rbt || ' (plt)';
			EXCEPTION
				WHEN OTHERS THEN 
					NULL;
		END; 
	ELSIF tip_indeksa = 2 THEN 
		BEGIN
--			dbms_output.put_line('CREATE BITMAP INDEX idx_radnik_' || rbt || ' ON radnik_' || rbt || ' (plt)');
			EXECUTE IMMEDIATE 'CREATE BITMAP INDEX idx_radnik_' || rbt || ' ON radnik_' || rbt || ' (plt)';
			EXCEPTION
				WHEN OTHERS THEN 
					NULL;
		END; 
	END IF; 
	BEGIN
		FOR iter IN 0..br_ponavljanja 
		LOOP
			upit := 'SELECT * FROM radnik_' || rbt || ' where plt < ' || FLOOR(dbms_random.VALUE(1, rbt * 1000000));
			write_master_log(upit, 'avg_find_radnik_by_lt_plt.log');
 			dbms_output.put_line(upit);
			t_start := dbms_utility.get_time;
			EXECUTE IMMEDIATE upit BULK COLLECT INTO temp;
			t_end := dbms_utility.get_time;
			t_diff := (t_end - t_start) / 100;
			suma := suma + t_diff; 
		END LOOP;
		EXCEPTION 
			WHEN NO_DATA_FOUND THEN 		-- If no data was found, return -1
				suma := -1 * br_ponavljanja; 
	END;
	RETURN suma / br_ponavljanja; 
END avg_find_radnik_by_lt_plt; 
/

commit; 

DECLARE 
	prosek NUMBER; 
	iter NUMBER; 
	br_petlji NUMBER := 20; 
	temp_ime VARCHAR2(25); 
BEGIN
	FOR iter IN 1..5
	LOOP
		dbms_output.put_line('Prosecno vreme odziva, radnik_' || (iter * 4) || ' je: ' || avg_find_radnik_by_lt_plt(iter * 4, 3, 2));
	END LOOP; 
END; 
/



































