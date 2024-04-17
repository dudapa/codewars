'use strict';

/* 
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] 
*/

function moveZeros(arr) {
  const nonZerosArray = [];
  const zerosArray = [];
  
  arr.forEach(ele => {
    if (ele === 0) {
      zerosArray.push(ele);
    } else {
      nonZerosArray.push(ele);
    }
  })

  return [...nonZerosArray, ...zerosArray];
}

const result = moveZeros([false,1,0,1,2,0,1,3,"a"]);
console.log(result);
