"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DoubleLinkedList_1 = __importDefault(require("../LinkedList/DoubleLinkedList/DoubleLinkedList"));
/**
 * LIFO data structure
 */
var Stack = /** @class */ (function () {
    /**
     * Create a stack instance
     * @param capacity - max stack elements count
     */
    function Stack(capacity) {
        this._capacity = capacity || Number.MAX_VALUE;
        this._list = new DoubleLinkedList_1.default();
    }
    /**
     * Get stack top element
     * @throws when list is empty
     * @returns element data
     */
    Stack.prototype.peek = function () {
        if (this.isEmpty()) {
            throw new Error("Cannot peek when list is empty");
        }
        return this._list.peekHead();
    };
    /**
     * Add element to stack head
     * @param item - element data
     * @throws when list is full
     */
    Stack.prototype.push = function (item) {
        if (this.isFull()) {
            throw new Error("Stack is full");
        }
        this._list.push(item);
    };
    /**
     * Remove element from stack head
     * @throws when list is empty
     * @returns element data
     */
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            throw new Error("Cannot pop when stack is empty");
        }
        return this._list.pop();
    };
    /**
     * Is stack empty
     * @returns boolean
     */
    Stack.prototype.isEmpty = function () {
        return this._list.length() === 0;
    };
    /**
     * Is stack full
     * @returns boolean
     */
    Stack.prototype.isFull = function () {
        return this._list.length() >= this._capacity;
    };
    /**
     * Remove all elements in stack
     */
    Stack.prototype.clear = function () {
        this._list.clear();
    };
    return Stack;
}());
exports.default = Stack;
