"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SingleLinkedList_1 = __importDefault(require("../src/data-structures/LinkedList/SingleLinkedList/SingleLinkedList"));
var DoubleLinkedList_1 = __importDefault(require("../src/data-structures/LinkedList/DoubleLinkedList/DoubleLinkedList"));
var EnumLinkedListType_1 = require("../src/types/EnumLinkedListType");
var createLinkedList_1 = require("../src/data-structures/LinkedList/helpers/createLinkedList");
describe("Linked list collection", function () {
    describe("polymorphism should work correctly", function () {
        var doubleLinkedList = new DoubleLinkedList_1.default();
        var singleLinkedList = new SingleLinkedList_1.default();
        var collection = [
            doubleLinkedList,
            singleLinkedList,
        ];
        collection.forEach(function (list) {
            list.push(1);
            list.push(2);
        });
        test("double linked list should contain elements", function () {
            expect(doubleLinkedList.getAsArray()).toEqual([1, 2]);
        });
        test("single linked list should contain elements", function () {
            expect(doubleLinkedList.getAsArray()).toEqual([1, 2]);
        });
    });
});
describe.each([EnumLinkedListType_1.EnumLinkedListType.SINGLE, EnumLinkedListType_1.EnumLinkedListType.DOUBLE])("%s linked list", function (listType) {
    describe("method push", function () {
        test("should add elements to list's end", function () {
            var list = createLinkedList_1.createLinkedList(listType);
            list.push(1);
            expect(list.peekHead()).toBe(1);
        });
    });
    describe("method pushFromIndex", function () {
        test("should add elements to list from index", function () {
            var list = createLinkedList_1.createLinkedList(listType);
            var expectedArr = [10, 20, 30, 40, 50];
            list.pushFromArray([10, 30, 40, 50]);
            list.pushFromIndex(20, 1);
            expect(list.getAsArray()).toEqual(expectedArr);
        });
        test("should add elements to list from start", function () {
            var list = createLinkedList_1.createLinkedList(listType);
            var expectedArr = [0, 10];
            list.pushFromArray([0]);
            list.pushFromIndex(10, 1);
            expect(list.getAsArray()).toEqual(expectedArr);
        });
        test("should add elements to empty list", function () {
            var list = createLinkedList_1.createLinkedList(listType);
            var expectedArr = [10];
            list.pushFromIndex(10, 0);
            expect(list.getAsArray()).toEqual(expectedArr);
        });
        test("should add elements to list from end", function () {
            var list = createLinkedList_1.createLinkedList(listType);
            var expectedArr = [0, 10, 20, 30];
            list.pushFromArray([0, 10, 30]);
            list.pushFromIndex(20, 2);
            expect(list.getAsArray()).toEqual(expectedArr);
        });
    });
    describe("method unshift", function () {
        test("should add elements to list's start", function () {
            var list = createLinkedList_1.createLinkedList(listType);
            list.unshift(1);
            list.unshift(0);
            expect(list.peekTail()).toBe(0);
        });
    });
    describe("method pushFromArray", function () {
        test("should add elements to list's end", function () {
            var list = createLinkedList_1.createLinkedList(listType);
            var arr = [1, 2, 3, 4, 5];
            list.pushFromArray(arr);
            expect(list.getAsArray()).toEqual(arr);
        });
    });
    describe("method peekTail", function () {
        test("should throw when list is empty", function () {
            var emptyList = createLinkedList_1.createLinkedList(listType);
            expect(function () {
                emptyList.peekTail();
            }).toThrowError();
        });
        test("should return first element from list", function () {
            var list = new DoubleLinkedList_1.default();
            list.pushFromArray([10, 20, 30, 40, 50]);
            expect(list.peekTail()).toBe(10);
        });
    });
    describe("method peekHead", function () {
        test("should throw when list is empty", function () {
            var emptyList = createLinkedList_1.createLinkedList(listType);
            expect(function () {
                emptyList.peekHead();
            }).toThrowError();
        });
        test("should return first element from list", function () {
            var list = createLinkedList_1.createLinkedList(listType);
            list.pushFromArray([10, 20, 30, 40, 50]);
            expect(list.peekHead()).toBe(50);
        });
    });
    describe("method getByIndex", function () {
        test("should throw when list is empty", function () {
            var emptyList = createLinkedList_1.createLinkedList(listType);
            expect(function () {
                emptyList.getByIndex(0);
            }).toThrowError();
        });
        test("should return element by its index from list", function () {
            var list = createLinkedList_1.createLinkedList(listType);
            list.pushFromArray([10, 20, 30, 40, 50]);
            expect(list.getByIndex(2)).toBe(30);
        });
        test("should throw when index exceed list length", function () {
            var list = createLinkedList_1.createLinkedList(listType);
            expect(function () {
                list.getByIndex(1000);
            }).toThrowError();
        });
    });
    describe("method shift", function () {
        describe("should delete first element and return its value", function () {
            var list = createLinkedList_1.createLinkedList(listType);
            list.pushFromArray([10, 20]);
            var shifted = list.shift();
            test("should delete correct", function () {
                expect(list.getAsArray()).toEqual([20]);
            });
            test("should return correct value", function () {
                expect(shifted).toBe(10);
            });
        });
        test("should throw when list is empty", function () {
            var emptyList = createLinkedList_1.createLinkedList(listType);
            expect(function () {
                emptyList.shift();
            }).toThrowError();
        });
    });
    describe("method pop", function () {
        describe("should delete last element and return its value", function () {
            var list = createLinkedList_1.createLinkedList(listType);
            list.pushFromArray([10, 40]);
            var shifted = list.pop();
            test("should delete correct", function () {
                expect(list.getAsArray()).toEqual([10]);
            });
            test("should return correct value", function () {
                expect(shifted).toBe(40);
            });
        });
        test("should throw when list is empty", function () {
            var emptyList = createLinkedList_1.createLinkedList(listType);
            expect(function () {
                emptyList.pop();
            }).toThrowError();
        });
    });
    describe("method deleteFromIndex", function () {
        describe("should delete element by index and return its value", function () {
            var list = createLinkedList_1.createLinkedList(listType);
            list.pushFromArray([10, 20, 30]);
            var shifted = list.deleteFromIndex(1);
            test("should delete correct", function () {
                expect(list.getAsArray()).toEqual([10, 30]);
            });
            test("should return correct value", function () {
                expect(shifted).toBe(20);
            });
        });
        test("should throw when list is empty", function () {
            var emptyList = createLinkedList_1.createLinkedList(listType);
            expect(function () {
                emptyList.shift();
            }).toThrowError();
        });
    });
    describe("method reverse", function () {
        test("should correct reverse list", function () {
            var list = createLinkedList_1.createLinkedList(listType);
            var array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
            var reversedArray = __spreadArrays(array).reverse();
            list.pushFromArray(array);
            list.reverse();
            expect(list.getAsArray()).toEqual(reversedArray);
        });
    });
    describe("method clear", function () {
        test("should correct clear list", function () {
            var list = createLinkedList_1.createLinkedList(listType);
            var testArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];
            list.pushFromArray(testArray);
            list.clear();
            expect(list.getAsArray()).toHaveLength(0);
        });
    });
});
describe("Linked list iterator", function () {
    describe("in Double linked list", function () {
        test("should throw when try to create iterator for empty list", function () {
            var list = new DoubleLinkedList_1.default();
            expect(function () {
                list.iterator(0);
            }).toThrowError();
        });
        describe("when list is not empty", function () {
            var list = new DoubleLinkedList_1.default();
            var testArray = [10, 20, 30];
            list.pushFromArray(testArray);
            var iterator = list.iterator(0);
            test("should return element data at current position", function () {
                expect(iterator.current()).toBe(10);
            });
            test("should have next element", function () {
                expect(iterator.hasNext()).toBe(true);
            });
            test("should iterate to next", function () {
                expect(iterator.next()).toBe(20);
            });
            test("should iterate to prev", function () {
                expect(iterator.prev()).toBe(10);
            });
        });
    });
    describe("in Single linked list", function () {
        test("should throw when try to create iterator for empty list", function () {
            var list = new SingleLinkedList_1.default();
            expect(function () {
                list.iterator(0);
            }).toThrowError();
        });
        describe("when list is not empty", function () {
            var list = new SingleLinkedList_1.default();
            var testArray = [10, 20, 30];
            list.pushFromArray(testArray);
            var iterator = list.iterator(0);
            test("should return element data at current position", function () {
                expect(iterator.current()).toBe(10);
            });
            test("should have next element", function () {
                expect(iterator.hasNext()).toBe(true);
            });
            test("should iterate to next", function () {
                expect(iterator.next()).toBe(20);
            });
        });
    });
});
