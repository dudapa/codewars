"""Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2"""

# Solution with while loop
def digital_root(n):
    digits = [int(num) for num in str(n)]
    while len(digits) > 1:
        new_num = sum(digits)
        digits = [int(num) for num in str(new_num)]
    
    return digits[0]


result = digital_root(16)
print('result: ', result) 

# Recursive solution
def digital_root2(n):
    if len(str(n)) == 1:
        return n
    new_num = sum([int(num) for num in str(n)])
    return digital_root2(new_num)

result2 = digital_root2(16)
print('result2: ', result2)

