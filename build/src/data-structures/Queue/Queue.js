"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DoubleLinkedList_1 = __importDefault(require("../LinkedList/DoubleLinkedList/DoubleLinkedList"));
/**
 * FIFO data structure
 */
var Queue = /** @class */ (function () {
    /**
     * Create a queue instance
     * @param capacity - max stack elements count
     */
    function Queue(capacity) {
        this._capacity = capacity || Number.MAX_VALUE;
        this._list = new DoubleLinkedList_1.default();
    }
    /**
     * Get first element in queue (without deleting)
     * @throws when list is empty
     * @returns element data
     */
    Queue.prototype.peek = function () {
        if (this.isEmpty()) {
            throw new Error("Cannot peek when list is empty");
        }
        return this._list.peekHead();
    };
    /**
     * Add element to queue
     * @param item - element data
     * @throws when list is full
     */
    Queue.prototype.enqueue = function (item) {
        if (this._list.length() >= this._capacity) {
            throw new Error("Cannot enqueue when queue is full");
        }
        this._list.unshift(item);
    };
    /**
     * Delete first element in queue
     * @throws when list is empty
     * @returns element data
     */
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            throw new Error("Cannot dequeue when list is empty");
        }
        return this._list.pop();
    };
    /**
     * Is queue empty
     * @returns boolean
     */
    Queue.prototype.isEmpty = function () {
        return this._list.isEmpty();
    };
    /**
     * Is stack full
     * @returns boolean
     */
    Queue.prototype.isFull = function () {
        return this._list.length() >= this._capacity;
    };
    /**
     * Remove all elements in queue
     */
    Queue.prototype.clear = function () {
        this._list.clear();
    };
    return Queue;
}());
exports.default = Queue;
