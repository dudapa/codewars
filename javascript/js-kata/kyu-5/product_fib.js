'use strict';

/* 
The Fibonacci numbers are the numbers in the following integer sequence (Fn):

    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

    F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

    F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)

depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)

F(n) being the smallest one such as F(n) * F(n+1) > prod.
Some Examples of Return:

(depend on the language)

productFib(714) # should return (21, 34, true), 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return (34, 55, false), 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
-----
productFib(714) # should return [21, 34, true], 
productFib(800) # should return [34, 55, false], 
-----
productFib(714) # should return {21, 34, 1}, 
productFib(800) # should return {34, 55, 0},        
-----
productFib(714) # should return {21, 34, true}, 
productFib(800) # should return {34, 55, false}, 

Note:

You can see examples for your language in "Sample Tests".
 */

function productFib(prod){
    let fibSequence = [0, 1];
    while (true) {
        let fibProd = fibSequence[fibSequence.length-1] * fibSequence[fibSequence.length-2];
        if (fibProd === prod) return fibSequence.slice(-2).concat([true]);
        else if (fibProd > prod) return fibSequence.slice(-2).concat([false]);
        let newFibNum = fibSequence[fibSequence.length-1] + fibSequence[fibSequence.length-2];
        fibSequence.push(newFibNum);
    }
}


// const result = productFib(800);
// console.log(result);

// But it can be so easy and clear :)
function productFib2(prod){
    let [a, b] = [0, 1];
    while (prod > a * b) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return [a, b, prod === a * b];
}

const result2 = productFib2(800);
console.log(result2);