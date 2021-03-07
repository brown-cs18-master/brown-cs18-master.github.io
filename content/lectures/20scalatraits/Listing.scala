package lec20;

class Listing(val name : String, var rate : Double, val sleeps : Int) {
  var amenities = List("hairdryer")

  def price(nights : Int) = nights * rate

  def descr() = "Lodging at " + name + " fits " + sleeps + " people"

  def changeRate(newRate : Double): Unit = { this.rate = newRate }

  override def toString() = name + " has " + amenities.toString()

  override def equals(that: Any): Boolean = that match {
    case that: Listing => that.name == this.name && that.sleeps == this.sleeps
    case _ => false // the _ here means "match anything"
  }
}