"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var binary_search_1 = require("../src/algorithms/binary-search");
describe("Binary search", function () {
    test("find in positive 100 elements", function () {
        var arr = [];
        for (var i = 0; i < 100; i++)
            arr.push(i + 1);
        var index = binary_search_1.binarySearch(arr, 97);
        expect(index).toBe(96);
    });
    test("find in negative 100 elements", function () {
        var arr = [];
        for (var i = 0; i < 100; i++)
            arr.push(-100 + i - 1);
        var foundElement = binary_search_1.binarySearch(arr, -97);
        expect(foundElement).toBe(4);
    });
    test("in empty list", function () {
        var arr = [];
        expect(binary_search_1.binarySearch(arr, 10)).toBeNull();
    });
});
