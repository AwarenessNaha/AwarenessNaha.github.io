function factorialRec(num) {
    if (n === 1) {
        return 1;
    } else {
        return n * factorialRec(n - 1);
    }
}

function charCountRec(str, char) {
    if (str === "") {
        return 0;
    } else if (str[0] === char) {
        return 1 + charCountRec(str.substr(1), char);
    } else {
        return charCountRec(str.substr(1), char);
    }
}

console.log(charCountRec("AABBCCDDDDD", "E"));