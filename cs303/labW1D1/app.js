"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { maxOfThree, sum, multiply }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c) {
    if (a > b && a > c) {
        return a;
    }
    if (b > a && b > c) {
        return b;
    }
    if (c > a && c > b) {
        return c;
    }
}

console.log(maxOfThree(1, 2, 3));
console.log(maxOfThree(10, 30, 20));
console.log(maxOfThree(-1, -2, -3));
console.log(maxOfThree(333, 111, 22));

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr) {
    let tot = 0;
    for (const element of arr) {
        tot = tot + element;
    }
    return tot;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} product of arr numbers
 */
function multiply(arr) {
    let tot = 1;
    for (const element of arr) {
        tot = tot * element;
    }

    return tot;

}

console.log(sum([1, 2, 3]));
console.log(multiply([3, 2, 10]));
//console.log(maxOfThree(-1, -2, -3));
//console.log(maxOfThree(333, 111, 22));