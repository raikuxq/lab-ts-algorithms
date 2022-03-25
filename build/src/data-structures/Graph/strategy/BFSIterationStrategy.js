"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GraphIteratorBFS_1 = __importDefault(require("../iterator/GraphIteratorBFS"));
var BFSIterationStrategy = /** @class */ (function () {
    function BFSIterationStrategy() {
    }
    BFSIterationStrategy.prototype.createIterator = function (graph, startVertex) {
        return new GraphIteratorBFS_1.default(graph, startVertex);
    };
    return BFSIterationStrategy;
}());
exports.default = BFSIterationStrategy;
