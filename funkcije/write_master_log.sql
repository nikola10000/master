--create or replace directory temp_dir as 'C:\temp'
--create or replace directory temp_dir as 'C:/Users/nikol/OneDrive/Documents/Faks/Master/Rad/Oracle/funkcije/logs'
--/

--grant read, write on directory temp_dir to public
--/

CREATE OR REPLACE PROCEDURE write_master_log (
	log_text IN VARCHAR2, 
	log_file_name IN VARCHAR2
) AS 
	out_File  UTL_FILE.FILE_TYPE;
BEGIN
	EXECUTE IMMEDIATE 'create or replace directory temp_dir as ''C:/Users/nikol/OneDrive/Documents/Faks/Master/Rad/Oracle/funkcije/logs''';
	EXECUTE IMMEDIATE 'grant read, write on directory temp_dir to public';

	out_File := UTL_FILE.FOPEN('ORACLE_MAS', log_file_name , 'A');

	UTL_FILE.PUT_LINE(out_file , log_text);
	UTL_FILE.FCLOSE(out_file);
	null; 
END;
/

BEGIN 
	write_master_log('Testing log output', 'test.log'); 
END; 
/