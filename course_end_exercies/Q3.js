/**
 * 3. Write a function named mostFrequent() that given an array, finds the most frequent element 
 * in it. If there are multiple elements that appear maximum number of times, returns any one of them.
#most_frequent

 */

function mostFrequent(arr) {
    let mostF = 1;
    let currentF = 0;
    let mostFrequentElement;
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let currentF = getFrequent(arr, current);
        if (mostF < currentF) {
            mostF = currentF;
            mostFrequentElement = current;
        }
    }
    return mostFrequentElement;
}

function getFrequent(arr, target) {
    let frequent = 0;
    for (let element of arr) {
        if (element === target) {
            frequent++;
        }
    }
    return frequent;
}

const arr1 = [1, 5, 5, 5, 5, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4];

console.log(getFrequent(arr1, 5));
console.log(getFrequent(arr1, 3));
console.log(mostFrequent(arr1));