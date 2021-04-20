//"use strict";
function area() {
    console.log(this);
    return this.side * this.side;
}
const square1 = { side: 5, area: area };
console.log(square1.area());

