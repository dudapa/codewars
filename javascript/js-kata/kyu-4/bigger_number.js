/* Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

  12 ==> 21
 513 ==> 531
2017 ==> 2071

If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

  9 ==> -1
111 ==> -1
531 ==> -1 */

'use strict';

function nextBigger(n) {
  // Convert number to array with digits
  let numbers = String(n)
    .split('')
    .map((num) => +num);

  let left = -1;
  let right;

  for (let i = numbers.length - 2; i >= 0; i--) {
    if (numbers[i] < numbers[i + 1]) {
      left = i;
      break;
    }
  }

  if (left === -1) return -1;

  for (let j = numbers.length - 1; j >= -1; j--) {
    if (numbers[j] > numbers[left]) {
      right = j;
      break;
    }
  }

  [numbers[left], numbers[right]] = [numbers[right], numbers[left]];

 
  let firstPart = numbers.slice(0, left + 1);

  let secondPart = numbers.slice(left + 1).sort((a, b) => a - b);

  return +[...firstPart, ...secondPart].join('');
}
