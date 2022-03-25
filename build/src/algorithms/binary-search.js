"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = void 0;
/**
 * Find element's index in sorted array
 * Time complexity: O(log(n))
 * @param elements - sorted array of numbers
 * @param searchElement - value of element to search
 * @returns element's index or null if it does not exist
 */
exports.binarySearch = function (elements, searchElement) {
    var length = elements.length;
    var leftIndex = 0;
    var rightIndex = length - 1;
    while (leftIndex <= rightIndex) {
        var midIndex = Math.ceil((leftIndex + rightIndex) / 2);
        var midEl = elements[midIndex];
        if (searchElement == midEl) {
            return midIndex;
        }
        else if (midEl > searchElement) {
            rightIndex = midIndex - 1;
        }
        else if (midEl < searchElement) {
            leftIndex = midIndex + 1;
        }
    }
    return null;
};
