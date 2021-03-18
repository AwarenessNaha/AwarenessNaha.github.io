/**
 * 6. Given two binary strings, return their sum (also a binary string).
The input strings are both non-empty and contains only characters 1 and 0. #add_binary
Input
 
Output
a="11", b="1"
"100"
a="1010", b ="1011"
"10101"
 */

function addBinary(a, b) {
    let dec = Number(parseInt(a, 2)) + Number(parseInt(b, 2));
    return dec.toString(2);
};
console.log(addBinary("1010", "1011"));
console.log(addBinary("11", "1"));