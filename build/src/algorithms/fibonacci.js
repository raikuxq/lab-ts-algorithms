"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoizedFibonacci = exports.fibonacci = void 0;
var utils_1 = require("../utils");
exports.fibonacci = function (n) {
    return n > 1 ? exports.fibonacci(n - 1) + exports.fibonacci(n - 2) : n;
};
exports.memoizedFibonacci = utils_1.memoize(function (n) {
    return n > 1 ? exports.memoizedFibonacci(n - 1) + exports.memoizedFibonacci(n - 2) : n;
});
