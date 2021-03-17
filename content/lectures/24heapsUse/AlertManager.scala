package lec24

import scala.collection.mutable.PriorityQueue

// -------- Alerts --------------
class Alert(val username: String, val descr: String, val severity: Int) {}

object Main extends App {
  // Make/manage a heap of numbers
  val numHeap = new PriorityQueue[Integer]
  // add items
  numHeap.enqueue(6)
  numHeap.enqueue(1)
  numHeap.enqueue(3)
  numHeap.enqueue(8)
  println("the heap contains: " + numHeap)
  // look at max item
  println("the top value is: " + numHeap.head)
  println("the heap contains: " + numHeap)
  // remove and return max item
  val max = numHeap.dequeue()
  println("the max was: " + max)
  println("the heap contains: " + numHeap)
}