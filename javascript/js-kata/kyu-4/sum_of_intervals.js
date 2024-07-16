/* Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

Overlapping Intervals
List containing overlapping intervals:

[
   [1, 4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

Examples:
sumIntervals( [
   [1, 2],
   [6, 10],
   [11, 15]
] ) => 9

sumIntervals( [
   [1, 4],
   [7, 10],
   [3, 5]
] ) => 7

sumIntervals( [
   [1, 5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ) => 19

sumIntervals( [
   [0, 20],
   [-100000000, 10],
   [30, 40]
] ) => 100000030
Tests with large intervals
Your algorithm should be able to handle large intervals. All tested intervals are subsets of the range [-1000000000, 1000000000]. */

'use strict';

function sumIntervals(intervals) {
    let sumOfIntervals = 0;

    let low = intervals.map(i => i[0]);
    low.sort((a, b) => a - b);

    let high = intervals.map(i => i[1]);
    high.sort((a, b) => a - b);

    let i = 0;
    let j = 0;

    while (i < high.length) {
        let k = i;
        while (k + 1 < low.length && low[k + 1] < high[j]) {
            k++;
            j = k;
        }

        sumOfIntervals += high[j] - low[i];
        console.log(i)
        i = j = k + 1;
        console.log(i)
    } 
    return sumOfIntervals; 
}
