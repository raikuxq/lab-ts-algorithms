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
var SingleLinkedNode_1 = __importDefault(require("./SingleLinkedNode"));
/**
 * Linear data structure
 * Each node has next
 * Head's next node is tail
 */
var SingleLinkedList = /** @class */ (function (_super) {
    __extends(SingleLinkedList, _super);
    /**
     * @inheritDoc
     */
    function SingleLinkedList() {
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
    SingleLinkedList.prototype.insertNodeBetweenTwoNodes = function (nodeToPush, nodeLeft, nodeRight) {
        if (!this._head)
            this._head = nodeToPush;
        if (!this._tail)
            this._tail = nodeToPush;
        if (!nodeLeft)
            nodeLeft = this._tail;
        if (!nodeRight)
            nodeRight = this._head;
        nodeToPush.next = nodeRight;
        if (nodeLeft)
            nodeLeft.next = nodeToPush;
        this._length++;
    };
    /**
     * Will change its neighbors nodes links
     * @param node - node to delete
     * @throws when node does not exist
     * @returns node with empty links that contain only data
     */
    SingleLinkedList.prototype.deleteNode = function (node) {
        var _this = this;
        if (node === null) {
            throw new Error("Node should be existed");
        }
        var getPrevNode = function () {
            var currentNode = _this._tail;
            while ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.next) !== node) {
                currentNode = (currentNode === null || currentNode === void 0 ? void 0 : currentNode.next) || null;
            }
            return currentNode;
        };
        var getNextNode = function () {
            return node.next;
        };
        var prevNode = getPrevNode();
        var nextNode = getNextNode();
        if (prevNode) {
            prevNode.next = nextNode;
            this._length--;
            this._tail = prevNode;
        }
        return node;
    };
    /**
     * @inheritDoc
     */
    SingleLinkedList.prototype.getNodeByIndex = function (index) {
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
    SingleLinkedList.prototype.push = function (value) {
        var node = new SingleLinkedNode_1.default(value);
        this.insertNodeBetweenTwoNodes(node, this._head, this._tail);
        this._head = node;
    };
    /**
     * @inheritDoc
     */
    SingleLinkedList.prototype.pushFromIndex = function (value, fromIndex) {
        var node = new SingleLinkedNode_1.default(value);
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
    SingleLinkedList.prototype.unshift = function (value) {
        var node = new SingleLinkedNode_1.default(value);
        this.insertNodeBetweenTwoNodes(node, this._tail, this._head);
        this._tail = node;
    };
    /**
     * @inheritDoc
     */
    SingleLinkedList.prototype.pop = function () {
        var deletedNode = this.deleteNode(this._head);
        return deletedNode.data;
    };
    /**
     * @inheritDoc
     */
    SingleLinkedList.prototype.shift = function () {
        var deletedNode = this.deleteNode(this._tail);
        return deletedNode.data;
    };
    /**
     * @inheritDoc
     */
    SingleLinkedList.prototype.deleteFromIndex = function (fromIndex) {
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
    SingleLinkedList.prototype.reverse = function () {
        var currentNode = this._tail;
        var prevNode = this._head;
        var index = 0;
        while (index < this._length) {
            var next = (currentNode === null || currentNode === void 0 ? void 0 : currentNode.next) || null;
            if (currentNode) {
                currentNode.next = prevNode;
            }
            index++;
            prevNode = currentNode;
            currentNode = next;
        }
        if (currentNode) {
            this._head = currentNode;
            this._tail = currentNode.next;
        }
    };
    /**
     * List iterator
     * @param fromIndex - where iterator starts from list start
     * @returns iterator instance
     */
    SingleLinkedList.prototype.iterator = function (fromIndex) {
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
        };
    };
    return SingleLinkedList;
}(AbstractLinkedList_1.default));
exports.default = SingleLinkedList;
