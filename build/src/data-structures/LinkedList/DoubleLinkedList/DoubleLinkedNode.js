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
var AbstractLinkedNode_1 = __importDefault(require("../AbstractLinkedNode"));
var DoubleLinkedNode = /** @class */ (function (_super) {
    __extends(DoubleLinkedNode, _super);
    /**
     * Will create empty node
     * @param data - element data
     * @param next - link to next node (null by default)
     * @param prev - link to previous node (null by default)
     */
    function DoubleLinkedNode(data, next, prev) {
        if (next === void 0) { next = null; }
        if (prev === void 0) { prev = null; }
        var _this = _super.call(this, data) || this;
        _this._prev = prev;
        _this._next = next;
        return _this;
    }
    Object.defineProperty(DoubleLinkedNode.prototype, "prev", {
        /**
         * @returns link to prev node element or null
         */
        get: function () {
            return this._prev;
        },
        /**
         * @param value - link to prev node element or null
         */
        set: function (value) {
            this._prev = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DoubleLinkedNode.prototype, "next", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._next;
        },
        /**
         * @inheritDoc
         */
        set: function (value) {
            this._next = value;
        },
        enumerable: false,
        configurable: true
    });
    return DoubleLinkedNode;
}(AbstractLinkedNode_1.default));
exports.default = DoubleLinkedNode;
