"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractLinkedNode = /** @class */ (function () {
    /**
     * Will create empty node
     * @param data - element data
     * @param next - link to next node (null by default)
     * @protected
     */
    function AbstractLinkedNode(data, next) {
        if (next === void 0) { next = null; }
        this._data = data;
        this._next = next;
    }
    Object.defineProperty(AbstractLinkedNode.prototype, "data", {
        /**
         * @returns data of node element
         */
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractLinkedNode.prototype, "next", {
        /**
         * @returns link to next node element or null
         */
        get: function () {
            return this._next;
        },
        /**
         * @param value - link to next node element or null
         */
        set: function (value) {
            this._next = value;
        },
        enumerable: false,
        configurable: true
    });
    return AbstractLinkedNode;
}());
exports.default = AbstractLinkedNode;
