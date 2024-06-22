""" Snail Sort

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]

For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]]. """

def snail(array):
    result = []
    
    # Get all needed iteration 
    all_ite = len(array) * len(array[0])

    # Current iteration
    cur_ite = 1


    # Boundaries
    top_bound = 0
    bottom_bound = len(array)-1

    left_bound = 0
    right_bound = len(array[0])-1


    # Direction of snailing
    go_right = 1
    go_down = 0

    while cur_ite <= all_ite:

        # Go right 
        if go_down == 0 and go_right == 1:
            for i in range(left_bound, right_bound+1):
                cur_ite += 1
                result.append(array[top_bound][i])

            top_bound += 1 
            go_down = 1
            go_right = 0
        
        # Go down
        if go_down == 1 and go_right == 0:
            
            for i in range(top_bound, bottom_bound+1):
                cur_ite += 1
                result.append(array[i][right_bound])

            right_bound -= 1
            go_down = 0
            go_right = -1

        # Go left
        if go_down == 0 and go_right == -1:
            for i in range(right_bound, left_bound-1, -1):
                cur_ite += 1
                result.append(array[bottom_bound][i])
            
            bottom_bound -= 1
            go_down = -1
            go_right = 0

        # Go top
        if go_down == -1 and go_right == 0:
            for i in range(bottom_bound, top_bound-1, -1):
                cur_ite += 1
                result.append(array[i][left_bound])

            left_bound += 1
            go_down = 0
            go_right = 1
    
    return result

input_array = [[1,2,3],
                [4,5,6],
                [7,8,9]]

result = snail(input_array)
print(result)



# SOLUTION 2 with NumPy library

import numpy as np


def snail2(array):
    result = []

    # Converting input array to a NumPy array
    np_array = np.array(array)

    while np_array.any():
        
        result += np_array[0].tolist()

        # Rotate NumPy array by 90 degrees counterclockwise
        np_array  = np.rot90(np_array[1:])

    return result

array2 = [[1,2,3],
         [4,5,6],
         [7,8,9]]

result2 = snail2(array2)
print(result2)