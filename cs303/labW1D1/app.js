"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { maxOfThree, sum, multiply, findLongestWord, reverseArray, reverseArrayInPlace, scoreExams }; //add all of your function names here that you need for the node mocha tests

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

// console.log(maxOfThree(1, 2, 3));
// console.log(maxOfThree(10, 30, 20));
// console.log(maxOfThree(-1, -2, -3));
// console.log(maxOfThree(333, 111, 22));

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

// console.log(sum([1, 2, 3]));
// console.log(multiply([3, 2, 10]));
// //console.log(maxOfThree(-1, -2, -3));
// //console.log(maxOfThree(333, 111, 22));

// Q3
/**
 * 
 * @param {array} str is a array of words
 * @returns {string} is the longest word
 */
function findLongestWord(str) {
    let longest = str[0];
    for (const word of str) {
        if (longest.length < word.length) {
            longest = word;
        }
    }
    return longest;
}
// console.log(findLongestWord(["this", "is", "a word with spaces", "test", "longest"]));
// console.log(findLongestWord(["this", "is", "a", "test", "longest"]));

//Q4
/**
 * 
 * @param {array} arr is given array
 * @returns {array} a reversed array
 */
function reverseArray(arr) {
    const reversed = [];
    let index = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed[index] = arr[i];
        index++;
    }
    return reversed;
}
/**
 * 
 * @param {array} arr is a given array
 * @returns {array} is a reversed array
 */
function reverseArrayInPlace(arr) {
    const reversed = [];
    while (arr.length > 0) {
        let temp = arr.pop();
        reversed.push(temp);
    }
    return reversed;
}

// console.log(reverseArray(["A", "B", "C"]));
// console.log(reverseArray(["A", "B", "C", "D"]));
// console.log(reverseArrayInPlace(["A", "B", "C", "D"]));
// console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));

//Q5
/**
 * 
 * @param {array} studentAnswers a given array
 * @param {array} correctAnswers a given array
 * @returns {array} a return array of score
 */
function scoreExams(studentAnswers, correctAnswers) {
    const score = [];
    for (const answers of studentAnswers) {
        let index = 0;
        let correctCount = 0;
        for (const answer of answers) {
            if (answer === correctAnswers[index]) {
                correctCount++;
            }
            index++;
        }
        score.push(correctCount);
    }
    return score;
}
// const studentAnswers = [[1, 1, 2], [2, 1, 2], [3, 1, 3]];
// const correctAnswers = [3, 1, 2];
// console.log(scoreExams(studentAnswers, correctAnswers));