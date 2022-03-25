"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractLinkedList_1 = __importDefault(require("../AbstractLinkedList"));
var DoubleLinkedNode_1 = __importDefault(require("./DoubleLinkedNode"));
/**
 * Linear data structure
 * Each node has next and prev sibling
 * Head and tail are linked to each other
 */
var DoubleLinkedList = /** @class */ (function (_super) {
    __extends(DoubleLinkedList, _super);
    /**
     * @inheritDoc
     */
    function DoubleLinkedList() {
        var _this = _super.call(this) || this;
        _this._head = null;
        _this._tail = null;
        _this._length = 0;
        return _this;
    }
    /**
     * Will insert node into head next and tail prev links
     * @param nodeToPush - node that will be added between two nodes
     * @param nodeLeft - will be prev element of pushed node
     * @param nodeRight - will be next element of pushed node
     */
    DoubleLinkedList.prototype.insertNodeBetweenTwoNodes = function (nodeToPush, nodeLeft, nodeRight) {
        if (!this._head)
            this._head = nodeToPush;
        if (!this._tail)
            this._tail = nodeToPush;
        if (!nodeLeft)
            nodeLeft = this._tail;
        if (!nodeRight)
            nodeRight = this._head;
        nodeToPush.next = nodeRight;
        nodeToPush.prev = nodeLeft;
        if (nodeToPush.prev)
            nodeToPush.prev.next = nodeToPush;
        if (nodeToPush.next)
            nodeToPush.next.prev = nodeToPush;
        this._length++;
    };
    /**
     * Will change its neighbors nodes links
     * @param node - node to delete
     * @throws when node does not exist
     * @returns node with empty links that contain only data
     */
    DoubleLinkedList.prototype.deleteNode = function (node) {
        if (node === null)
            throw new Error("Node should be existed");
        var prev = node.prev;
        var next = node.next;
        if (prev)
            prev.next = next;
        if (next)
            next.prev = prev;
        node.next = null;
        node.prev = null;
        this._length--;
        return node;
    };
    /**
     * @inheritDoc
     */
    DoubleLinkedList.prototype.getNodeByIndex = function (index) {
        if (this._length === 0)
            throw new Error("List is empty");
        if (this._length < index)
            throw new Error("Index exceed list length");
        var currentNode = this._tail;
        var counter = 0;
        while (currentNode && counter < index) {
            currentNode = currentNode.next;
            counter++;
        }
        if (currentNode === null)
            throw new Error("Node does not exist");
        return currentNode;
    };
    /**
     * @inheritDoc
     */
    DoubleLinkedList.prototype.push = function (value) {
        var node = new DoubleLinkedNode_1.default(value);
        this.insertNodeBetweenTwoNodes(node, this._head, this._tail);
        this._head = node;
    };
    /**
     * @inheritDoc
     */
    DoubleLinkedList.prototype.pushFromIndex = function (value, fromIndex) {
        var node = new DoubleLinkedNode_1.default(value);
        if (this.isEmpty() && fromIndex === 0) {
            this.push(value);
            return;
        }
        var nodeLeft = this.getNodeByIndex(fromIndex - 1);
        var nodeRight = this.getNodeByIndex(fromIndex);
        this.insertNodeBetweenTwoNodes(node, nodeLeft, nodeRight);
    };
    /**
     * @inheritDoc
     */
    DoubleLinkedList.prototype.unshift = function (value) {
        var node = new DoubleLinkedNode_1.default(value);
        this.insertNodeBetweenTwoNodes(node, this._tail, this._head);
        this._tail = node;
    };
    /**
     * @inheritDoc
     */
    DoubleLinkedList.prototype.pop = function () {
        var _a;
        var deletedNode = this.deleteNode(this._head);
        this._head = ((_a = this._tail) === null || _a === void 0 ? void 0 : _a.prev) || null;
        return deletedNode.data;
    };
    /**
     * @inheritDoc
     */
    DoubleLinkedList.prototype.shift = function () {
        var _a;
        var deletedNode = this.deleteNode(this._tail);
        this._tail = ((_a = this._head) === null || _a === void 0 ? void 0 : _a.next) || null;
        return deletedNode.data;
    };
    /**
     * @inheritDoc
     */
    DoubleLinkedList.prototype.deleteFromIndex = function (fromIndex) {
        var nodeToDelete = this.getNodeByIndex(fromIndex);
        if (nodeToDelete === this._tail) {
            return this.shift();
        }
        if (nodeToDelete === this._head) {
            return this.pop();
        }
        var deletedNode = this.deleteNode(nodeToDelete);
        return deletedNode.data;
    };
    /**
     * @inheritDoc
     */
    DoubleLinkedList.prototype.reverse = function () {
        var currentNode = this._tail;
        var i = 0;
        while (currentNode && i < this._length) {
            var newPrev = currentNode.next;
            var newNext = currentNode.prev;
            currentNode.prev = newPrev;
            currentNode.next = newNext;
            i++;
            currentNode = newNext;
        }
        if (currentNode) {
            this._tail = currentNode.next;
            this._head = currentNode;
        }
    };
    /**
     * List iterator
     * @param fromIndex - where iterator starts from list start
     * @returns iterator instance
     */
    DoubleLinkedList.prototype.iterator = function (fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        var activeNode = this.getNodeByIndex(fromIndex);
        return {
            /**
             * @returns current element data
             */
            current: function () {
                return activeNode.data;
            },
            /**
             * @returns boolean - is next element exists
             */
            hasNext: function () {
                return Boolean(activeNode.next);
            },
            /**
             * @throws when next element does not exists
             * @returns next element data
             */
            next: function () {
                if (!activeNode.next) {
                    throw new Error("Next element does not exist");
                }
                activeNode = activeNode.next;
                return activeNode.data;
            },
            /**
             * @throws when prev element does not exists
             * @returns next element data
             */
            prev: function () {
                if (!activeNode.prev) {
                    throw new Error("Prev element does not exist");
                }
                activeNode = activeNode.prev;
                return activeNode.data;
            },
        };
    };
    return DoubleLinkedList;
}(AbstractLinkedList_1.default));
exports.default = DoubleLinkedList;
