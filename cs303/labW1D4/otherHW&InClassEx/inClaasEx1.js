const numbers = [1, 5, 18, 2, 77, 108];

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
const filtered = numbers.filter(isEven);
const found = numbers.find(isEven);
console.log("filter is", filtered);
console.log("found is", found);
