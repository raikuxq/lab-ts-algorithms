"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var quick_sort_1 = require("../src/algorithms/sorts/quick-sort");
var merge_sort_1 = require("../src/algorithms/sorts/merge-sort");
var select_sort_1 = require("../src/algorithms/sorts/select-sort");
var bubble_sort_1 = require("../src/algorithms/sorts/bubble-sort");
var insertion_sort_1 = require("../src/algorithms/sorts/insertion-sort");
var sort_compare_1 = require("../src/performance/sort-compare");
var EnumSortType_1 = require("../src/types/EnumSortType");
var createSortFunction = function (sortType) {
    switch (sortType) {
        case EnumSortType_1.EnumSortType.Quick:
            return quick_sort_1.quickSort;
        case EnumSortType_1.EnumSortType.Merge:
            return merge_sort_1.mergeSort;
        case EnumSortType_1.EnumSortType.Selection:
            return select_sort_1.selectSort;
        case EnumSortType_1.EnumSortType.Bubble:
            return bubble_sort_1.bubbleSort;
        case EnumSortType_1.EnumSortType.Insertion:
            return insertion_sort_1.insertionSort;
        default:
            throw new Error("Invalid sort type");
    }
};
describe.each([
    EnumSortType_1.EnumSortType.Merge,
    EnumSortType_1.EnumSortType.Quick,
    EnumSortType_1.EnumSortType.Bubble,
    EnumSortType_1.EnumSortType.Insertion,
    EnumSortType_1.EnumSortType.Selection,
])("%s sort", function (sortStrategyType) {
    var sort = createSortFunction(sortStrategyType);
    test("should correct sort with random numbers", function () {
        var notSortedArr = sort_compare_1.randomizeArray(100, 500);
        var sortedArr = __spreadArrays(notSortedArr).sort(function (a, b) {
            if (a > b)
                return 1;
            if (a < b)
                return -1;
            return 0;
        });
        expect(sort(notSortedArr)).toEqual(sortedArr);
    });
    test("should correct sort an empty array", function () {
        var emptyArr = [];
        expect(sort(emptyArr)).toEqual(emptyArr);
    });
    test("should correct sort already sorted array", function () {
        var sortedArr = [-5, 0, 5];
        expect(sort(sortedArr)).toEqual(sortedArr);
    });
    test("should correct sort an array with repeated numbers", function () {
        var notSortedArr = [7, 2, 1, 2, 7];
        var sortedArr = [1, 2, 2, 7, 7];
        expect(sort(notSortedArr)).toEqual(sortedArr);
    });
    test("should correct sort an array with float numbers", function () {
        var notSortedArr = [2.5, -2.5, 0, 5.5, -5.5];
        var sortedArr = [-5.5, -2.5, 0, 2.5, 5.5];
        expect(sort(notSortedArr)).toEqual(sortedArr);
    });
});
