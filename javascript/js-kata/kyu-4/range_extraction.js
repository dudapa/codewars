/* A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20" */

'use strict';

function solution(list) {
    let resultStr = '';

    let startIndex = 0;
    let endIndex = 0;
    
    let arrayOfIntervals = [];
    
    let i = 0;

    while (i < list.length) {
        if (i >= 0 && i < list.length) {
            if (list[i] + 1 === list[i + 1]) {
                endIndex = i + 1;
            } else {
                arrayOfIntervals.push([startIndex, endIndex]);
                startIndex = endIndex = i + 1;
            }   
        } else {
            if (list[i] - 1 == list[i - 1]) {
                endIndex = i;
                arrayOfIntervals.push([startIndex, endIndex]);
            } else {
                arrayOfIntervals.push([startIndex, endIndex]);
            }
        }
        i++;
    }

    for (let j of arrayOfIntervals) {
        if (j[0] === j[1]) {
            resultStr = resultStr + ',' + `${list[j[0]]}`;
        } else if (Math.abs(j[1]) - Math.abs(j[0]) === 1) {
            resultStr = resultStr + ',' + `${list[j[0]]},` + `${list[j[1]]}`;
        } else {
            resultStr = resultStr + ',' + `${list[j[0]]}-${list[j[1]]}`;
        }
    }

    return resultStr.slice(1);
}

// ---------------------------SECOND SOLUTION-------------------------------
function solution2(list) {
    let result = '';

    let start = list[0];
    let end = list[0];
    
    
    for (let num of list.concat(['']).slice(1)) {
        if (num !== end + 1) {
            if (Math.abs(Math.abs(start) - Math.abs(end)) >= 2) {
                result += `${start}-${end},`;
            } else if (Math.abs(Math.abs(start) - Math.abs(end)) === 1) {
                result += `${start},${end},`;
            } else {
                result += `${start},`;
            }
            start = num;
            }
        end = num;
    }
    return result.slice(0, -1)
}
