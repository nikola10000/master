package random;

public class RandomInt {

	public static int getRandomInt (int min, int max) {
		return min + (int)(Math.random() * (max - min));
	}
	
}
