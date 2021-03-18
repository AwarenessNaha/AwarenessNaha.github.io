"use strict";
/* global pow assert */
describe("pow", function () {

    it("2 raised to power 3 is 8", function () {
        assert.strictEqual(8, pow(2, 3));
    });

    it("3 raised to power 3 is 27", function () {
        assert.strictEqual(27, pow(3, 3));
    });

});