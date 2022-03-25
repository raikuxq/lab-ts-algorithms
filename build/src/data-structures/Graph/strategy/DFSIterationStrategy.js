"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GraphIteratorDFS_1 = __importDefault(require("../iterator/GraphIteratorDFS"));
var DFSIterationStrategy = /** @class */ (function () {
    function DFSIterationStrategy() {
    }
    DFSIterationStrategy.prototype.createIterator = function (graph, startVertex) {
        return new GraphIteratorDFS_1.default(graph, startVertex);
    };
    return DFSIterationStrategy;
}());
exports.default = DFSIterationStrategy;
