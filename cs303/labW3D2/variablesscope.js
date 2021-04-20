"use strict";

// let name = "John";
// function sayHi() {
//     console.log("Hi, " + name);
// }

// name = "Pete";
// sayHi(); // what will it show: "John" or "Pete"?


function makeWorker() {
    let name = "John";
    return function () {
        let name2 = " Awareness";
        console.log(name + " and " + name1 + " are " + name2);
    };
}
let name = "Pete";
let name1 = "Naha";

let work = makeWorker();

work(); //John and Naha are  Awareness
name1 = "prof. Keith";
work(); //John and prof. Keith are  Awareness