"use strict";
/*eslint-disable*/


function Student(id, name) {
    //this = {id:id, name:name, display:function()...}
    let age = 15; //private property
    this.id = id; //public
    this.name = name;
    // return this;
    this.display = function () {
        console.log(this.id, this.name, age);
    }
}

//console.log(student.id);
let student1 = new Student(1, "John");
student1.display();
console.log(student1.age);
//console.log(student1.age);

student1.displayName = function () {
    console.log(this.name);
}

student1.displayName();
let student2 = new Student(2, "Jim");
console.log(student1);
console.log(student2);
//
// console.log(student1);
// console.log(student2);