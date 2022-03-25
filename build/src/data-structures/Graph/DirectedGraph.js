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
 * Directed graph - data structure where edges with same pair of vertices are not equal
 * @example A-B is not the same as B-A
 */
var DirectedGraph = /** @class */ (function (_super) {
    __extends(DirectedGraph, _super);
    /**
     * @inheritDoc
     */
    function DirectedGraph() {
        return _super.call(this) || this;
    }
    /**
     * @inheritDoc
     */
    DirectedGraph.prototype.getEdgeByValue = function (from, to) {
        var edge = this._edges.find(function (edge) { return edge.fromVertex === from && edge.toVertex === to; });
        if (!edge) {
            throw new Error("Edge not found");
        }
        return edge;
    };
    /**
     * @inheritDoc
     */
    DirectedGraph.prototype.addEdge = function (from, to, weight) {
        var _a;
        try {
            var fromVertex = this.tryFindVertex(from);
            var toVertex = this.tryFindVertex(to);
            if (this.hasEdge(fromVertex, toVertex)) {
                if (typeof weight === "number") {
                    this.updateEdgeWeight(fromVertex, toVertex, weight);
                }
            }
            else {
                var edge = new GraphEdge_1.default(fromVertex, toVertex, weight);
                this._edges.push(edge);
                (_a = this._vertices.get(fromVertex)) === null || _a === void 0 ? void 0 : _a.push(toVertex);
            }
        }
        catch (_b) {
            throw new Error("Edge cannot be added because one of vertices was not found");
        }
        return this;
    };
    /**
     * @inheritDoc
     */
    DirectedGraph.prototype.removeEdge = function (from, to) {
        try {
            var fromVertex = this.tryFindVertex(from);
            var toVertex_1 = this.tryFindVertex(to);
            var edgeToRemove_1 = this.getEdgeByValue(fromVertex, toVertex_1);
            var fromVertexNeighbors = this._vertices.get(fromVertex) || [];
            var fromNewNeighbors = fromVertexNeighbors.filter(function (vertex) { return toVertex_1 !== vertex; });
            this._vertices.set(fromVertex, fromNewNeighbors);
            this._edges = this._edges.filter(function (edge) { return edge !== edgeToRemove_1; });
        }
        catch (_a) {
            throw new Error("Edge cannot be removed because one of vertices was not found");
        }
        return this;
    };
    return DirectedGraph;
}(AbstractGraph_1.default));
exports.default = DirectedGraph;
