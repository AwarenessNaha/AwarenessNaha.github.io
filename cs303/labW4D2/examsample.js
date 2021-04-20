function Player(name, age) {
    this.age = age;
    this.name = name;
}
Player.prototype.play = function () {
    return this.name + ' is playing';
}
fred = new Player("Fred", 12);
console.log(fred.age === 12);  //________true____________
console.log(fred.__proto__.age === 12); //__________false__________
console.log(Player.__proto__.name === "Fred"); //_______false_____________
console.log(Player.prototype.play() === "Fred is playing"); //______false__________
console.log(fred.play() === "Fred is playing"); //__________true__________
pete = new Player("Pete", 15);
console.log(Player.prototype.name === "Pete"); //___________false___________
console.log(pete.__proto__ === fred.__proto__); //____________true________
