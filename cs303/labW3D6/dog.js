"use strict";
function Dog(name) {
    this.name = name;
    this.walk = function () {
        console.log(this.name + ' is walking . . ');
    }
}
let myDog = new Dog('Candy');
console.log(myDog);
console.log("---------");
console.log(myDog.walk());//why undedined? 
//console.log(Dog.walk());
