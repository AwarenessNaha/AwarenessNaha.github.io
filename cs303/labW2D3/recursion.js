"use strict";

/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
module.exports = { sumTo, factorial, fibonacci, outputList, outputListLoop, list2Array, reverseList, reverseListLoop }; //add all of your function names here that you need for the node mocha tests



/**
 * Sum all numbers till the given one
 * Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.
Make 3 solution variants:
Using a for loop.
Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
Using the arithmetic progression formula.
P.S. Which solution variant is the fastest? The slowest? Why?
P.P.S. Can we use recursion to count sumTo(100000)?

 */
//Using a for loop.
function sumToForLoop(n) {
    let sum = 0;
    for (let i = n; i >= 0; i--) {
        sum += i;
    }
    return sum;
}
//console.log(sumToForLoop(5));
//Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.

function sumTo(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sumToRec(n - 1)
    }
}
//console.log(sumToRec(5));

//Using the arithmetic progression formula.
function sumToByFormula(n) {
    let sum = n * (n + 1) / 2;
    return sum;
}

//console.log(sumToByFormula(5));

/**
 * Calculate factorial
The factorial of a natural number is a number multiplied by "number minus one", 
then by "number minus two", and so on till 1. The factorial of n is denoted as n!
We can write a definition of factorial like this:
n! = n * (n - 1) * (n - 2) * ...*1
Values of factorials for different n:
 */

// Using a for loop.
function factorialForLoop(n) {
    let product = 1;
    for (let i = 1; i <= n; i++) {
        product *= i;
    }
    return product;
}

//console.log(factorialForLoop(5));

//Using a recursion

function factorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
//console.log(factorialRec(5));

//using formula n! = n×(n-1)!

// function factorialByFormula(n) {
//     let result = n * (n - 1);
//     return result;
// }

// console.log(factorialByFormula(5));
/**
 * Fibonacci numbers
The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, the next number is a sum of the two preceding ones.

First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on: 1, 1, 2, 3, 5, 8, 13, 21....

Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.

Write a function fib(n) that returns the n-th Fibonacci number.
 */

function fibonacci(n) {
    if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// console.log(FibonacciNumbers(3));
// console.log(FibonacciNumbers(5));