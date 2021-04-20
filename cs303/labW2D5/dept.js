
"use strict";
/*eslint-disable*/

let company = {

    sales: [{ name: 'John', salary: 1000 },
    { name: 'Alice', salary: 600 }
    ],
    development: {
        sites: [{ name: 'Peter', salary: 2000 },
        { name: 'Alex', salary: 1800 }
        ], //subdepartments
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};

console.log(company.development.internals[0].salary);
console.log(Object.keys(company));
console.log(Object.values(company));

// /**
//  * @param {Object} department of company
//  * @returns {Number} - total salaries in company
//  */

function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((prev, current) => prev + current.salary, 0);
    } else {
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep);
        }
        return sum;
    }
}

console.log(sumSalaries(company));