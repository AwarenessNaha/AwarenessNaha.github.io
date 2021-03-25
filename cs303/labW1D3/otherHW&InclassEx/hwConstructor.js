const { setupMaster } = require("node:cluster");
const { read } = require("node:fs");

function Calculator() {
    this.read = function () {
        this.aaa = +prompt("is aaa:", 0);
        this.bbb = + prompt("is bbb:", 0);
    };
    this.sum = function () {
        return this.aaa + this.bbb;
    };
    this.mul = function () {
        return this.aaa * this.bbb;
    };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

