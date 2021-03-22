"use strict";

function sayHi() {
    console.log("Hello");
}

const myHi = sayHi;

console.log(sayHi());

// shows the function code 
function higherOrder() {

    return sayHi();
}

console.log(higherOrder()());

