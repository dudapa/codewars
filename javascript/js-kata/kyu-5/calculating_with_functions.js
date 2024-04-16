'use strict';

/* 
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Division should be integer division. For example, this should return 2, not 2.666666...:

eight(dividedBy(three()));
 */

const operators = {
    '+': function (a, b) { return a + b; },
    '-': function (a, b) { return a - b; },
    '*': function (a, b) { return a * b; },
    '/': function (a, b) { return Math.floor(a / b) }
}


// Number function
function zero(operator=null) {
    if (operator) {
        const [oper, num] = operator;
        return oper(0, num)  
    }
    return 0
}

function one(operator=null) {
    if (operator) {
        const [oper, num] = operator;
        return oper(1, num)  
    }
    return 1
}

function two(operator=null) {
    if (operator) {
        const [oper, num] = operator;
        return oper(2, num)  
    }
    return 2
}

function three(operator=null) {
    if (operator) {
        const [oper, num] = operator;
        return oper(3, num)  
    }
    return 3
}

function four(operator=null) {
    if (operator) {
        const [oper, num] = operator;
        return oper(4, num)  
    }
    return 4
}

function five(operator=null) {
    if (operator) {
        const [oper, num] = operator;
        return oper(5, num)  
    }
    return 5
}

function six(operator=null) {
    if (operator) {
        const [oper, num] = operator;
        return oper(6, num)  
    }
    return 6
}

function seven(operator=null) {
    if (operator) {
        const [oper, num] = operator;
        return oper(7, num)  
    }
    return 7
}

function eight(operator=null) {
    if (operator) {
        const [oper, num] = operator;
        console.log(oper);
        return oper(8, num)  
    }
    return 8
}

function nine(operator=null) {
    if (operator) {
        const [oper, num] = operator;
        return oper(9, num)  
    }
    return 9
}

// Operation functions
function plus(num) {
    return [operators['+'], num]
}

function minus(num) {
    return [operators['-'], num]
}

function times(num) {
    return [operators['*'], num]
}

function dividedBy(num) {
    return [operators['/'], num]
}


let result = eight(minus(three()));
console.log(result);
