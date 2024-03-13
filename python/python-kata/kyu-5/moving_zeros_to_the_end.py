""" Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

move_zeros([1, 0, 1, 2, 0, 1, 3]) # returns [1, 1, 2, 1, 3, 0, 0] """

def move_zeros(lst):
    non_zeros = []
    zeros = []
    for val in lst:
        if val == 0:
           zeros.append(val)
        else:
            non_zeros.append(val)
    return non_zeros + zeros


test_array = [9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]

result = move_zeros(test_array)
print('result: ', result)
