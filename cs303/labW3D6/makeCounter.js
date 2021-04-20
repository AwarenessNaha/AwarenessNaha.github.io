
let outerCount = 0;
function makeCounter() {
    let count = 0;
    return function (increment) {
        if (increment === undefined) {
            count = count + 1;
            outerCount = count + 1;
        } else {
            count = count + increment;
            outerCount = outerCount + increment;
        }
        if (increment > 3) {
            return "warning increment was by value greater than 3 "
        } else {
            return count;
        }
    }
}

const counter = makeCounter();
console.log(counter());
console.log(outerCount);
console.log(counter(2));
console.log(outerCount);
console.log(counter(10));
console.log(outerCount);

