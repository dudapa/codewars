/* Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
 */

'use strict';

// Solution with while loop
function digitalRoot(n) {
    let digits = String(n).split('').map((str) => Number(str));

    while (digits.length > 1) {
        let sum = digits.reduce((acc, cur) => acc + cur);
        digits = String(sum).split('').map((str) => Number(str));
    }
    return digits[0];
}

//const result = digitalRoot(132189);
//console.log(result);


// Solution with recursive function
function recursiveDigitalRoot(n) {
    if (String(n).length == 1) return n;
    let sumOfDigits = String(n).split('').map((str) => Number(str)).reduce((acc, cur) => acc + cur);
    return recursiveDigitalRoot(sumOfDigits);
}

//const result = recursiveDigitalRoot(132189);
//console.log(result)