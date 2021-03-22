/**
 * 16. Write a function that takes a string as input and reverse only the vowels of a string.
 * # reverse_vowels_of_a_string
 * Input           Output
"hello"           "holle"
"leetcode"         "leotcede"
 */

function reverseVowelsOfaString(str) {
    str = str.toLowerCase();
    let arr = str.split("");
    let vowelsIndexs = getVowelsIndexs(arr);
    for (let i = 0; i < vowelsIndexs.length; i++) {
        let temp = arr[vowelsIndexs[i]];
        arr[vowelsIndexs[i]] = arr[vowelsIndexs[vowelsIndexs.length - 1 - i]];
        arr[vowelsIndexs[vowelsIndexs.length - 1 - i]] = temp;
    }
    let str1 = arr.join("");
    return str1;
}


function getVowelsIndexs(arr) {
    let vowelsIndexs = [];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "a" || arr[i] === "e" || arr[i] === "i" || arr[i] === "o" || arr[i] === "u") {
            vowelsIndexs[index] = i;
            index++;
        }
    }
    return vowelsIndexs;
}
console.log(getVowelsIndexs("leetcode"));
console.log(reverseVowelsOfaString("leetcode"));
