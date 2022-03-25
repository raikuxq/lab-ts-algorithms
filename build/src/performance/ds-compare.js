"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.perfStack = exports.perfQueue = exports.perf = void 0;
var perf_hooks_1 = require("perf_hooks");
var Queue_1 = __importDefault(require("../data-structures/Queue/Queue"));
var Stack_1 = __importDefault(require("../data-structures/Stack/Stack"));
exports.perf = function (fn, operation) {
    var queue = new Queue_1.default();
    var perfStart = perf_hooks_1.performance.now();
    queue.enqueue(4);
    fn();
    var perfEnd = perf_hooks_1.performance.now();
    console.log(operation + " = " + (perfEnd - perfStart) + "ms");
};
exports.perfQueue = function () {
    console.log("QUEUE PERFORMANCE TEST:");
    var queue = new Queue_1.default();
    exports.perf(function () {
        queue.enqueue(4);
    }, "enqueue");
    exports.perf(function () {
        queue.peek();
    }, "peek");
    exports.perf(function () {
        queue.dequeue();
    }, "dequeue");
    exports.perf(function () {
        queue.isEmpty();
    }, "isEmpty");
};
exports.perfStack = function () {
    console.log("STACK PERFORMANCE TEST:");
    var stack = new Stack_1.default(10);
    exports.perf(function () {
        stack.push(4);
    }, "push");
    exports.perf(function () {
        stack.peek();
    }, "peek");
    exports.perf(function () {
        stack.pop();
    }, "pop");
    exports.perf(function () {
        stack.isEmpty();
    }, "isEmpty");
};
