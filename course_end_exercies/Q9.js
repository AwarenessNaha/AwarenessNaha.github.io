/**
 * 9. A strobogrammatic number is a number that looks the same when rotated 180 degree 
 * (looked upside down)
Write a function to determine if a number is strobogrammatic. The number is represented as string.
#strobogrammatic_number
69 true
101 true
88 true
868 false

 * 
 */

function strobogrammatic(num) {
    let str = num.toString();
    for (let i = 0; i < str.length; i++) {

        if (!isInclude(str[i])) {
            return false;
        } else if (isInclude6Or9(str[i])) {
            //if (!(str[i] === "6" && str[i + 1] === "9") || (str[i] === "9" && str[i + 1] === "6")) {
            if (isInclude69(str[i] + str[i + i])) {
                return false;
            }
            // if (!(str[i] === "6" && str[i + 1] === "9") || (str[i] === "9" && str[i + 1] === "6")) {
            //     return false

        }
    }

    return true;
}


function isInclude(char) {
    if (char === "0" || char === "1" || char === "8" || char === "6" || char === "9") {
        return true;
    } else {
        return false;
    }
}
function isInclude6Or9(char) {
    if (char === "6" || char === "9") {
        return true;
    } else {
        return false;
    }
}
function isInclude69(char) {
    if (char === "69" || char === "96") {
        return true;
    } else {
        return false;
    }
}
console.log(strobogrammatic(88));
console.log(strobogrammatic(96));
console.log(strobogrammatic(868));
console.log(strobogrammatic(101));
console.log(strobogrammatic(8722));
console.log(strobogrammatic(69));
console.log(strobogrammatic(6868));