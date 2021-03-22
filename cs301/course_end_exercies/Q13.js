/**13. Given an array of integers and an integer k, find out whether there are two 
 * distinct indices i and j in the array such that nums[i] = nums[j] and the absolute 
 * difference between i and j is at most k.
#contains_duplicate_ii

Input                        Output
nums=[1,2,3,1], k=3          true
nums=[1,0,1,1], k=1          true
nums= [1,2,3,1,2,3], k=2     false
*/

function contains_duplicate_ii(arr, indexdDff) {
    let maxIndexDiff = 0;
    for (let i = 0; i < arr.length; i++) {
        let CurrentIndexDiff = 0;
        let duplicateIndex = findDuplicateIndex(arr, arr[i]);
        CurrentIndexDiff = duplicateIndex - i;
        if (maxIndexDiff < CurrentIndexDiff) {
            maxIndexDiff = CurrentIndexDiff;
        }
    }
    if (maxIndexDiff < indexdDff) {
        return true;
    } else {
        return false
    }
}

function findDuplicateIndex(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
}

console.log(contains_duplicate_ii([1, 2, 3, 1], 3));
console.log(contains_duplicate_ii([1, 0, 1, 1], 1));
console.log(contains_duplicate_ii([1, 2, 3, 1, 2, 3], 2));