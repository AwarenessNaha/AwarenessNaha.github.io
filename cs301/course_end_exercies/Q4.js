/**
 * 4. Given an array of integers, write a function that finds the pair in array whose sum 
 * is closest to 0. If there are more than one pair, return any pair.
For e.g., [4,2, -1,3,-2,-3]→[2,-2] #closest_to_zero
 */

/**
 * input: an array of integers;
 * output: an array of one pare;
 * procesing:
 * - helper function to find min sum of pairs findMinAbsSum(arr, target)
 * - define a variable to hold the value of the currentMinSum;
 * - 
 */

function findMinAbsSumPair(arr) {
    let minPair = [];

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            let tempSum = Math.abs(arr[i] + arr[j]);
            if (tempSum === findMinAbsSumOfAll(arr)) {
                minPair[0] = arr[i];
                minPair[1] = arr[j];
                return minPair;
            }
        }
    }
    //return minPair;
}


// helper fun

function findMinAbsSumOfAll(arr1) {
    let minSum = findMinAbsSum(arr1, arr1[0]);
    for (let i = 1; i < arr1.length; i++) {
        let currentMinSum = findMinAbsSum(arr1, arr1[i]);
        if (minSum > currentMinSum) {
            minSum = currentMinSum;
        }
    }
    return minSum;
}


function findMinAbsSum(arr, target) {
    let minSum = 8;
    for (let i = 0; i < arr1.length; i++) {
        let currentSum = Math.abs(target + arr[i]);
        if (minSum > currentSum) {
            minSum = currentSum;
        }
    }
    return minSum;
}

let arr1 = [4, 2, -1, 3, -2, -3];//[2,-2]; 

console.log(findMinAbsSumPair(arr1)); //[2,-2]; 