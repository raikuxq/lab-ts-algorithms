"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = void 0;
var utils_1 = require("../../utils");
/**
 * Bubble sorting algorithm
 * @param arr - array of numbers
 * @returns arr - sorted array of numbers (array is mutable)
 *
 * @description
 * Time complexity: Best O(n); Avg O(n \^ 2); Worst O(n \^ 2)
 *
 * Memory complexity:
 * Worst case: O(1)
 */
exports.bubbleSort = function (arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                utils_1.swapArrayItems(arr, j, j + 1);
            }
        }
    }
    return arr;
};
