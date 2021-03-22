/* eslint-disable id-length */
"use strict";
/**
 * /**
 * 1. A porcupine number is a prime number whose last digit is 9 and the next prime number 
 * that follows it also ends with the digit 9. For example, 139 is a porcupine number because:
a. it is a prime
b. itendsina9
c. The next prime number after it is 149 which also ends in 9.
Write a method named findPorcupineNumber which takes an integer argument n and returns 
the first porcupine number that is greater than n. So findPorcupineNumber(0) would return 139 
(because 139 happens to be the first porcupine number) and so would findPorcupineNumber(138). 
But findPorcupineNumber(139) would return 409 which is the second porcupine number.
#procupine_number

 */
/**
 * definning table:
 * input: an integer
 * output: an integer, the second porcupine number
 * processing: 
 * - 
 * 
 * @param {*} num
 */

function findPorcupineNumber(num) {
    let j = num + 1;
    while (!isPorcupine(j)) {
        j++;
    }
    return j;
}
/**
 * 
 * @param {number} num1 a integer
 * @returns {boolean} true or false
 */
function isPrime(num1) {
    for (let i = 2; i < num1; i++) {
        if (num1 % i === 0) {
            return false;
        }
    }
    return true;
}
/**
 * 
 * @param {number} num2 anumber
 * @returns {boolean} true or false
 */
function isPorcupine(num2) {
    if (isPrime(num2) && num2 %10 === 9) {
        let i = num2 + 1;
        while (!isPrime(i)) {
            i++;
        }
        if (i % 10 === 9) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(findPorcupineNumber(0));
console.log(findPorcupineNumber(138));
console.log(findPorcupineNumber(140));
console.log(findPorcupineNumber(1138));
