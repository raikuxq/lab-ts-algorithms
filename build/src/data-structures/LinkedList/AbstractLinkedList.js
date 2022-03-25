"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractLinkedList = /** @class */ (function () {
    /**
     * Create empty instance
     */
    function AbstractLinkedList() {
        this._head = null;
        this._tail = null;
        this._length = 0;
    }
    /**
     * List length
     * @returns number - quantity of list's elements
     */
    AbstractLinkedList.prototype.length = function () {
        return this._length;
    };
    /**
     * Is list empty
     * @returns boolean - is list empty
     */
    AbstractLinkedList.prototype.isEmpty = function () {
        return this._length === 0;
    };
    /**
     * Get head element data
     * @throws Error when head does not exists
     * @returns data of picked element
     */
    AbstractLinkedList.prototype.peekHead = function () {
        if (!this._head) {
            throw new Error("Head does not exist");
        }
        return this._head.data;
    };
    /**
     * Get tail element data
     * @throws Error when head does not exists
     * @returns data of picked element
     */
    AbstractLinkedList.prototype.peekTail = function () {
        if (!this._tail) {
            throw new Error("Tail does not exist");
        }
        return this._tail.data;
    };
    /**
     * Get elements as array
     * @returns array representation of list
     */
    AbstractLinkedList.prototype.getAsArray = function () {
        var array = [];
        var currentNode = this._tail;
        var counter = 0;
        while (currentNode && counter < this._length) {
            if (currentNode)
                array.push(currentNode.data);
            currentNode = currentNode.next;
            counter++;
        }
        return array;
    };
    /**
     * Get list element by index from start
     * @throws when element does not exists
     * @returns data of picked element
     */
    AbstractLinkedList.prototype.getByIndex = function (index) {
        try {
            var node = this.getNodeByIndex(index);
            return node.data;
        }
        catch (e) {
            throw new Error(e);
        }
    };
    /**
     * Remove all elements from list
     */
    AbstractLinkedList.prototype.clear = function () {
        this._head = null;
        this._tail = null;
        this._length = 0;
    };
    /**
     * Add elements to list from array
     * @param elements - array of elements to push
     * */
    AbstractLinkedList.prototype.pushFromArray = function (elements) {
        var _this = this;
        elements.forEach(function (element) {
            _this.push(element);
        });
    };
    return AbstractLinkedList;
}());
exports.default = AbstractLinkedList;
