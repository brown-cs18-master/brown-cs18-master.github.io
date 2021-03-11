package lec22

import java.time.LocalDateTime

// -------- Alerts --------------
class Alert(val username: String, val descr: String, val severity: Int) {}

// -------- Events --------------
class Event(val username: String, val timeStamp: LocalDateTime) {}

class FileSaved(username: String, timestamp: LocalDateTime,
                val filename: String, val size: Int) extends Event(username, timestamp){}

class Login(username: String, timestamp: LocalDateTime,
            val success: Boolean) extends Event(username, timestamp) {}

// -------- Event Logs Based on Lists --------------

// here is an example of using a trait in the spirit of an interface --
// the method defaults to returning the empty list (Nil)
trait IEventLog {
  def getUserEvents(username: String): List[Event] = Nil
}

// this class overrides the "interface" method with actual implementations
class EventLogList extends IEventLog {
  var events: List[Event] = Nil
  def addEvent(e: Event) = events = e :: events

  override def getUserEvents(username: String): List[Event] = {
    events.filter(e => e.username.equals(username))
  }
}

object Main extends App {
  val log = new EventLogList;
  log.addEvent(new Login("kathi", LocalDateTime.of(2021,1,15,12,42,0), false))
  log.addEvent(new Login("kathi", LocalDateTime.of(2021,1,15,12,42,15), false))
  System.out.println(log)
}

