"use strict";
/*eslint-disable*/

const data = {
    code: 23,
    "item s": [{
        id: 1,
        name: 'grape'
    }, {
        id: 2,
        name: 'apple'
    }]
};

console.log(data["item s"][0].id);

// 
//Example 2 - Object - keys are only numbers
let pets_2 = { a: "cat", 1: "dog", 2: "mouse" };
console.log("Example 2 - Object - keys are only numbers")
console.log(pets_2["a"]); //cat
console.log(pets_2["b"]); //dog
console.log(pets_2[2]); //mouse)
// 
console.log(pets_2["0"]); //cat
console.log(pets_2["1"]); //dog
console.log(pets_2["2"]); //mouse)
//

//Example 4 - Object - keys starting with a number
//Golden Rule #1: Any key that starts with a number must be a string
let pets_4 = { 1: "cat", "2abc": "dog", "3y3": "mouse" };
console.log("Example 4 - Object - keys starting with a number")
console.log(pets_4["1"]);
console.log(pets_4["2abc"]);
console.log(pets_4["3y3"]);
// 
// Example 5 - Array of Object
let pets_5 = [{ prop1: "cat", prop2: "dog", prop3: "mouse" }];
console.log("Example 5 - Array of Object")
console.log(pets_5[0]["prop1"]); //cat
console.log(pets_5[0]["prop1"]); //dog
console.log(pets_5[0]["prop1"]); //mouse)
// 
console.log(pets_5[0].prop1); //cat
console.log(pets_5[0].prop2); //dog
console.log(pets_5[0].prop3); //mouse)
// 
// Example 6 - Array of Objects of Array of Objects
var pets_6 = [
    { prop1: "cat", prop2: "dog", prop3: "mouse" },
    { prop1: "apple", prop2: "banana", prop3: "cherry" },
    { prop1: [{ name: "Henry", age: 2, breed: "Poodle" }] }
];
console.log("Example 6 - Array of Objects of Array of Objects")
console.log(pets_6[0].prop1);//cat
console.log(pets_6[1].prop2);//banana
console.log(pets_6[2].prop1[0]["name"]);//Henry