"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertionSort = void 0;
var utils_1 = require("../../utils");
/**
 * Insertion sorting algorithm
 * @param arr - array of numbers
 * @returns arr - sorted array of numbers (array is mutable)
 *
 * @description
 * Time complexity: Best O(n); Avg O(n \^ 2); Worst O(n \^ 2);
 *
 * Memory complexity:
 * Worst case: O(1)
 */
exports.insertionSort = function (arr) {
    for (var i = 1; i < arr.length; i++) {
        var current = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > current) {
            utils_1.swapArrayItems(arr, j + 1, j);
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
};
