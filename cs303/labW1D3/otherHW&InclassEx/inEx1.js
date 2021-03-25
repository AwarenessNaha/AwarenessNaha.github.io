"use strict";


let calculator = {
    aaa: 0,
    bbb: 0,
    getValues: function (aaa, bbb) {
        this.value1 = aaa;
        this.value2 = bbb;
    },
    sum: function () {
        const tot = this.value1 + this.value2;
        return tot;
    },
    mul: function () {
        const product = this.value1 * this.value2;
        return product;
    },
}

