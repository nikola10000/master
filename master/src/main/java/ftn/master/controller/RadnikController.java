package ftn.master.controller;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ftn.master.repository.RadnikRepository;


@RestController
@RequestMapping("/radnik")
public class RadnikController {

	int brPonavljanja = 20; 
	
	@Autowired
	RadnikRepository radnikRepository; 
	
	@GetMapping("/avg_time_find_by_id/table")
	public ResponseEntity<Object> avgTimeFindById (@RequestParam(name="table_number", required = false, defaultValue = "0") Integer tabNum, 
				@RequestParam(name="reps", required = false, defaultValue = "20") Integer reps, 
				@RequestParam(name="idx", required = false, defaultValue = "1") Integer idx) throws SQLException, ClassNotFoundException {
//		double retVal = radnikRepository.prosecno_vreme("SELECT COUNT(*) FROM radnik_4 WHERE plt < 9", brPonavljanja);
		String retVal = "";
		
		Class.forName("oracle.jdbc.driver.OracleDriver");  
		Connection conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:orcl","c##master","jKnowDB5");  
//SELECT * FROM radnik_16 WHERE mbr = 14794009
		Statement stmt = null; 
		String query = "select avg_find_radnik_by_id(" + tabNum + ", " + reps + ", " + idx + ") from dual";
//		System.out.println(" >>> Query: " + query);
		stmt = conn.createStatement();
		ResultSet rs =  stmt.executeQuery(query);
		while (rs.next()) {
			retVal += rs.getDouble(1);
		}
		conn.close();
		
		return new ResponseEntity<Object>(retVal, HttpStatus.OK) ; 
	}
	
	@GetMapping("/test")
	public ResponseEntity<String> test () throws SQLException, ClassNotFoundException {
		String retVal = "";
		Class.forName("oracle.jdbc.driver.OracleDriver");  
		Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:orcl","c##master","jKnowDB5");  
		Statement stmt = con.createStatement();
		ResultSet rs = stmt.executeQuery("select * from radnik_2 where rownum < 10");
		while (rs.next()) {
			System.out.println(rs.getInt(1) +  " " + rs.getString(2) + " " + rs.getString(2));
			retVal += rs.getInt(1) +  " " + rs.getString(2) + " " + rs.getString(2) + "\n";
		}
		con.close();
		
		
		return new ResponseEntity<String>(retVal, HttpStatus.OK);
	}
	
	
	
}
