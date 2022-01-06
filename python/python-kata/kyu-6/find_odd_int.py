""" 
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples:
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd). """


from collections import Counter


def find_it(seq):
    my_dict = {}
    for i in seq:
        if i not in my_dict:
            my_dict[i] = 1
        else:
            my_dict[i] = my_dict[i] + 1

    for key in my_dict:
        if my_dict[key] % 2 != 0:
            return key

# Use Counter from collection module
def find_it2(seq):
    my_dict = dict(Counter(seq))
    for int, count in my_dict.items():
        if count % 2 != 0:
            return int


