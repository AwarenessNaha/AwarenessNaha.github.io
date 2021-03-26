
let str = "aaa-bbb-ccc---";
let str1 = "-aaa-bbb-ccc";
let str2 = "-aaa-bbb-ccc-";
let str3 = "background-color";
let str4 = "list-style-image";
let str5 = "-webkit-transition";


function camelize(str) {
    let strArr = str.split("");
    for (let i = strArr.length - 1; i >= 0; i--) {
        if (strArr[i] === "-") {
            strArr[i] = "";
        }
    }
    return strArr.join("");
}

console.log(camelize(str));
console.log(camelize(str1));
console.log(camelize(str2));
console.log(camelize(str3));
console.log(camelize(str4));
console.log(camelize(str5));
//console.log("aaa-bbb-ccc");