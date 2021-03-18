/**
 * 10. Given an array containing n distinct numbers taken from 0,1,2,...,n, find 
 * the one that is missing from the array.
#missing_number
Input
 
Output
[3,0,1] 2
[9,6,4,2,3,5,7,0,1] 8
 */

function findMissingDistinctNumbers(arr) {
    const min = findMin(arr);
    const max = findMax(arr);
    const missingNumbers = [];
    let index = 0;
    for (let i = min + 1; i < max; i++) {
        if (!arr.includes(i)) {
            missingNumbers[index] = i;
            index++;
        }
    }
    return missingNumbers;
}

function findMin(arr) {
    let min = 0;
    for (let element of arr) {
        if (min > element) {
            min = element;
        }
    }
    return min;
}

function findMax(arr) {
    let max = 0;
    for (let element of arr) {
        if (max < element) {
            max = element;
        }
    }
    return max;
}
console.log(findMin([3, 0, 1]));
console.log(findMax([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(findMissingDistinctNumbers([3, 0, 1])); //[2]
console.log(findMissingDistinctNumbers([9, 6, 4, 2, 3, 5, 7, 0, 1])); //[8]
console.log(findMissingDistinctNumbers([3, 0, 1, 7])); //[ 2, 4, 5, 6 ]
console.log(findMissingDistinctNumbers([9, 6, 4, 2, 7, 0, 1])); //[ 2, 4, 5, 6 ]