function isEven(n) {
    if (n === 0) {
        return true;
    } else {
        return isOdd(n - 1);
    }
}

function isOdd(n) {
    if (n === 0) {
        return false;
    } else {
        return isEven(n - 1)
    }
}

console.log(isEven(15));
console.log(isOdd(15));
console.log(isEven(28));
console.log(isOdd(28));