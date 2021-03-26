
let str = "---aaa-bbb-ccc";
let str1 = "-aaa-bbb-ccc";
let str2 = "-aaa-bbb-ccc-";
let str3 = "background-color";
let str4 = "list-style-image";
let str5 = "-webkit-transition";

// function camelize(str) {
//     //let ucfStr = ucFirst(str);
//     let strArr = str.split("");
//     for (let i = strArr.length - 1; i >= 0; i--) {
//         if (strArr[i] === "-") {
//             strArr.splice(i, 1);
//         }
//     }
//     return strArr.join("");
// }


function camelize(str) {
    let wordArr = str.split("-");
    for (let i = 1; i < wordArr.length; i++) {
        if (wordArr[i] === "") {
            continue;
        }
        wordArr[i] = ucFirst(wordArr[i]);
    }
    let lcFirstWordArr = lcFirst(wordArr.join(""));

    return lcFirstWordArr;
}

function ucFirst(str) {
    if (str.length === 0) {
        return "";
    }
    let ucStr = "";
    ucStr = str[0].toUpperCase() + str.slice(1);
    return ucStr;
}
function lcFirst(str) {
    if (str.length === 0) {
        return "";
    }
    let lcStr = "";
    lcStr = str[0].toLowerCase() + str.slice(1);
    return lcStr;
}
console.log(str.split("-"));

console.log(camelize(str));
console.log(camelize(str1));
console.log(camelize(str2));
console.log(camelize(str3));
console.log(camelize(str4));
console.log(camelize(str5));
