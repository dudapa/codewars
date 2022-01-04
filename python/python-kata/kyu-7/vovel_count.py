""" 
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. 
"""

from re import findall, IGNORECASE


def get_count(sentence):
    vowel = ['a', 'e', 'i', 'o', 'u']
    count = 0
    for letter in sentence.lower():
        if letter in vowel:
            count += 1
    return count


# Use regular expression 
def getCount2(sentense):
    return len(findall('[aeiou]', sentense, IGNORECASE))
