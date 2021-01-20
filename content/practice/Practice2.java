import tester.Tester;

public class Planet {
  public String name;
  public double distToSun;
  public double relGravity;
  
  public Planet (String name, double distToSun, double relGravity) {
    this.name = name;
    this.distToSun = distToSun;
    this.relGravity = relGravity;
  }  
  
  /**
   * produces the corresponding weight of an item on this planet
   * @param itemWeight - weight of item on earth
   */
  public double convertWeight(double itemWeight) {
    return (itemWeight * this.relGravity);
  }
  
  /**
   * compare two planets to decide which is farther from the sun
   * @param otherPlanet - the planet to compare to this one
   */
  public boolean fartherFromSum(Planet otherPlanet) {
    return (this.distToSun > otherPlanet.distToSun) ;
  }
}

//-----------------------------------------

public class BankCustomer {
  public String firstName;
  public String lastName;

  public BankCustomer (String firstName, String lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  /**
   * create a new account for customer with an opening balance
   * @param initAmt - the opening balance for the new account  
   */
  BankAccount openAccount(double initAmt) {
    return (new BankAccount(this, initAmt)) ;
  }
}

class BankAccount {
  BankCustomer forCust;
  double balance;
  
  BankAccount (BankCustomer forCust, double balance) {
    this.forCust = forCust;
    this.balance = balance;
  }
  
  /**
   * produce a status message describing the balance in the account
   */
  public String statusMessage() {
    if (this.balance == 0) {
      return ("No Money");
    } else if (this.balance < 0) {
      return ("Overdrawn");
    } else {
      return ("Positive Balance");
    }
  }
}

//-----------------------------------------

// This is one sample test case.  You should have several more

public class Practice2Test {
  public Practice2Test(){}
  
  BankCustomer brownCust = new BankCustomer("Bruno", "Bear");
  BankAccount brunoAcct = brownCust.openAccount(0);
  
  /**
   * test the status method on a balance of 0
   */
  public void testStatusNoMoney(Tester t) {
      t.checkExpect(brunoAcct.statusMessage(), "No Money");
  }
}
