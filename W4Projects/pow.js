/* eslint-disable id-length */
"use strict";
/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */
function pow(x, n) {
    /* function code is to be written, empty now */
    //return 8;  //:) we cheat!!

    debugger;
    let result = 1;
    //let result = 10;  

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

// eslint-disable-next-line strict
"use restrict";

exports.insertArray = insertArray;
exports.isArrayEqual = isArrayEqual;
exports.isPalindrome = isPalindrome;
exports.reverse2String = reverse2String;
exports.enhancedIncludes = enhancedIncludes;
exports.ssReverse = ssReverse;
exports.shiftPush = shiftPush;
exports.merge = merge;
exports.mergeTwo = mergeTwo;
exports.ssReverse1 = ssReverse1;

//Q0
/**
 * 
 * @param {number} index is integer for array index
 * @param {array} target is an array to be spliced
 * @param {array} insert holds elements to splice
 * @returns {array} the spliced array
 */
function insertArray(index, target, insert) {
    target.splice(index, 0, ...insert);
    return target;
}

//Q1
/**
 * 
 * @param {Array} arr1 a given array
 * @param {Array} arr2 a given array
 * @returns {boolean} true or false
 */
function isArrayEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
        return true;
    }
}

//Q2
/**
 * 
 * @param {Array} arr any given array
 * @returns {boolean} true or false is palindrome
 *  */
function isPalindrome(arr) {
    let currentArr = arr.slice();
    let reversedArr = [];
    while (arr.length > 0) {

        reversedArr.push(arr.pop());
    }
    return isArrayEqual(reversedArr, currentArr);
}

//Q3
/**
 * 
 * @param {array} arr a given array
 * @returns {String} is reversed string from array
 */
function reverse2String(arr) {
    arr = arr.reverse();
    let string = arr.join("_");
    return string;
}
//Q4
/**
 * 
 * @param {array} arr a given array
 * @param {any} item is a value to search in the array
 * @returns {any} boolean or index, or -1
 */
function enhancedIncludes(arr, item) {
    let result = [arr.includes(item), arr.indexOf(item), arr.lastIndexOf(item)];
    return result;
    //return `${arr.includes(item)}, ${arr.indexOf(item)}, ${arr.lastIndexOf(item)}`;
}

//Q5
//Q5 solution1
/**
 * 
 * @param {array} arr a given array
 * @returns {array} a reversed array
 */
function ssReverse(arr) {
    let reversedArr = arr.slice();
    console.log(reversedArr);
    let index = 0;
    const len = arr.length - 1;
    for (let i = len; i >= 0; i--) {
        const element = arr.splice(i, 1);
        let element1 = element[0];
        reversedArr.splice(index, 1, element1);
        index++;
    }
    return reversedArr;
}


/**
 * //Q5 solution2
 * @param {array} arr one any given array
 * @returns {array}  a reversed array
 */
function ssReverse1(arr) {
    let reversedArr = [];
    let index = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr[index] = arr[i];
        index++;
    }
    return reversedArr;
}



//Q6
/**
 * 
 * @param {array} arr a given array
 * @param {number} item for sorting
 * @returns {array} a new array
 */
/*function shiftPush(arr, item) {
    let newArr = [];
    arr.forEach(function (item1) {
        if (item1 < item) {
            newArr.push(item1);
        }
    })
    return newArr;
} */
/**
 * 
 * @param {array} arr a given array
 * @param {any} item a given value
 * @returns {array} a new array
 */
function shiftPush(arr, item) {
    let newArr = [];
    while (arr.length > 0) {
        let element = arr.shift();
        if (element < item) {
            newArr.push(element);
        }
    }
    return newArr;
}
//Q6 merge
/**
 * 
 * @param {array} arr1 a given array
 * @param {array} arr2 a given array
 * @returns {array} a new array erged from two
 */
function merge(arr1, arr2) {
    let newArr = [];
    //let len = arr1.length;
    let i = 0;
    while (arr1.length > 0) {
        newArr.concat(shiftPush(arr2, arr1[i]));
        i++;
        //newArr.push(arr1.pop());
    }
    newArr.concat(arr2);
    return newArr;
}
//Q6 mergeTwo
/**
 * 
 * @param {array} arr1 a given array
 * @param {array} arr2  a given array
 * @returns {array} a new array
 */
function mergeTwo(arr1, arr2) {

    return (arr1.concat(arr2)).sort(function (aEle, bEle) { return aEle - bEle });

}