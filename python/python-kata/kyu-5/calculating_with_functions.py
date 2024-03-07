"""
Description:

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())) # must return 35
four(plus(nine())) # must return 13
eight(minus(three())) # must return 5
six(divided_by(two())) # must return 3

Requirements:

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, divided_by
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Division should be integer division. For example, this should return 2, not 2.666666...:

eight(divided_by(three()))
"""

# Solution with operator module 
import operator


def zero(*args):
    if args:
        return args[0][0](0, args[0][1])
    return 0

def one(*args):
    if args:
        return args[0][0](1, args[0][1])
    return 1

def two(*args):
    if args:
        return args[0][0](2, args[0][1])
    return 2

def three(*args):
    if args:
        return args[0][0](3, args[0][1])
    return 3

def four(*args):
    if args:
        return args[0][0](4, args[0][1])
    return 4

def five(*args):
    if args:
        return args[0][0](5, args[0][1])
    return 5

def six(*args):
    if args:
        return args[0][0](6, args[0][1])
    return 6

def seven(*args):
    if args:
        return args[0][0](7, args[0][1])
    return 7

def eight(*args):
    if args:
        return args[0][0](8, args[0][1])
    return 8

def nine(*args):
    if args:
        return args[0][0](9, args[0][1])
    return 9


def plus(num2):
    return (operator.add, num2)  

def minus(num2): 
    return (operator.sub, num2)

def times(num2): 
    return (operator.mul, num2)

def divided_by(num2): 
    return (operator.floordiv, num2)


result = eight(divided_by(two()))
print(result)
