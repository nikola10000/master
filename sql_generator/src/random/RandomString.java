package random;

public class RandomString {

	// All non-caps letters
	static int leftLimit = 97;
	static int rightLimit = 122;
	
	public static String getRandomString (int length, boolean capitalize) {
		int randomLimitedInt; 
	    StringBuilder buffer = new StringBuilder(length);
	     
    	randomLimitedInt = leftLimit + RandomInt.getRandomInt(0, 25);
	    // Make the first letter capital?
    	if (capitalize) {
    		randomLimitedInt -= 32; 
    	}
        buffer.append((char) randomLimitedInt);
	    
        for (int i = 1; i < length; i++) {
	    	randomLimitedInt = leftLimit + RandomInt.getRandomInt(0, 25);
	        buffer.append((char) randomLimitedInt);
	    }
        
		return buffer.toString();
	}
	
}
