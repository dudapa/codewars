/* Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

s1 = "A aaaa bb c"

s2 = "& aaa bbb c d"

s1 has 4 'a', 2 'b', 1 'c'

s2 has 3 'a', 3 'b', 1 'c', 1 'd'

So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

Hopefully other examples can make this clearer.

s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
Note for Swift, R, PowerShell
The prefix =: is replaced by E:

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/E:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/E:ee/E:ss" */

'use strict';

// Check if character is alphabetic character
function isApha(ch) {
  return /^[A-Z]$/i.test(ch);
};

// Check if character is lower letter
function isLower(ch) {
  return /^[a-z]$/.test(ch); 
}

// Count all lower letters 
function letterCounter(arr) {
  let counter = {};
  arr.forEach((ch) => {
    if (isApha(ch) && isLower(ch)) {
      if (ch in counter) {
        counter[ch] += 1;
      } else {
        counter[ch] = 1;
      }
    }
  });
  return counter;
}

function mix(s1, s2) {
  let s1Array = s1.split('');
  let s2Array = s2.split('');

  let counterS1 = letterCounter(s1Array);
  let counterS2 = letterCounter(s2Array);

  let counterS3 = [];

  for (let i in counterS1) {
    if ((i in counterS2) && (counterS1[i] > 1 || counterS2[i] > 1)) {
      if (counterS1[i] > counterS2[i]) {
        counterS3.push([1, i.repeat(counterS1[i])]);
      } else if (counterS1[i] === counterS2[i]) {
        counterS3.push([3, i.repeat(counterS1[i])]);
      } else {
        counterS3.push([2, i.repeat(counterS2[i])]);
      }

      if (i in counterS2) {
        delete counterS2[i];
      }
    } else {
      if (counterS1[i] > 1) {
        counterS3.push([1, i.repeat(counterS1[i])]);
      }
    }
  }

  for (let i in counterS2) {
    if (counterS2[i] > 1) {
      counterS3.push([2, i.repeat(counterS2[i])]);
    }
  }

  counterS3.sort((a, b) => {
    
    // Compare by negative length of the second element (descending order)
    let lenDiff = b[1].length - a[1].length;
    if (lenDiff !== 0) return lenDiff;
    
    // Compare by the numerical value of the first element (ascendig order)
    let numDiff = a[0] - b[0];
    if (numDiff !== 0) return numDiff;

    // Compare by the second element (ascending order)
    return a[1].localeCompare(b[1]);
  });

  let resultString = '';

  counterS3.forEach(
    (i) =>
      (resultString += i[0] === 3 ? `=:${i[1]}/` : `${i[0]}:${i[1]}/`)
  );

  return resultString.slice(0, -1);
} 
