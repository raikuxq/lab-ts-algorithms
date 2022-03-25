"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareAllSortTypes = exports.sortCompareRunner = exports.sortCompare = exports.randomizeArray = void 0;
var perf_hooks_1 = require("perf_hooks");
var merge_sort_1 = require("../algorithms/sorts/merge-sort");
var insertion_sort_1 = require("../algorithms/sorts/insertion-sort");
var bubble_sort_1 = require("../algorithms/sorts/bubble-sort");
var quick_sort_1 = require("../algorithms/sorts/quick-sort");
var select_sort_1 = require("../algorithms/sorts/select-sort");
exports.randomizeArray = function (length, max) {
    return new Array(length).fill(0).map(function () { return Math.round(Math.random() * max); });
};
exports.sortCompare = function (sortFn, n, callsNumber) {
    var totalTime = 0;
    for (var i = 0; i < callsNumber; i++) {
        var generatedArr = exports.randomizeArray(n, 1000);
        var perfStart = perf_hooks_1.performance.now();
        sortFn(generatedArr);
        var perfEnd = perf_hooks_1.performance.now();
        totalTime += perfEnd - perfStart;
    }
    var averageTime = totalTime / callsNumber;
    console.log("N: " + n + " = " + averageTime + "ms");
};
exports.sortCompareRunner = function (sortFn, callsNumber) {
    exports.sortCompare(sortFn, 5, callsNumber);
    exports.sortCompare(sortFn, 50, callsNumber);
    exports.sortCompare(sortFn, 500, callsNumber);
    exports.sortCompare(sortFn, 5000, callsNumber);
    exports.sortCompare(sortFn, 50000, callsNumber);
};
exports.compareAllSortTypes = function () {
    var callsNumber = 10;
    console.log("MERGE SORT:");
    exports.sortCompareRunner(merge_sort_1.mergeSort, callsNumber);
    console.log("QUICK SORT:");
    exports.sortCompareRunner(quick_sort_1.quickSort, callsNumber);
    console.log("SELECTION SORT:");
    exports.sortCompareRunner(select_sort_1.selectSort, callsNumber);
    console.log("BUBBLE SORT:");
    exports.sortCompareRunner(bubble_sort_1.bubbleSort, callsNumber);
    console.log("INSERTION SORT:");
    exports.sortCompareRunner(insertion_sort_1.insertionSort, callsNumber);
};
