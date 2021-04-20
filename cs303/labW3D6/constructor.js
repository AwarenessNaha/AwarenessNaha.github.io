class User {
    constructor(name = "Anonymous") {
        this.name = name;
    }
    sayHi() {
        console.log(`Hello, ${this.name}!`);
    }
}
fred = new User();
console.log(fred);
console.log(fred.__proto__);
console.log(User.prototype);
console.log("------------")
fred.sayHi();
bob = new User("Bob");
console.log(bob);
bob.sayHi();