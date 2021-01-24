package lec03;
import tester.*;

public class AnimalTest {
    public AnimalTest() {
    }

    Dillo babyDillo = new Dillo(8, false);
    Dillo adultDillo = new Dillo(24, false);
    Dillo hugeDillo = new Dillo(65, true);
    Boa meanBoa = new Boa("Slinky", 36, "nails");
    Boa thinBoa = new Boa("Slim", 24, "lettuce");
    Zoo dilloFarm = new Zoo(babyDillo, hugeDillo);

    public void testCanShelter(Tester t) {
        // if you want to check that a value is true, you don't need an expected result
        t.checkExpect(!babyDillo.canShelter());
        t.checkExpect(babyDillo.canShelter(), false);
    }

    public static void main(String[] args) {
        Tester.run(new AnimalTest());
    }
}
