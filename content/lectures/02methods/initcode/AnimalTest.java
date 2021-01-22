package lec02;
import tester.Tester;

public class AnimalTest {
    public AnimalTest(){}

    Dillo babyDillo = new Dillo(8, false);
    Dillo adultDillo = new Dillo(24, false);
    Dillo hugeDillo = new Dillo(65, true);

    /**
     * Example of setting up a test case. Tests are put
     * into methods that start with the letters 'test'.
     * @param t - a tester object
     */
    public void testCheckLen(Tester t) {
        t.checkExpect(adultDillo.length * 2, 48);
    }

    /**
     * Every Java program needs to be indicate how to start
     * running the program. The corresponding code goes into
     * a method called main.
     *
     * For now, our main method will just check all of our tests.
     * @param args
     */
    public static void main(String[] args) {
        Tester.run(new AnimalTest());
    }
}

