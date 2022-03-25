"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Dijkstra method graph traversal
 */
var GraphIteratorDijkstra = /** @class */ (function () {
    /**
     * Creates empty instance and does one iteration
     * @param graph - graph instance
     * @param startVertex - vertex where traversal starts
     * @throws when startVertex does not exist
     */
    function GraphIteratorDijkstra(graph, startVertex) {
        if (!graph.hasVertex(startVertex)) {
            throw new Error("Start vertex does not exist");
        }
        this.graph = graph;
        this.visited = new Map();
        this.costs = new Map();
        this.parents = new Map();
        this.initIterator(startVertex);
    }
    /**
     * Push first node and its neighbors to the costs and parents tables
     * @param startVertex
     * @private
     */
    GraphIteratorDijkstra.prototype.initIterator = function (startVertex) {
        var _this = this;
        this.visited.set(startVertex, true);
        this.costs.set(startVertex, 0);
        this.graph.getVertexNeighbors(startVertex).forEach(function (neighbor) {
            var edgeWeight = _this.graph.getEdgeWeightByVertices(startVertex, neighbor);
            _this.costs.set(neighbor, edgeWeight);
            _this.parents.set(neighbor, startVertex);
        });
    };
    /**
     * Get closest (by cost) and not visited node
     * @private
     */
    GraphIteratorDijkstra.prototype.getClosestNotVisited = function () {
        var _this = this;
        var keys = Array.from(this.costs.keys());
        var priorityList = keys
            .filter(function (key) { return !_this.visited.get(key); })
            .sort(function (aKey, bKey) {
            var aCost = _this.costs.get(aKey) || 0;
            var bCost = _this.costs.get(bKey) || 0;
            return aCost - bCost;
        });
        return priorityList[0] || null;
    };
    /**
     * @inheritDoc
     */
    GraphIteratorDijkstra.prototype.hasNext = function () {
        return Boolean(this.getClosestNotVisited());
    };
    /**
     * @inheritDoc
     */
    GraphIteratorDijkstra.prototype.current = function () {
        var current = this.getClosestNotVisited();
        if (!current) {
            throw new Error("Current element does not exist");
        }
        return current;
    };
    /**
     * @inheritDoc
     */
    GraphIteratorDijkstra.prototype.next = function () {
        var _this = this;
        var next = this.getClosestNotVisited();
        if (!next) {
            throw new Error("Next element does not exist");
        }
        this.visited.set(next, true);
        var nextNeighbors = this.graph.getVertexNeighbors(next);
        var nextCost = this.costs.get(next);
        nextNeighbors.forEach(function (neighbor) {
            var edgeWeight = _this.graph.getEdgeWeightByVertices(next, neighbor);
            var currentNeighborCost = _this.costs.get(neighbor) || Infinity;
            var newNeighborCost = (nextCost || 0) + edgeWeight;
            if (newNeighborCost < currentNeighborCost) {
                _this.costs.set(neighbor, newNeighborCost);
                _this.parents.set(neighbor, next);
            }
        });
        return next;
    };
    /**
     * @inheritDoc
     */
    GraphIteratorDijkstra.prototype.getPath = function (from, to) {
        var path = [];
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
    return GraphIteratorDijkstra;
}());
exports.default = GraphIteratorDijkstra;
