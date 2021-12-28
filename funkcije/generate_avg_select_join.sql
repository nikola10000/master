CREATE OR REPLACE PROCEDURE generate_avg_select_join authid current_user  AS
	exec_string VARCHAR2(200) := 'select count(*) from radnik_avg_sel_join_res'; 
	temp NUMBER; 
BEGIN
	dbms_output.put_line('Pocinjem'); 
	BEGIN 
		EXECUTE IMMEDIATE exec_string;
--		EXECUTE IMMEDIATE 'truncate table radnik_avg_sel_join_res'; 
		dbms_output.put_line('Nisam pogresio'); 
	EXCEPTION 
		WHEN others THEN 
			dbms_output.put_line('Upao u gresku');
			exec_string := 'create table radnik_avg_sel_join_res (key VARCHAR2(30), val NUMBER)';
			dbms_output.put_line(exec_string);
			EXECUTE IMMEDIATE exec_string; 
	END; 
	dbms_output.put_line('Petljam'); 
	EXECUTE IMMEDIATE 'truncate table radnik_avg_sel_join_res'; 
	FOR i IN 1..20
	LOOP
		temp := avg_find_radnik_by_join(i, 5, 0); 
		exec_string := 'insert into radnik_avg_sel_join_res values (''n_' || i ||''', '|| temp ||')'; 
		-- dbms_output.put_line(exec_string);
		EXECUTE IMMEDIATE exec_string; 
		temp := avg_find_radnik_by_join(i, 5, 1); 
		exec_string := 'insert into radnik_avg_sel_join_res values (''t_' || i ||''', '|| temp ||')'; 
		EXECUTE IMMEDIATE exec_string; 
		temp := avg_find_radnik_by_join(i, 5, 2); 
		exec_string := 'insert into radnik_avg_sel_join_res values (''b_' || i ||''', '|| temp ||')'; 
		EXECUTE IMMEDIATE exec_string; 
	END LOOP; 
	EXECUTE IMMEDIATE 'commit'; 
	dbms_output.put_line('Zavrsavam'); 
END; 
/




BEGIN 
	generate_avg_select_join;  
END; 
/