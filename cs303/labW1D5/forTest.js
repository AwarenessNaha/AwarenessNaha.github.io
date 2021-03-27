function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        // remove if outside of the interval
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }

}

let arr = [5, 6, 3, 8, 1, 9];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log(arr); // [3, 1]

function sortedArray(arr) {
    let arrCopy = arr.slice();
    let sortedArr = arrCopy.sort();
    return sortedArr;
}
let arr5 = ["a", "n", "m", "b", "t", "c"];
console.log(sortedArray(arr5));
console.log(arr5);