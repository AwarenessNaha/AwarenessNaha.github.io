function makeCounter() {
    let count = 5;
    return function () {
        return Math.floor(Math.random() * 100);
    };
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

let counter2 = makeCounter();

console.log(counter2()); // 0
console.log(counter2()); // 1
console.log(counter2()); // 2