"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { topSalary, getDateAgo, getWeekday, getLocalDay, getLastDayOfMonth, formatDate }; //add all of your function names here that you need for the node mocha tests

// let facultyLevi = {
//     name: "Keith",
//     years: 30,
// }

// let { name, age = years, isFaculty = true } = facultyLevi;

/**
 * Create the function topSalary(salaries) that returns the name of the top-paid person.

If salaries is empty, it should return null.
If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
There is a salaries object:
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
 * @param {object} salaries is object with key:value(nmae:salary)
    @returns{string} is name of properties of theobject
 */
// function topSalary(salaries) {
//     let topSalary = 0;
//     let topPerson = null;
//     for (const [name, salary] of Object.entries(salaries)) {
//         if (JSON.stringify(obj) === '{}') {
//             return null;
//         }
//         if (topSalary < salary) {
//             topSalary = salary;
//             topPerson = name;
//         }
//     }
//     return topPerson;
// }

function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }
    return maxName;
}
//Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.

let date1 = new Date(2012, 1, 20, 3, 12);
let date2 = new Date("Feb 20, 2012, 3:12:00");

/**
 * Create a function getDateAgo(date, days) to return the day of month days ago from the date.
 
For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and 
getDateAgo(new Date(), 2) should be 18th.
 * @param {date} date is a date
 * @param {namber} days a number of days
 * @returns {date} new date
 */
function getDateAgo(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}
/**
 * The method date.getDay() returns the number of the weekday, starting from sunday.
 
Let’s make an array of weekdays, so that we can get the proper day name by its number:
 
 */
/**
 * 
 * @param {date} date is a date
 * @returns {day}, a weekday
 */
function getWeekday(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

    return days[date.getDay()];
}

/**
 * 
 * @param {date} date is a date
 * @returns 
 */
function getLocalDay(date) {

    let day = date.getDay();

    if (day == 0) { // weekday 0 (sunday) is 7 in european
        day = 7;
    }

    return day;
}
/**
 * 
 * @param {number} year 
 * @param {number} month 
 * @returns {number} a day of the month
 */
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}
/**
 * 
 * @param {datw} date  a date
 * @returns {date} a new format date
 */
function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;

    // formatting
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (diffSec < 1) {
        return 'right now';
    } else if (diffMin < 1) {
        return `${diffSec} sec. ago`
    } else if (diffHour < 1) {
        return `${diffMin} min. ago`
    } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}