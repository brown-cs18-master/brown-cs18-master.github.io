package lec25

object Main extends App {
  // compute the average of positive numbers in a list
  val temps = List(67, 45, 0, 66, -21, 50)
  val posTemps = temps.filter(t => t > 0)
  val avgTemp = posTemps.sum / posTemps.length
  println(avgTemp)
  // Point A
}

object Main2 extends App {
  // same computation as Main but organized separately
  val temps = List(67, 45, 0, 66, -21, 50)

  def avgPos(data: List[Int]) = {
    val posTemps = temps.filter(t => t > 0)
    posTemps.sum / posTemps.length
  }

  println(avgPos(temps))
  // Point B
}

// ----------------------------------------------

object Main3 extends App {
  // imagine we were grabbing data from a sports scorecard from the internet
  // (here, we are defining it rather than reading it in)
  class runsScored(val player:String, val inning1:Int, val inning2:Int) {}
  val data = List(new runsScored("Rohit", 6, 12), new runsScored("Virat", 11, 72), new runsScored("Rishabh", 91, 11))

  // then we computed some information about each scorecard entry
  val sums = data.map(d => (d.inning1 + d.inning2))

  // then we wrote out the computed data (to file, to the screen, etc)
  for (s <- sums) {
    println("a player scored " + s)
  }
}