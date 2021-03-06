package lec19
import tester.Tester

// a class for a collection of three strings
class Triple(s1 : String, s2 : String, s3 : String) {
  // a function to return total combined length of the strings
  def totalLen:Int = {s1.length + s2.length + s3.length}

  // a sample toString method -- the override tag is required in Scala
  override def toString = "[" + s1 + "," + s2 + "," + s3 + "]"
}

// The functions from lecture
object FunctionExamples {
  // a function to add two numbers
  def add1(x : Int, y : Int): Int = {
    x + y
  }

  // a void-returning method to add two numbers
  def add2(x : Int, y : Int) {
    System.out.println(x + y)
  }

  // a recursive function to sum a list
  def sum(lst: List[Double]): Double = lst match {
    case Nil => 0
    case n :: tail => n + sum(tail)
  }

  // compute average of non-negative numbers in a list
  def avgNonNeg(lst : List[Double]): Double = {
    val nonNegNums = lst.filter(n => n >= 0)
    sum(nonNegNums) / nonNegNums.length
    // the next line is an alternative last line using foldLeft instead of sum
    // nonNegNums.foldLeft(0)((a,b) => a + b) / nonNegNums.length
  }

  // --------------------------------------------------------------
  /*
    A longer example: produce longest length of three consecutive strings
    from a given list of strings
   */

  /*
    * Computes the total max length of three consecutive strings from intput list
    */
  def maxTripleLength(l : List[String]): Int = {
    listMax(breakIntoTriples(l).map(t => t.totalLen))
  }

  // break a list of strings into a list of triples
  def breakIntoTriples(lst : List[String]): List[Triple] = {
    if (lst.length < 3)
      Nil
    else
      new Triple(lst(0), lst(1), lst(2)) :: breakIntoTriples(lst.tail)
  }

  /*
    * Compute the max of a list of integers.
    * Assumes list has at least one element
    */
  def listMax(lst : List[Int]): Int = {
    def maxHelp(xs : List[Int], currmax : Int): Int = xs match {
      case Nil => currmax
      case x :: tail => maxHelp(tail, math.max(x, currmax))
    }
    maxHelp(lst.tail, lst.head)
  }
}

// The Test Cases
object FunctionsTest {
  def testFuns(t : Tester) {
    t.checkExpect(FunctionExamples.add1(3, 4), 7)
    t.checkExpect(FunctionExamples.sum(List(1, 3, 5)), 9)
    t.checkExpect(FunctionExamples.breakIntoTriples(List("hi", "there", "brown", "bear")),
      List(new Triple("hi", "there", "brown"),
        new Triple("there", "brown", "bear")))
    t.checkExpect(FunctionExamples.maxTripleLength(List("hi", "there", "brown", "bear")), 5 + 5 + 4)
  }
}

// The main class/main method
object Main extends App {
  System.out.println("We can print results as well as run tests")
  Tester.run(FunctionsTest)
}