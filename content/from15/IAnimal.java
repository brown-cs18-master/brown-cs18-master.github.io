// A single-file presentation of the classes for the animal hierarchy

public interface IAnimal {
    // determine whether animal is of normal size for its type
    public boolean isNormalSize();
}

public class AbsAnimal {
  int length;

  // the constructor
  public AbsAnimal (int length) {
    this.length = length;
  }  

  /**
     * Helper to determine whether length is within bounds
     */
  public boolean isLenWithin(int low, int high) {
    return low <= this.length && this.length <= high;
  }
}

public class Dillo extends AbsAnimal implements IAnimal {
    public boolean isDead;

    public Dillo(int len, boolean isD) {
        super(length);
        this.isDead = isD;
    }

    // determine whether dillo is long and dead
    public boolean canShelter() {
        return this.isDead && (this.length > 60);
    }

    // determine whether length between 12 and 24
    public boolean isNormalSize() {
        return super.isLenWithin(12, 24);
    }
}

public class Boa extends AbsAnimal implements IAnimal {
  String name;
  String eats;
  
  public Boa (String name, int length, String eats) {
    super(length);
    this.name = name;
    this.eats = eats;
  }
 
  /**
   * check whether boa's length is considered normal
   */
  public boolean isNormalSize() {
    return super.isLenWithin(30, 60);
  }
}

public class AnimalTest {
    public AnimalTest() {
    }

    Dillo babyDillo = new Dillo(8, false);
    Dillo adultDillo = new Dillo(24, false);
    Dillo hugeDillo = new Dillo(65, true);
    Boa meanBoa = new Boa("Slinky", 36, "nails");
    Boa thinBoa = new Boa("Slim", 24, "lettuce");

    // test case showing a computation and an expected value
    public void testValue(Tester t) {
        t.checkExpect(babyDillo.length * 2, 16);
    }

    public void testCanShelter(Tester t) {
        // if you want to check that a value is true, you don't need an expected result
        t.checkExpect(!babyDillo.canShelter());
        t.checkExpect(babyDillo.canShelter(), false);
    }

    public void testNormalSize(Tester t) {
        t.checkExpect(thinBoa.isNormalSize(), false);
        t.checkExpect(adultDillo.isNormalSize());
    }

    public static void main(String[] args) {
        Tester.run(new AnimalTest());
    }
}

