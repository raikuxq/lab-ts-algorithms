"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factorial_1 = require("../src/algorithms/factorial");
describe("Factorial", function () {
    var results = new Map();
    var resultsBigValues = new Map();
    results
        .set(5, 120)
        .set(6, 720)
        .set(10, 3628800)
        .set(15, 1307674368000)
        .set(20, 2432902008176640000)
        .set(25, 15511210043330985984000000);
    resultsBigValues
        .set(35, 1.0333147966386144e40)
        .set(45, 1.1962222086548019e56)
        .set(77, 1.4518309202828584e113)
        .set(90, 1.4857159644817607e138)
        .set(99, 9.33262154439441e155)
        .set(100, 9.33262154439441e157);
    var resultsKeys = Array.from(results.keys());
    var resultsBigValuesKeys = Array.from(resultsBigValues.keys());
    describe("without memoize", function () {
        test.each(resultsKeys)("with n = %i", function (n) {
            expect(factorial_1.factorial(n)).toBe(results.get(n));
        });
    });
    describe("with memoize", function () {
        test.each(resultsKeys)("with n = %i", function (n) {
            expect(factorial_1.memoizedFactorial(n)).toBe(results.get(n));
        });
        test.each(resultsBigValuesKeys)("with n = %i", function (n) {
            expect(factorial_1.memoizedFactorial(n)).toBe(resultsBigValues.get(n));
        });
    });
});
