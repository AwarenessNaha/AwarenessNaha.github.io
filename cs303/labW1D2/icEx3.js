/**
 * Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
 */

function isEmpty(obj) {
    let arr = [];
    for (let key in obj) {
        arr.push(key);
    }
    if (arr.length === 0) {
        return true;
    } else {
        return false;
    }
}
function isEmpty2(obj) {
    for (let key in obj) {
        // if the loop has started, there is a property
        return false;
    }
    return true;
}

let schedule = {};
let schedule2 = {};

console.log(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false
console.log(isEmpty2(schedule2)); // true
schedule2["8:30"] = "get up";
console.log(isEmpty2(schedule2)); // false
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function SumObjectProperties(obj) {
    let sum = 0;
    for (const key in obj) {
        sum += obj[key];
    }
    return sum;
}

console.log(SumObjectProperties(salaries));

/**
 * Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

P.S. Use typeof to check for a number here.
 */

function multiplyNumeric(obj) {
    for (const key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] = obj[key] * 2;
        }
    }
    return obj;
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log(multiplyNumeric(menu));
console.log(menu);