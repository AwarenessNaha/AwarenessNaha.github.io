
"use strict";

function canYouSpotTheProblem() {
    "use strict";
    for (let counter = 0; counter < 10; counter++) {
        console.log("Happy happy");
    }
}

canYouSpotTheProblem();
// → ReferenceError: counter is not defined

//console.log(numberToString(13, 10));
// → 1.5e-3231.3e-3221.3e-3211.3e-3201.3e-3191.3e-3181.3…

function promptNumber(question) {
    debugger;
    let result = Number(prompt(question));
    if (Number.isNaN(result)) return null;
    else return result;
}

console.log(promptNumber("How many trees do you see?"));

function lastElement(array) {
    if (array.length == 0) {
        return { failed: true };
    } else {
        return { element: array[array.length - 1] };
    }
}

// function promptDirection(question) {
//     let result = prompt(question);
//     if (result.toLowerCase() == "left") return "L";
//     if (result.toLowerCase() == "right") return "R";
//     throw new Error("Invalid direction: " + result);
// }

// function look() {
//     if (promptDirection("Which way?") == "L") {
//         return "a house";
//     } else {
//         return "two angry bears";
//     }
// }

// try {
//     console.log("You see", look());
// } catch (error) {
//     console.log("Something went wrong: " + error);
// }

// const accounts = {
//     a: 100,
//     b: 0,
//     c: 20
// };

// function getAccount() {
//     let accountName = prompt("Enter an account name");
//     if (!accounts.hasOwnProperty(accountName)) {
//         throw new Error(`No such account: ${accountName}`);
//     }
//     return accountName;
// }

// function transfer(from, amount) {
//     if (accounts[from] < amount) return;
//     accounts[from] -= amount;
//     accounts[getAccount()] += amount;
// }

// for (; ;) {
//     try {
//         let dir = promptDirection("Where?");
//         console.log("You chose ", dir);
//         break;
//     } catch (e) {
//         if (e instanceof Error) {
//             console.log("Not a valid direction. Try again.");
//         } else {
//             throw e;
//         }
//     }
// }
