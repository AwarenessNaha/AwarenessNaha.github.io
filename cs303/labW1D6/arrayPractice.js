"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge, sumOfNumbers, avgOfNumbers, maxOfNumbers, maxOfAges, avgOfEvenAge, avgOfOddAge }; //add all of your function names here that you need for the node mocha tests


function doubleNums(arr) {
    return arr.map(num => num * 2);
}

function doubleAges(arr) {
    return arr.map(obj => Object.age * 2);
}

function filterEven(arr) {
    return arr.filter(function (item) { //item => item%2===0
        if (item % 2 === 0) {
            return item;
        }
    });
}

function filterOver10(arr) {
    return arr.filter(function (item) {
        if (item > 10) {
            return true;
        }
    });
}

function findEvenNum(arr) {
    arr.find(item => itemm % 2 === 0);
}

function findEvenAge(arr) {
    arr.find(item => item.age >= 10);

}

function sumOfNumbers(arr) {
    return arr.reduce((sum, item) => sum + item, 0);
}

function avgOfNumbers(arr) {
    let sum = arr.reduce((sum, item) => sum + item, 0);
    return sum / arr.length;
}

function maxOfNumbers(arr) {
    return arr.reduce((max, item) => { Math.max(max, item) }, -Infinity);
}

function maxOfAges(arr) {
    return arr.reduce((maxAge, item) => Math.max(maxAge, item.age), -Infinity);
}



function avgOfEvenAge(arr) {
    let arr1 = arr.map(item => item.age);
    let arr2 = arr1.filter(item => item % 2 === 0);
    let sumOfEvenAge = arr2.reduce((sum, item) => sum + item, 0);
    return sumOfEvenAge / arr2.length;
}

function avgOfOddAge(arr) {
    return (arr.map(item => item.age).filter(item => item % 2 !== 0).reduce((sum, item) => sum + item, 0)) / arr.map(item => item.age).filter(item => item % 2 !== 0).length;
}
function includesEvenNum(arr) {

}

function includesEvenAge(arr) {

}