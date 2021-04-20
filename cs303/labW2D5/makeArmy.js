"use strict";

function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 10) {
        let shooter = function () {
            console.log(i);
        }; shooters.push(shooter);
        i++;
    }
    return shooters;
}
let army = makeArmy();
army[0]();