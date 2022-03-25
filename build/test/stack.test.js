"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = __importDefault(require("../src/data-structures/Stack/Stack"));
describe("stack", function () {
    describe("method peek", function () {
        test("should correct peek value from top", function () {
            var stack = new Stack_1.default(100);
            stack.push(5);
            stack.push(10);
            expect(stack.peek()).toBe(10);
        });
        test("should throw when stack is empty", function () {
            var stack = new Stack_1.default(1);
            expect(function () {
                stack.peek();
            }).toThrowError();
        });
    });
    describe("method push", function () {
        test("should correct push to top", function () {
            var stack = new Stack_1.default(100);
            stack.push(5);
            stack.push(10);
            expect(stack.peek()).toBe(10);
        });
        test("should throw when stack is full", function () {
            var stack = new Stack_1.default(1);
            stack.push(10);
            expect(function () {
                stack.push(20);
            }).toThrowError();
        });
    });
    describe("method pop", function () {
        describe("should correct pop from top", function () {
            var stack = new Stack_1.default(100);
            stack.push(5);
            stack.push(10);
            var popped = stack.pop();
            test("should delete correct", function () {
                expect(stack.peek()).toBe(5);
            });
            test("should return correct value", function () {
                expect(popped).toBe(10);
            });
        });
        test("should throw when stack is empty", function () {
            var stack = new Stack_1.default(1);
            expect(function () {
                stack.pop();
            }).toThrowError();
        });
    });
    describe("method isEmpty", function () {
        test("should return true when stack is empty", function () {
            var stack = new Stack_1.default(100);
            expect(stack.isEmpty()).toBe(true);
        });
    });
    describe("method isFull", function () {
        test("should return false when stack elements length lower than its capacity", function () {
            var stack = new Stack_1.default(100);
            stack.push(10);
            expect(stack.isFull()).toBe(false);
        });
        test("should return true when stack elements length same as its capacity", function () {
            var stack = new Stack_1.default(1);
            stack.push(10);
            expect(stack.isFull()).toBe(true);
        });
    });
});
