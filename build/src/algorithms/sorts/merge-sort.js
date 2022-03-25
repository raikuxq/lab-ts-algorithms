"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = void 0;
/**
 * Merge two sorted arrays into one array
 * @param arr
 * @param leftIndex - Describes start index of left half
 * @param midIndex - Describes end index of left half
 * @param rightIndex - Describes end index of right half (right half starts at midIndex + 1)
 */
var merge = function (arr, leftIndex, midIndex, rightIndex) {
    var container = arr.slice(leftIndex, rightIndex + 1);
    var resultArrIndex = leftIndex;
    var leftHalfIndex = leftIndex;
    var rightHalfIndex = midIndex + 1;
    /** While both halves of array are not ended */
    while (leftHalfIndex <= midIndex && rightHalfIndex <= rightIndex) {
        var leftHalfElement = container[leftHalfIndex - leftIndex];
        var rightHalfElement = container[rightHalfIndex - leftIndex];
        if (leftHalfElement < rightHalfElement) {
            arr[resultArrIndex] = leftHalfElement;
            leftHalfIndex++;
        }
        else {
            arr[resultArrIndex] = rightHalfElement;
            rightHalfIndex++;
        }
        resultArrIndex++;
    }
    /** If one of halves is ended, the remaining one will just be pushed to result */
    while (leftHalfIndex <= midIndex) {
        arr[resultArrIndex] = container[leftHalfIndex - leftIndex];
        resultArrIndex++;
        leftHalfIndex++;
    }
    while (rightHalfIndex <= rightIndex) {
        arr[resultArrIndex] = container[rightHalfIndex - leftIndex];
        resultArrIndex++;
        rightHalfIndex++;
    }
};
/**
 * Divide array into 2 halves and merge them
 *
 * @param arr - Array to sort
 * @param leftIndex - Describes start index of part to sort
 * @param rightIndex - Describes end index of part to sort
 */
var sortRange = function (arr, leftIndex, rightIndex) {
    if (rightIndex > leftIndex) {
        var midIndex = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);
        sortRange(arr, leftIndex, midIndex);
        sortRange(arr, midIndex + 1, rightIndex);
        merge(arr, leftIndex, midIndex, rightIndex);
    }
};
/**
 * Merge sorting algorithm
 * @param arr - array of numbers
 * @returns arr - sorted array of numbers (array is mutable)
 *
 * @description
 * Time complexity: Best O(n * log(n)); Avg O(n * log(n)); Worst O(n * log(n))
 *
 * Memory complexity:
 * Worst case: O(n)
 */
exports.mergeSort = function (arr) {
    sortRange(arr, 0, arr.length - 1);
    return arr;
};
