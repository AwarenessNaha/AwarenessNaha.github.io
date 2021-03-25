// function makeUser() {
//     return {
//         name: "John",
//         ref: this
//     };
// }

// //let user = makeUser();

// console.log(user.ref.name); // What's the result? undefined

function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
}

let user = makeUser();

console.log(user.ref().name); // John