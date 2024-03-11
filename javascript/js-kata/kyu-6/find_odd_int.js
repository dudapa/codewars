/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

// Solution with Object Literal
function findOdd(A) {
    let myObj = {};
    for (let i of A) {
        if (myObj.hasOwnProperty(i)) myObj[i] += 1;
        else myObj[i] = 1;
    }

    for (let j in myObj) {
        if (myObj[j] % 2 !== 0) return j;
    }
  }


// const result = findOdd([0,1,0,1,0]);


// Solution with find and filter method

function findOdd2(A) {
    return A.find(item => A.filter( ele => ele === item).length % 2 !== 0);
}

// const result2 = findOdd2([1,2,2,3,3,3,4,3,3,3,2,2,1]);
