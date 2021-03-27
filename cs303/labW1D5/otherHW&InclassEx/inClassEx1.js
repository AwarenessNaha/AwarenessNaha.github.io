
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(
    function (item, index) {
        const newItem = "" + index + ":" + item.length;
        return newItem;
    });
console.log(lengths); // [ '0:5', '1:7', '2:6' ]

function compareNumber(a, b) {
    a = "" + a;
    b = "" + b;
    //return a - b;
    if (a > b) return 1;
    if (a < b) return -1;
    if (a = b) return 0;
}
let a = 3;
let b = 12;
function decreasingNumber(a, b) {
    a = "" + a;
    b = "" + b;
    //return b - a;
    if (a > b) return -1;
    if (a < b) return 1;
    if (a = b) return 0;
}

let arr = [1, 14, 3];
console.log(arr.sort(compareNumber));
console.log(arr.sort(decreasingNumber));
console.log(arr.sort());

let arr1 = [1, 2, 3, 4, 5, 6, 7];
let produce = arr1.reduce(function (prod, item) {
    return prod *= item;
}, 1);
console.log(produce);

let maxItem = arr1.reduce(function (max, item) {
    return Math.max(max, item);
}, 0);
console.log(maxItem);

console.log("3" - "7");
console.log("3" * "7");
console.log("14" / "7");
