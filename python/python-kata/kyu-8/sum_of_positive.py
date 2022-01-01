""" 
Task:
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. 
"""

from functools import reduce


# 1. Solution
def positive_sum(arr):
    sum = 0
    for num in arr:
        if num > 0:
            sum += num
    return sum


# 2. Solution
def positive_sum2(arr):
    return sum(num for num in arr if num > 0)


# 3. Solution
def positive_sum3(arr):
    positive_arr = list(filter(lambda num: num > 0, arr )) # Filter all positive numbers
    if positive_arr:
        return reduce(lambda num1,num2: num1 + num2, positive_arr)
    return 0
