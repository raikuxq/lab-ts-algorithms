"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Queue_1 = __importDefault(require("../src/data-structures/Queue/Queue"));
describe("queue", function () {
    describe("method peek", function () {
        test("should correct peek value from top", function () {
            var queue = new Queue_1.default();
            queue.enqueue(5);
            queue.enqueue(10);
            expect(queue.peek()).toBe(5);
        });
        test("should throw when queue is empty", function () {
            var queue = new Queue_1.default();
            expect(function () {
                queue.peek();
            }).toThrowError();
        });
    });
    describe("method enqueue", function () {
        test("should correct enqueue to top", function () {
            var queue = new Queue_1.default();
            queue.enqueue(5);
            queue.enqueue(10);
            expect(queue.peek()).toBe(5);
        });
    });
    describe("method dequeue", function () {
        describe("should correct dequeue from top", function () {
            var queue = new Queue_1.default();
            queue.enqueue(5);
            queue.enqueue(10);
            var dequeued = queue.dequeue();
            test("should delete correct", function () {
                expect(queue.peek()).toBe(10);
            });
            test("should return correct value", function () {
                expect(dequeued).toBe(5);
            });
        });
        test("should throw when queue is empty", function () {
            var queue = new Queue_1.default();
            expect(function () {
                queue.dequeue();
            }).toThrowError();
        });
    });
    describe("method isEmpty", function () {
        test("should return true when queue is empty", function () {
            var queue = new Queue_1.default();
            expect(queue.isEmpty()).toBe(true);
        });
    });
});
