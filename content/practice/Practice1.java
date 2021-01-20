public class Student {
  String firstName;
  String lastName;
  int classYear;
  String major;
  
  public Student (String firstName, String lastName, int classYear, String major) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.classYear = classYear;
    this.major = major;
  }
}

//-----------------------------------------

public class Planet {
  String name;
  double distToSun;
  double relGravity;
  
  public Planet (String name, double distToSun, double relGravity) {
    this.name = name;
    this.distToSun = distToSun;
    this.relGravity = relGravity;
  }  
}

//-----------------------------------------

public class BankCustomer {
  String firstName;
  String lastName;

  public BankCustomer (String firstName, String lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

public class BankAccount {
  BankCustomer forCust;
  double balance;
  
  public BankAccount (BankCustomer forCust, double balance) {
    this.forCust = forCust;
    this.balance = balance;
  }
}

//-----------------------------------------

public class SeatAsgn {
  int row;
  String seat;
  
  public SeatAsgn (int row, String seat) {
    this.row = row;
    this.seat = seat;
  }
}

public class AirlineTicket {
  String fromCity;
  String toCity;
  int flightNum;
  SeatAsgn seat;
  
  public AirlineTicket (String fromCity, String toCity, 
                        int flightNum, SeatAsgn seat) {
    this.fromCity = fromCity;
    this.toCity = toCity;
    this.flightNum = flightNum;
    this.seat = seat;
  }
}

// --------------------------------------

public class Practice1Test {
  public Practice1Test() {}
  
  AirlineTicket ticketToRome = 
    new AirlineTicket("Boston", "Rome", 56,
                      new SeatAsgn(12, "A"));
}
