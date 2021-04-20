function makeWorker() {
    let name = "John";
    return function () {
        console.log(name);
    };
}
let name = "Pete";
// create a function
let work = makeWorker();
// call it
work(); // what will it show? “John" (name where created) or “Pete" (name where called)?

let name1 = "John";
function sayHi() {
    console.log("Hi, " + name1);
}
name1 = "Pete";
sayHi(); // what will it show: "John" or "Pete"?