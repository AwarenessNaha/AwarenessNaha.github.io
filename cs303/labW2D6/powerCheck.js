"use strict";

function Person(name, age, gender, status, spread) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.status;
    this.spread = spread;
};

function checkPower(person) {
    let outerExpression = person.getOutterExpression();
    let innerState = person.getInnerState();
    if (outerExpression === innerState) {
        if (outerExpression === "calm") {
            alter("Your are really inpower");
        } else {
            alter("Your are brave to express yourself as what you are");
        }
    } else {
        if (outerExpression === "anger") {
            alter("Your are playful.")
        } else if (outerExpression === "calm") {
            alter("You are  imbalance, either change your inner state or let it express itself!")
        }
    }
}
const person1 = new Person("Ashenafi", 27, "M", "student");
console.log(checkPower(person1));

