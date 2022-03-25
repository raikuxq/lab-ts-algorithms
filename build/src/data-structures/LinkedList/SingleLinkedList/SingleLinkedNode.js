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
var SingleLinkedNode = /** @class */ (function (_super) {
    __extends(SingleLinkedNode, _super);
    /**
     * @inheritDoc
     */
    function SingleLinkedNode(data, next) {
        if (next === void 0) { next = null; }
        return _super.call(this, data, next) || this;
    }
    return SingleLinkedNode;
}(AbstractLinkedNode_1.default));
exports.default = SingleLinkedNode;
