/**
 * 15. Given an array nums, write a function to move all 0's to the end of it while maintaining 
 * the relative order of the non-zero elements.
#move_zeroes
Example:
Input: [0, 1, 0, 12, 3]
Output: [1,3,12,0,0]
Note: you must do this in-place without making a copy of the array.
 */

function moveZeroes(arr) {
    arr = arr.sort(function (a, b) { return a - b });
    while (arr[0] === 0) {
        let zero = arr.shift();
        arr.push(zero);
    }
    return arr;
}
console.log(moveZeroes([0, 1, 0, 12, 3])); //[ 1, 3, 12, 0, 0 ]
console.log(moveZeroes([0, 0, 15, 23, 12, 1, 0, 12, 3])); //[1, 3, 12, 12, 15, 23, 0,  0,  0 ]