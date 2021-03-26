
const arr = [1, 5, 16, 3, 108];

function isEvenLog(number) {
    if (number % 2 === 0) {
        console.log(number);
    }
}
function isEvenLog1(number, index, array) {
    if (number % 2 === 0) {
        console.log(index, " . ", number, "from the array:", array);
    }
}

arr.forEach(isEvenLog);
arr.forEach(isEvenLog1);
