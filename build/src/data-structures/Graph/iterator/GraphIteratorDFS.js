"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = __importDefault(require("../../Stack/Stack"));
/**
 * Deep first graph traversal
 */
var GraphIteratorDFS = /** @class */ (function () {
    /**
     * Creates empty instance and does one iteration
     * @param graph - graph instance
     * @param startVertex - vertex where traversal starts
     * @throws when startVertex does not exist
     */
    function GraphIteratorDFS(graph, startVertex) {
        if (!graph.hasVertex(startVertex)) {
            throw new Error("Start vertex does not exist");
        }
        this.graph = graph;
        this.stack = new Stack_1.default(Infinity);
        this.visited = new Map();
        this.parents = new Map();
        this.stack.push(startVertex);
        this.visited.set(startVertex, true);
    }
    /**
     * @inheritDoc
     */
    GraphIteratorDFS.prototype.hasNext = function () {
        return !this.stack.isEmpty();
    };
    /**
     * @inheritDoc
     */
    GraphIteratorDFS.prototype.current = function () {
        var current = this.stack.peek();
        if (!current) {
            throw new Error("Current element does not exist");
        }
        return current;
    };
    /**
     * @inheritDoc
     */
    GraphIteratorDFS.prototype.next = function () {
        var _this = this;
        var next = this.stack.pop();
        if (!next) {
            throw new Error("Next element does not exist");
        }
        var nextNeighbors = this.graph.getVertexNeighbors(next);
        nextNeighbors.forEach(function (neighbor) {
            var isNotVisited = !_this.visited.get(neighbor);
            if (isNotVisited) {
                _this.stack.push(neighbor);
                _this.visited.set(neighbor, true);
                _this.parents.set(neighbor, next);
            }
        });
        return next;
    };
    /**
     * @inheritDoc
     */
    GraphIteratorDFS.prototype.getPath = function (from, to) {
        var path = new Array();
        var currentVertex = this.parents.get(to);
        while (currentVertex) {
            if (currentVertex === from) {
                break;
            }
            path.push(currentVertex);
            currentVertex = this.parents.get(currentVertex);
        }
        return __spreadArrays([from], path.reverse(), [to]);
    };
    return GraphIteratorDFS;
}());
exports.default = GraphIteratorDFS;
