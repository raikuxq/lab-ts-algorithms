"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectSort = void 0;
var utils_1 = require("../../utils");
/**
 * Selection sorting algorithm
 * @param arr - array of numbers
 * @returns arr - sorted array of numbers (array is mutable)
 *
 * @description
 * Time complexity: Best O(n \^ 2); Avg O(n \^ 2); Worst O(n \^ 2)
 *
 * Memory complexity:
 * Worst case: O(1)
 */
exports.selectSort = function (arr) {
    for (var index = 0; index < arr.length; index++) {
        var minIndex = utils_1.getMinIndexFromIndex(arr, index);
        utils_1.swapArrayItems(arr, minIndex, index);
    }
    return arr;
};
