function makeCounter() {
    let counter = 0;
    function increment() {
        counter++;
        //console.log(counter);
        return counter;
    }
    return increment;
}

let counting = makeCounter();
console.log(counting);
counting();
console.log(counting());
