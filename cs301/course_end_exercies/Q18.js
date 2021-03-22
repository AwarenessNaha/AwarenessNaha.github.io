/**
 * 18. For two strings s and t, we say "t divides s" if and only if s = t + ... + t 1 
 * or more times)
(t concatenated with itself
 
Input                                 Output

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 #greatest_common_divisor_of_strings
 */


function greatestCommonDivisorOfStrings(str1, str2) {
    let minLen = Math.min(str1.length, str2.length);
    let divisorLen = 0;
    for (let i = 0; i < minLen; i++) {
        if (str1[i] === str2[i]) {
            divisorLen++;
        }
        let divisor = str1.substring(0, divisorLen);
    }
}

function getGreatestDivisor(str1, str2) {
    if (str1.length < str2.length) {
        return getGreatestDivisor(str2, str1);
    } else if (!str1.startsWith(str2)) {
        return "";
    } else if (str2.length === 0) {
        return str1;
    } else {

        return getGreatestDivisor(str1.substring(str2.length), str2);
    }
}

//     let minLen = Math.min(str1.length, str2.length);
//     let divisorLen = 0;
//     for (let i = 0; i < minLen; i++) {
//         if (str1[i] === str2[i]) {
//             divisorLen++;
//         }
//     }
//     let divisor = str1.substring(0, divisorLen);
//     return divisor;
// }




function isDivided(strS, strT) { //helper function
    const len = strT.length;
    while (strS !== "") {
        if (strS.substring(0, len) === strT) {
            strS = strS.substring(len);
        } else { return false; }
    }
    return true;
}

console.log(isDivided("ababab", "ab"));
console.log(isDivided("abababcd", "ab"));
console.log(getGreatestDivisor("ababababab", "abab"));
console.log(getGreatestDivisor("abcabcabc", "abcabc"));