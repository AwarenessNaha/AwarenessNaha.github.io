/**
 * 17. Write a function summaryRanges, such that given a sorted integer array nums, 
 * returns the smallest sorted list of ranges that cover all the numbers in the array exactly. 
 * That is, each element of nums is covered by exactly one of the ranges, and there is no integer x 
 * such that x is in one of the ranges but not in nums.
 
Each range [a,b] in the list should be output as: "a->b" if a != b
"a" if a == b
#summary_ranges
Input   Output
[0,1,2,4,5,7]   ["0->2","4->5","7"]
[0,2,3,4,6,8,9]
["0","2->4","6","8->9"]
[]
[]
[-1]
["-1"]
[0]
 
["0"]

 */

function summaryRanges(nums) {
    if (!nums.length) { return nums; }
    let array = [];
    let start = nums[0];
    let pre = start;
    let data;

    for (let i = 1; i < nums.length; i++) {
        data = nums[i];
        if (data - pre != 1) {
            pushValue(start, pre, array);
            start = data;
        }
        pre = data;
    }
    pushValue(start, pre, array);
    let arr = array.map((d) => {
        return d.join('->');
    })
    return arr;
};

function pushValue(start, pre, array) {
    if (pre === start) {
        array.push([pre])
    } else {
        array.push([start, pre]);
    }
}

console.log(summaryRanges([1, 2, 3, 5, 7, 8, 9])); //[ '1->3', '5', '7->9' ]
console.log(summaryRanges([1, 2, 4, 5, 6, 8, 9])); // [ '1->2', '4->6', '8->9' ]