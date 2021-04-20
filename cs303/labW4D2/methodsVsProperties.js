class User {
    constructor(name = "Anonymous") {
        this.name = name;
    }
    sayHi() {
        console.log(`Hello, ${this.name}!`);
    }
}
fred = new User();
User.prototype = { name: "Naha", age: 0 };
fred.__proto__ = User.prototype;
console.log(fred); // {name: "Anonymous"}
console.log(fred.__proto__); //User.prototype ({})
console.log(User.prototype); //{sayHi: function, constructor: User} ({})
fred.sayHi(); //Hello, Anonymous
bob = new User("Bob");
console.log(bob); //{name: "bob"}
bob.sayHi();// Hello, bob