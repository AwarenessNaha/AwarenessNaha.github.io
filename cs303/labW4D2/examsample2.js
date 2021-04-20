//"use strict";

function Person(name) {
    console.log("1-------");
    console.log('Person1 this: ', this); //________________________
    this.name = name;
    console.log("2-------");
    console.log('Person2 this: ', this); //________________________
}
tina = {};
const thisUser = Person.bind(tina);
// let p1 = new Person("Naha");
// let p2 = new Person("Gaia");
thisUser("Naha");
thisUser("Gaia");
//console.log(p1);
// function Doctor(name, department) {
//     console.log("3-------");
//     console.log(this); //________________________
//     Person.call(this, name, department);
//     console.log("4-------");
//     console.log(this); //________________________
//     this.dept = department;
// }
// Doctor.prototype.report = function () {
//     return "medical report"
// };
// function Surgeon(name, department) {
//     console.log("5-------");
//     console.log(this); //________________________
//     Doctor.call(this, name, department);
//     console.log("6-------");
//     console.log(this); //________________________
// }
// Surgeon.prototype.operate = function () {
//     return 'operation performed.'
// };
// Surgeon.prototype.__proto__ = Doctor.prototype;
// let surg1 = new Surgeon("Fred", "Cardiology");
// console.log("7-------");
// console.log(surg1.dept); //________________________
// console.log("8-------");
// console.log(surg1.name); //________________________
// console.log("9-------");
// console.log(surg1.report()); //________________________
// console.log("10-------");
// console.log(surg1); //________________________
// console.log("11-------");
// console.log(surg1.__proto__); //________________________
// console.log("12-------");
// console.log(surg1.prototype); //________________________
// console.log("13-------");
// console.log(Surgeon.__proto__); //________________________
// console.log("14-------");
// console.log(Surgeon.prototype); //________________________
// console.log("15-------");
// console.log(Surgeon.prototype.__proto__); //________________________