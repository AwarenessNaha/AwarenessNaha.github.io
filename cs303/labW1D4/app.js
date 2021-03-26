"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { ucFirst, getMaxSubSum, truncate, camelize, checkSpam, extractCurrencyValue }; //add all of your function names here that you need for the node mocha tests


/** Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

 */
/**
 * 
 * @param {String} str a given string
 * @returns {String} a new string
 */
function ucFirst(str) {
    if (str.length === 0) {
        return "";
    }
    let ucStr = "";
    ucStr = str[0].toUpperCase() + str.slice(1);
    return ucStr;
}
/**
 * Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

The function must be case-insensitive:
 * @param {String} str a given string
* @return {boolean} true or false
 */
function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

//     lowerstr = str.toLowerCase();
//     if (lowerstr.includes("viagra") || lowerstr.includes("xxx")) {
//         return true;
//     } else {
//         return false;
//     }
// }

/**
 * Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – 
 * replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

The result of the function should be the truncated (if needed) string.

For instance:

truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

truncate("Hi everyone!", 20) = "Hi everyone!"
 * @param {String} str a given string
 * @param {number} maxlength a number
 * @returns {String} a string
 */
function truncate(str, maxlength) {
    if (str.length < maxlength) {
        return str;
    } else {
        return str.substr(0, maxlength - 1) + "…";
    }

}
/**
 * We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

The example:

alert( extractCurrencyValue('$120') === 120 ); // true
 * @param {String} currency a string with number 
* @return {number} CurrencyValue
 */
function extractCurrencyValue(currency) {
    const currencyValue = currency.substring(1);
    return Number(currencyValue);
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
    let maxSum = 0;
    let currentSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (currentSum < 0) {
            currentSum = 0;
        }
        currentSum += arr[i];
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }
    return maxSum;
}

function camelize(str) {
    let strArr = str.split("");
    for (let i = strArr.length - 1; i >= 0; i--) {
        if (strArr[i] === "-") {
            strArr[i] = "";
        }
    }
    return strArr.join("");
}

