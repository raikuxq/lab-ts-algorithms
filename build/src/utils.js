"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transposeMatrix = exports.memoize = exports.swapArrayItems = exports.getMinIndexFromIndex = exports.getMinIndex = void 0;
exports.getMinIndex = function (arr) {
    return arr.reduce(function (minIndex, item, index) {
        return item < arr[minIndex] ? index : minIndex;
    }, 0);
};
exports.getMinIndexFromIndex = function (arr, fromIndex) {
    return fromIndex + exports.getMinIndex(arr.slice(fromIndex));
};
exports.swapArrayItems = function (arr, leftIndex, rightIndex) {
    if (leftIndex !== rightIndex) {
        var temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;
    }
};
exports.memoize = function (fn) {
    var cache = new Map();
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var jsonArgs = JSON.stringify(args);
        if (!cache.has(jsonArgs)) {
            var result = fn.apply(void 0, args);
            cache.set(jsonArgs, result);
        }
        return cache.get(jsonArgs);
    };
};
exports.transposeMatrix = function (matrix) {
    return matrix.reduce(function (acc, current, currentIndex) {
        acc[currentIndex] = matrix.map(function (rowArr) { return rowArr[currentIndex]; });
        return acc;
    }, new Array(matrix.length));
};
