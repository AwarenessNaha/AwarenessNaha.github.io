/**
 * 5. Write a function, that given two arrays representing two non-negative integers with digits,
 *  adds the two numbers, and return it as an array.
#add_two_numbers
Input
 
Output
Explanation
[3,4,2], [4,6,5]
[7,0,8]
342+465=807
[1,1], [1,2,3]
[1,3,4]
11+123=134
[1,1], [9,9]
[1,1,0]
 
11+99=110
 */

function addTwoNumbers(arr1, arr2) {
    const num1 = Number(arr1.join(""));
    const num2 = Number(arr2.join(""));
    const num = num1 + num2;
    let str = String(num);
    str = str.split("");
    //str = str.reverse();
    return str;
}

console.log(addTwoNumbers([3, 4, 2], [4, 6, 5])); //[ '8', '0', '7' ] //[ '7', '0', '8' ]
console.log(addTwoNumbers([1, 1], [1, 2, 3])); // [ '1', '3', '4' ]