"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoizedFactorial = exports.factorial = void 0;
var utils_1 = require("../utils");
/**
 * Time complexity: O(n!)
 * @param x - number
 * @returns calculated factorial value
 */
exports.factorial = function (x) {
    return x > 1 ? x * exports.factorial(x - 1) : x;
};
/**
 * Time complexity: O(n) - due to caching
 * @param x - number
 * @returns calculated factorial value
 */
exports.memoizedFactorial = utils_1.memoize(function (n) {
    return n > 1 ? n * exports.memoizedFactorial(n - 1) : n;
});
