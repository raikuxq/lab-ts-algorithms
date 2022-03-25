"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GraphIteratorDijkstra_1 = __importDefault(require("../iterator/GraphIteratorDijkstra"));
var DijkstraIterationStrategy = /** @class */ (function () {
    function DijkstraIterationStrategy() {
    }
    DijkstraIterationStrategy.prototype.createIterator = function (graph, startVertex) {
        return new GraphIteratorDijkstra_1.default(graph, startVertex);
    };
    return DijkstraIterationStrategy;
}());
exports.default = DijkstraIterationStrategy;
