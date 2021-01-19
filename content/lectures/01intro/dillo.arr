# data definition

data Dillo:
  | dillo(length :: Number, is-dead :: Boolean)
end

# examples of data
baby-dillo = dillo(8, false)
adult-dillo = dillo(24, false)
huge-dead-dillo = dillo(65, true)

# a function
fun can-shelter(d :: Dillo) -> Boolean:
  (d.length > 60) and (d.is-dead)
where:
  # test cases / examples of use
  can-shelter(baby-dillo) is false
  can-shelter(huge-dead-dillo) is true
end
