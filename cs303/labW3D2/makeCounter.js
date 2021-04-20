function makeCounter() {
    let count = 0;

    return function () {
        let count1 = 2;
        return count += count1;
    };
}

let counter = makeCounter();

console.log(counter());//2
console.log(counter());//4
console.log(counter());//6
console.log(counter());//8