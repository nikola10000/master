package generator;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

import random.RandomInt;
import random.RandomString;

public class radnik_generator {

	private static int max = 2147483647;			// Najveci Oracle INTEGER
	
	private static String randomRadnik (String tabName, int mbr, int numRows) {
		String retVal = "insert into " + tabName +" values (" + 
								mbr + ", '" + 
								RandomString.getRandomString(RandomInt.getRandomInt(3, 20), true) + "',  '" + 
								RandomString.getRandomString(RandomInt.getRandomInt(3, 25), true) + "', " + 
								RandomInt.getRandomInt(0, numRows) + ", " + 
								(RandomInt.getRandomInt(0, 1000000000) * 0.01) + ", " + 
								(RandomInt.getRandomInt(0, 1000000) * 0.01) + 
								", to_date('" + RandomInt.getRandomInt(1, 28) + "-" + RandomInt.getRandomInt(1, 12) + "-" + RandomInt.getRandomInt(1940, 2021) + 
								"', 'DD-MM-YYYY'));\n"; 
		return retVal; 
	}
	
	private static void writeScript(String scriptPath, int scriptNumber, int numRows) throws IOException {
		//String str = "insert into radnik values (10, 'Pera',  'Peric',    NULL, 10000.00, 100.00, to_date('01-01-1987', 'DD-MM-YYYY'));\n";
	    BufferedWriter writer = new BufferedWriter(new FileWriter(scriptPath +".sql"));
	    writer.write("truncate table radnik_" + scriptNumber + ";\n"); 
	    for (int i = 0; i < numRows * scriptNumber; ++i) {
		    writer.write(randomRadnik("radnik_" + scriptNumber, i, numRows));	
		    if (i % 1000 == 0) {
		    	writer.write("commit;\n"); 
		    }
	    }
	    writer.write("commit;\n");
		writer.close();
	}
	
	public static void main (String [] args) {
		int numScripts = 30; 
		int numRows = 1000000; 
		for (int i = 1; i <= numScripts; ++i) {
			System.out.println(i + ". krug, generisem " + numRows * i  + " redova radnika...");
			try {
				writeScript("F:\\MAS\\Oracle\\Skripte\\Radnik\\radnici_insert_" + i, i, numRows);
//				writeScript("radnici_insert_" + i, numRows * i);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			System.out.println(i + ". krug, radnici generisani. ");
		}
		return;
	}
	
}
