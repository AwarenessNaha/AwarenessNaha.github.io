// function makeAccount() {
//     let amount = 0;
//     let add = function (num) { return amount += num; };
//     let debit = function (num1) { return amount -= num1; };
//     function account(fn, num2) { return fn(num2) };
//     return account;
// }
// // let add = function (num) { return amount += num; };
// // let debit = function (num1) { return amount -= num1; };
// const account1 = makeAccount();
// console.log(account1(add, 10));
// console.log(account1(add, 10));
// console.log(account1(debit, 4));

function makeAccount() {
    let amount = 0;
    function account(operator, num) {
        if (operator === "add") {
            amount += num;
        } else if (operator === "debit") {
            amount -= num;
        }
        return amount;
    }
    return account;
}

const account1 = makeAccount();
console.log(account1("add", 10));
console.log(account1("add", 10));
console.log(account1("debit", 4));
