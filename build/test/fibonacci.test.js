"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fibonacci_1 = require("../src/algorithms/fibonacci");
describe("Fibonacci", function () {
    var results = new Map();
    var resultsBigValues = new Map();
    results
        .set(5, 5)
        .set(6, 8)
        .set(10, 55)
        .set(15, 610)
        .set(20, 6765)
        .set(25, 75025);
    resultsBigValues
        .set(40, 102334155)
        .set(45, 1134903170)
        .set(77, 5527939700884757)
        .set(90, 2880067194370816120);
    var resultsKeys = Array.from(results.keys());
    var resultsBigValuesKeys = Array.from(resultsBigValues.keys());
    describe("without memoize", function () {
        test.each(resultsKeys)("with n = %i", function (n) {
            expect(fibonacci_1.fibonacci(n)).toBe(results.get(n));
        });
    });
    describe("with memoize", function () {
        test.each(resultsKeys)("with n = %i", function (n) {
            expect(fibonacci_1.memoizedFibonacci(n)).toBe(results.get(n));
        });
        test.each(resultsBigValuesKeys)("with n = %i", function (n) {
            expect(fibonacci_1.memoizedFibonacci(n)).toBe(resultsBigValues.get(n));
        });
    });
});
