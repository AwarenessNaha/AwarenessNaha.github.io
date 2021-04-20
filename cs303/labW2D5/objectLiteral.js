"use strict";
/*eslint-disable*/

const student = { id: 123, name: "John" };
console.log(student);
student.age = 13;
console.log(student);

student.display = function () {
    console.log(this.credit);
    console.log(this);
}

student.display();

let student1 = student;
let student2 = Object.assign({}, student);

console.log(student1 === student);
console.log(student2 === student);
console.log(student2 === student1);
student1.courses = ["CS303", "CS301"];
student2.course = ["CS301"];
// console.log(student);
// console.log(student1);
// console.log(student2);



