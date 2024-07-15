/* Snail Sort

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

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]]. */ 

'use strict';

function snail(array) {
    let result = [];
    
    // Get all needed iteration
    const allIte = array.length * array[0].length;
    
    // Current iteration
    let curIte = 1;

    // Boudaries
    let topBound = 0;
    let bottomBound = array.length - 1;

    let leftBound = 0;
    let rightBound = array[0].length - 1;

    // Direction of snailing
    let goRight = 1;
    let goDown = 0;

    while (curIte <= allIte) {
        // Go right
        if (goDown === 0 && goRight === 1) {
            for (let i = leftBound; i < rightBound+1; i++) {
                curIte++;
                result.push(array[topBound][i]);
            }
            topBound++;
            goDown = 1;
            goRight = 0
        }

        // Go down
        if (goDown === 1 && goRight === 0) {
            for (let i = topBound; i < bottomBound + 1; i++) {
                curIte++;
                result.push(array[i][rightBound]);
            }
            rightBound--;
            goDown = 0;
            goRight = -1;
        }

        // Go left
        if (goDown === 0 && goRight == -1) {
            for (let i = rightBound; i > leftBound - 1; i--) {
                curIte++;
                result.push(array[bottomBound][i]);
            }
            bottomBound--;
            goDown = -1;
            goRight = 0;
        }

        // Go top
        if (goDown === -1 && goRight === 0) {
            for (let i = bottomBound; i > topBound - 1; i--) {
                curIte++;
                result.push(array[i][leftBound]);
            }
            leftBound++;
            goDown = 0;
            goRight = 1;
        }
    
    }
    
    return result;
};
