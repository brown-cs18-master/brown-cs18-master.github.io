from dataclasses import dataclass

"""
This file serves three purposes:

1. Give an example of a class hierachy. Here we have a parent class 
named Animal and two child classes (Dillo and Boa). We are explicitly using 
dataclasses rather than regular Python classes because the goal is to 
get familiar with programming with functions rather than methods

2. Show how to write explicit test cases, along with initial criteria 
for developing a good collection of tests

3. Provide a crash course in the Python syntax that you will need 
for the CS15 practice problems.

The code here corresponds to the code that the main CS18 lecture 
will be developing in Java over the first 4 lectures. 
"""
#--- Classes -------------------------------

@dataclass
class Animal:
  length: float

@dataclass
class Dillo(Animal):
  is_dead: bool

baby_dillo = Dillo(8, False)
adult_dillo = Dillo(24, False)
huge_dead_dillo = Dillo(65, True)

@dataclass
class Boa(Animal):
  name: str
  eats: str

mean_boa = Boa(36, "Slinky", "nails")
thin_boa = Boa(24, "Slim", "lettuce")

#--- Functions and Tests ----------------------

def can_shelter(d: Dillo) -> bool:
  """determine whether boa is dead and long"""
  return d.is_dead and (d.length > 60)

# test cases: each contains an expression and the expected answer
# a good set of tests exercises all options of a conditional
def test_distinct():
  assert(can_shelter(baby_dillo) == False)
  assert(can_shelter(adult_dillo) == False)
  assert(can_shelter(huge_dead_dillo) == True)

def len_within(num: float, low: float, high: float) -> bool:
  """determine whether first num between next two, inclusive"""
  return low <= num and num <= high

# all functions should have test methods
# a good set of tests checks all boundary conditions in the data
def test_len_within():
  assert(len_within(5.99, 6, 10) == False)
  assert(len_within(6, 6, 10) == True)
  assert(len_within(10, 6, 10) == True)
  assert(len_within(10.2, 6, 10) == False)

def is_normal_size(a: Animal) -> bool:
  """determine whether given animal is normal length for its type"""
  if isinstance(a, Dillo):
    return len_within(a.length, 12, 24)
  elif isinstance(a, Boa):
    return len_within(a.length, 30, 60)
  else: raise("Unknown Animal")

# a good set of tests exercises all variants of the data
def test_normalsize():
  assert(is_normal_size(baby_dillo) == False)
  assert(is_normal_size(adult_dillo) == True)
  assert(is_normal_size(Dillo(25, True)) == False)
  assert(is_normal_size(thin_boa) == False)
  assert(is_normal_size(mean_boa) == True)

#--- Run the tests ----------------------------

test_distinct()
test_len_within()
test_normalsize()

