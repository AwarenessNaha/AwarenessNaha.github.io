/**
 * Given an array of integers nums and an integer target, return indices of the two numbers 
 * such that they add up to target.You may assume that each input would have exactly one solution,
 *  and you may not use the same element twice. You can return the answer in any order.
 * #two_sum
 * Input
Output
nums =[2,7,11,15], target =9: [0,1], because nums[0]+nums[1]==9
nums = [2,3,4], target = 6: [0,2]
nums=[3,3], target = 6: [0,1]
 */

function findIndices(arr, target) {
    let sumTwo = 0;
    let indices = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j > i; j--) {
            sumTwo = arr[i] + arr[j];
            if (sumTwo === target) {
                indices[0] = i;
                indices[1] = j;
            }
        }
    }
    return indices;
}
let nums1 = [2, 7, 11, 15];
let target1 = 9;
let nums2 = [2, 3, 4];
let target2 = 6;
let nums3 = [3, 3];
let target3 = 6;

console.log(findIndices(nums1, target1));
console.log(findIndices(nums2, target2));
console.log(findIndices(nums3, target3));