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
var AbstractGraph_1 = __importDefault(require("./AbstractGraph"));
var GraphEdge_1 = __importDefault(require("./GraphEdge"));
/**
 * Undirected graph - data structure where edges with same pair of vertices are equal
 * @example A-B is same as B-A
 */
var UndirectedGraph = /** @class */ (function (_super) {
    __extends(UndirectedGraph, _super);
    /**
     * @inheritDoc
     */
    function UndirectedGraph() {
        return _super.call(this) || this;
    }
    /**
     * @inheritDoc
     */
    UndirectedGraph.prototype.getEdgeByValue = function (from, to) {
        var edge = this._edges.find(function (edge) {
            return (edge.fromVertex === from && edge.toVertex === to) ||
                (edge.fromVertex === to && edge.toVertex === from);
        });
        if (!edge) {
            throw new Error("Edge not found");
        }
        return edge;
    };
    /**
     * @inheritDoc
     */
    UndirectedGraph.prototype.addEdge = function (from, to, weight) {
        var _a, _b;
        try {
            var fromVertex = this.tryFindVertex(from);
            var toVertex = this.tryFindVertex(to);
            /** When edge is already exist, we should only update its weight */
            if (this.hasEdge(fromVertex, toVertex)) {
                if (typeof weight === "number") {
                    this.updateEdgeWeight(fromVertex, toVertex, weight);
                }
            }
            else {
                var edge = new GraphEdge_1.default(fromVertex, toVertex, weight);
                this._edges.push(edge);
                (_a = this._vertices.get(fromVertex)) === null || _a === void 0 ? void 0 : _a.push(toVertex);
                (_b = this._vertices.get(toVertex)) === null || _b === void 0 ? void 0 : _b.push(fromVertex);
            }
        }
        catch (_c) {
            throw new Error("Edge cannot be added because one of vertices was not found");
        }
        return this;
    };
    /**
     * @inheritDoc
     */
    UndirectedGraph.prototype.removeEdge = function (from, to) {
        try {
            var fromVertex_1 = this.tryFindVertex(from);
            var toVertex_1 = this.tryFindVertex(to);
            var edgeToRemove_1 = this.getEdgeByValue(fromVertex_1, toVertex_1);
            var fromVertexNeighbors = this._vertices.get(fromVertex_1) || [];
            var toVertexNeighbors = this._vertices.get(toVertex_1) || [];
            var fromNewNeighbors = fromVertexNeighbors.filter(function (vertex) { return toVertex_1 !== vertex; });
            var toNewNeighbors = toVertexNeighbors.filter(function (vertex) { return fromVertex_1 !== vertex; });
            this._vertices.set(fromVertex_1, fromNewNeighbors);
            this._vertices.set(toVertex_1, toNewNeighbors);
            this._edges = this._edges.filter(function (edge) { return edge !== edgeToRemove_1; });
        }
        catch (_a) {
            throw new Error("Edge cannot be removed because one of vertices was not found");
        }
        return this;
    };
    return UndirectedGraph;
}(AbstractGraph_1.default));
exports.default = UndirectedGraph;
