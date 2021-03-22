/**
 * 12. Given an integer array nums, find the contiguous subarray (containing at least one number)
 *  which has the largest sum and return its sum.
#maxinum_subarray
Input                          Output    Explanation
[-2,1,-3,4,-1,2,1,-5,4]         6         [4,-1,2,1]
 */

function maxSubArray(arr) {

    let maxFinal = 0;
    let maxCurrent = 0;

    for (let i = 0; i < arr.length; i++) {
        maxCurrent = maxCurrent + arr[i];
        if (maxCurrent < 0) {
            maxCurrent = 0;
        }
        if (maxFinal < maxCurrent) {
            maxFinal = maxCurrent;
        }
        // if (maxCurrent < 0) {
        //     maxCurrent = 0;
        // }
    }
    return maxFinal;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
console.log(maxSubArray([-2, 9, -3, 4, -1, 2, 1, -5, 4])); //12