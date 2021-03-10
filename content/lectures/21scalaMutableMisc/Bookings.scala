package lec21

class Listing(val name : String, private var rate : Double, val sleeps : Int) {
  var amenities = List("hairdryer")
  
   override def equals(that: Any): Boolean = that match {
    case that: Listing => that.name == this.name && that.sleeps == this.sleeps
    case _ => false
  }
}

class Bookings {
  // create array of dates which will contain names of person 
  // who reserved the listing (as an option type)
	private val reservations: Array[Option[String]] = Array.fill(30)(None) 
			
	// compute how many dates the listing is NOT booked
	def daysAvail(): Int = {
	  var avail = 0
	  for (guest <- reservations) guest match {
	    case None => avail = avail + 1
	    case Some(s) => Unit
	  }
	  avail
	  }
	
	// compute available days with operations not for loops
	def daysAvail2(): Int = {
		reservations.length - reservations.flatten.length
	}
	
	// print the reservations - for-loop style
	def show() = 
	  for (i <- 0 to reservations.length - 1)
		  print(i + ": " + reservations(i) + ", ")
      
	// print the reservations - iterator style	  
  def show2() = 
    reservations.foreach(date => print(date + ": " + date + ", "))
	
  // ----------- Make reservations --------------
    
  // first, reserve without checking availability 
  // to show a range-based for loop
	def reserveNoCheck(startDate: Int, numNights: Int, forName: String) = {
    for (date <- startDate to startDate + numNights - 1)
      reservations(date) = Some(forName)
  }
	
	// now, let's check availability, throwing exception if not

	// the exception is similar to Java	
	class NotAvailable(val date: Int) extends Exception {}
	
	// the method to check availability. Notice no throws annotation
	def confirmAvailableExn(startDate: Int, numNights: Int): Unit = {
	  for (date <- startDate to startDate + numNights - 1)
	    reservations(date) match {
	      case Some(str) => throw new NotAvailable(date) 
	      case _ => Unit
	    }
	}
	
	// The reserve method that checks availability first
	// Point of this is to show use of case in catch block
	def reserveCheck(startDate: Int, numNights: Int, forName: String) = {
	  try {
	    confirmAvailableExn(startDate, numNights)
      for (date <- startDate to startDate + numNights - 1)
        reservations(date) = Some(forName)
	  } catch {
	    case e: NotAvailable => println("Already booked on " + e.date)
	  }
  }
	
	// An alternative confirmAvailable that returns a Boolean and
	// uses built-in operations on arrays/lists instead
	def confirmAvailable(startDate: Int, numNights: Int): Boolean = {
			reservations.slice(startDate, startDate + numNights).forall(
					elt => elt match { 
					case Some(str) => false
					case None => true
					})
	}
}

