"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSort = void 0;
var utils_1 = require("../../utils");
/**
 * Quick sort algorithm
 * @param arr - array of numbers
 * @returns arr - sorted array of numbers (array is mutable)
 *
 * @description
 * Time complexity: Best O(n * log(n)); Avg O(n * log(n)); Worst O(n  ^2)
 *
 * Memory complexity:
 * Worst case: O(1)
 */
exports.quickSort = function (arr) {
    var partition = function (arr, leftIndex, rightIndex) {
        var pivot = arr[leftIndex];
        var leftWall = leftIndex;
        var rightWall = rightIndex;
        while (leftWall <= rightWall) {
            while (arr[rightWall] > pivot) {
                rightWall--;
            }
            while (arr[leftWall] < pivot) {
                leftWall++;
            }
            if (leftWall <= rightWall) {
                utils_1.swapArrayItems(arr, leftWall, rightWall);
                rightWall--;
                leftWall++;
            }
        }
        return leftWall;
    };
    var sort = function (arr, leftIndex, rightIndex) {
        if (leftIndex === void 0) { leftIndex = 0; }
        if (rightIndex === void 0) { rightIndex = arr.length - 1; }
        if (leftIndex < rightIndex) {
            var pivot = partition(arr, leftIndex, rightIndex);
            sort(arr, leftIndex, pivot - 1);
            sort(arr, pivot, rightIndex);
        }
        return arr;
    };
    return sort(arr);
};
