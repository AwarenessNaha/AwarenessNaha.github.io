"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator, copySorted, sortByAge, shuffle, getAverageAge }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {array} arr is a given array of number
 * @param {*} a is a number
 * @param {*} b is a number
 * @returns {array} is array its elements ar in the range
 */
function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
}


function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}


/**
 * 
 */
function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function (str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    };

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}

/**
 * 
 * @param {array} arr is a given array
 * @returns {array} only the unique element
 */
function unique(arr) {
    for (let i = 0; i < arr.length; i++) {
        let uniqueElem = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === uniqueElem) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}

/**
 * 
 * @param {array} array is a given array
 * @returns {object} an object
 */
function groupById(array) {
    return array.reduce((object, item) => {
        object[item.id] = item;
        return object;
    }, {})
}
/**
 * 
 * @param {array} arr is a given array
 * @returns {array} a sorted array
 */
function copySorted(arr) {
    return arr.slice().sort();
}

/**
 * Write the function sortByAge(users) that gets an array of objects with the age 
 * property and sorts them by age.
 */
/**
 * 
 * @param {array} arr is a given array
 * @return {array} is a sorted array
 */
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}

/**
 * 
 * @param {array} array is a given array
 * @returns {array} an array
 */
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
/**
 * 
 * @param {object} users 
 * @returns {number} is avg age
 */
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}