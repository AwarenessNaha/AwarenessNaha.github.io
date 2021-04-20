// function Rabbit() { }
// Rabbit.prototype = {
//     eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// let rabbit2 = new Rabbit();

// console.log(rabbit.eats); // true
// console.log(rabbit2.eats); // undefined

// function User(name) {
//     this.name = name;
// }
// User.prototype = {}; // (*)

// let user = new User('John');
// let user2 = new user.constructor('Pete');

// console.log(user2.name); // undefined

// class Animal {
//     name = 'animal';

//     constructor() {
//         console.log(this.name); // (*)
//     }
// }

// class Rabbit extends Animal {
//     name = 'rabbit';
// }

// new Animal(); // animal
// new Rabbit(); // animal

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

//let user = new User("Jack");
let user = User("Jack");
console.log(user.name); // Jack
console.log(user.isAdmin); // false