/**
 * 11. Given a sorted array and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
You may assume no duplicates in the array. #search_insert_position
Input         Output
[1,3,5,6], 5   2
[1,3,5,6], 2   1
[1,3,5,6], 7   4
[1,3,5,6], 0   0
 */

function searchInsertPosition(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    for (let j = 0; j <= arr.length; j++) {
        if (target > arr[arr.length - 1]) {
            return arr.length;
        }
        if (arr[j] > target) {
            return j;
        }
    }
}

console.log(searchInsertPosition([1, 3, 5, 6], 5)); // 2
console.log(searchInsertPosition([1, 3, 5, 6], 2)); // 1
console.log(searchInsertPosition([1, 3, 5, 6], 7)); // 4
console.log(searchInsertPosition([1, 3, 5, 6], 0)); // 0
