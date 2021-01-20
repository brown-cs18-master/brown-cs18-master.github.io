"""
The goal of this module is to show you how to write functions
to process linked lists recursively, rather than through
for loops.
"""

#---- Length of a List -----------

# here's the version with a for loop, for reference
def len_for(lst: list) -> int:
  """compute length of list with for loop"""
  count = 0
  for elt in lst:
    count = count + 1
  return count

# here's the recursive version: explanation follows
def len_recur(lst: list) -> int:
  """compute length of list with recursion"""
  if len(lst) == 0:
    return 0
  else:
    return 1 + len_recur(lst[1:])

"""
Note that in the recursive version, we don't have a count
variable that we update over time. Instead, we have a
conditional with two cases: one when the list is empty
and another when the list is not empty. 

Why these two cases? If we think about where lists come
from, they are built by starting with an empty list and
adding elements. So we can think of a list as having one 
of two forms:

- empty, or
- an element added to the front of an existing list

this is a recursive definition (because of the "existing 
list" part). In practice, we know you sometimes add to
the end of a list instead of the front, but it will be
easier to think of only adding to the front for now.

This structure (empty or elt+list) gives rise to the
conditional. But we can use that same structure to break
down the problem of counting the elements. We said that 
we got a non-empty list by adding an element to the front 
of an existing list. We can recover that existing list by
taking the sublist of all items other than the first one.
In Python, we write that as lst[1:].

Now, in the body of the else case, we show how to compute
the length given a non-empty list: we count the number
of elements in the existing list (the recursive call),
then add one to the result (to count the first element
in the list).

As a general rule, when we think of our data as being created recursively, we also process it recursively.
"""

#--- General Structure of Recursive List Functions ---

"""
It turns out that all programs that process a linked list
recursively have a common structure (much as a for-loop)
is a common structure. Here it is:

# general form of list recursion
def func_recur(lst: List) -> int:
  if len(lst) == 0:
    return ...
  else:
    return ... func_recur(lst[1:])

to write a specific function, you fill in the ... with
the computations that perform the function
"""

#--- Testing Recursive List Functions ---

"""
When you test a list function, it is good practice to:
- test the case of the empty list
- test the case of a one-element list
- test a list with at least 2-3 elements
- test a list that adds a new elt to the front of the previous test

Why this pattern? Let's say the third test passes but the fourth
fails. You then know that the error is in the logic used to
combine the first and existing list computations (since the
function gave the right answer on the existing list portion).
"""

def test_len():
  assert(len_recur([]) == 0)
  assert(len_recur([6]) == 1)
  assert(len_recur([3, 5, 6]) == 3)
  assert(len_recur([1, 3, 5, 6]) == 4)


#--- Practice problems --------------

""" 
Try writing the following (not hwk, just practice).

* total_len, which totals the length of all strings in a list

* any_neg, which checks whether any integer in a list is negative

"""