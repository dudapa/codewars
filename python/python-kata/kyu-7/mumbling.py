""" 
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
"""

def accum(s):
    my_str = ''
    for i in range(0, len(s)):
        if i == len(s) - 1:
            line = s[i] * (i + 1)
            my_str += line.capitalize()
        else:
            line = s[i] * (i + 1)
            my_str += line.capitalize() + '-' 
    return my_str


# One line solution
def accum2(s):
    return '-'.join([((j*(i+1)).capitalize()) for i,j in enumerate(s)])
