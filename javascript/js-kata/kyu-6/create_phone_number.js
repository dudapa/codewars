/* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
Example

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge. */

'use strict'

function createPhoneNumber(nums){
  return  `(${nums[0]}${nums[1]}${nums[2]}) ${nums[3]}${nums[4]}${nums[5]}-${nums[6]}${nums[7]}${nums[8]}${nums[9]}`
}


const result = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
console.log(result)