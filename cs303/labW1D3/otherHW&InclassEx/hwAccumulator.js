

function Accumulator(aaa) {
    this.sum = aaa; //startingValue
    this.read = function () {
        this.sum += +prompt("enter number here:", 0);
    };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);