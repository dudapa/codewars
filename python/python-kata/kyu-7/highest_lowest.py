"""
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples:
high_and_low("1 2 3 4 5")  # return "5 1"
high_and_low("1 2 -3 4 5") # return "5 -3"
high_and_low("1 9 3 4 -5") # return "9 -5"

Notes:
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first. 
"""

def high_and_low(numbers):
    num_str_lst = numbers.split(' ')

    min = int(num_str_lst[0])
    max = int(num_str_lst[0])

    for i in num_str_lst:
        if int(i) < min:
            min = int(i)
        if int(i) > max:
            max = int(i)

    return f"{max} {min}"


def high_and_low2(numbers):
    num_lst = [int(num) for num in (numbers.split(' '))]
    return f"{max(num_lst)} {min(num_lst)}"
