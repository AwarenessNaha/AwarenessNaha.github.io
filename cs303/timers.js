
function sayHiClosure() {
    return function sayHi() {
        console.log("hi");
    }
}
function sayHi() {
    console.log("hi");
}
let timerId = setTimeout(sayHiClosure(), 4000);
clearTimeout(timerId);