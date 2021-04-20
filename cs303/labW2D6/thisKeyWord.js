// let user = {
//     firstName: "John", sayHi() {
//         console.log(`Hello, ${this.firstName}!`);
//     }
// };
// setTimeout(function () { user.sayHi(); }, 5000); //wrapped versus just “user.sayHi” //Or
// setTimeout(() => user.sayHi(), 10000);

// const me = {
//     first: 'Tina',
//     last: 'Xing', getFullName: function () {
//         return this.first + ' ' + this.last;
//     }
// }
// const log = function (height, weight) { // ‘this’ refers to the invoker
//     console.log(this.getFullName() + height + ' ' + weight);
// }
// const logMe = log.bind(me);
// log.Me('180cm‘, '70kg'，);  // Tina Xing 180cm 70kg

//     log.call(me, '180cm', '70kg'); // Tina Xing 180cm 70kg 
//     log.apply(me, ['180cm', '70kg']); // Tina Xing 180cm 70kg 
//     log.bind(me, '180cm', '70kg’)(); // Tina Xing 180cm 70kg

const abc = {
    salute: "",
    greet: function () {
        this.salute = "Hello";
        console.log(this.salute); //Hello
        const setFrench = function (newSalute) { //inner function
            this.salute = newSalute;
        };
        setFrench("Bonjour");
        console.log("expecting Bonjour:", this.salute); //Bonjour?? }
    }
};
abc.greet(); //Hello Hello ???