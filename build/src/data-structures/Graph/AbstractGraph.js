"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractGraph = /** @class */ (function () {
    /**
     * Created empty instance
     * @protected
     */
    function AbstractGraph() {
        this._vertices = new Map();
        this._edges = new Array();
    }
    /**
     * Get vertices list in array format
     * @protected
     * @returns array of graph elements
     */
    AbstractGraph.prototype.getVerticesArrayFormat = function () {
        return Array.from(this._vertices.keys());
    };
    /**
     * Find vertex in vertices list by its value
     * @param value
     * @protected
     * @throws when vertex was not found
     * @returns vertex data
     */
    AbstractGraph.prototype.tryFindVertex = function (value) {
        var vertex = this.getVerticesArrayFormat().find(function (vertex) { return vertex === value; });
        if (!vertex)
            throw new Error("Vertex not found");
        return vertex;
    };
    /**
     * Update edge weight
     * @param from
     * @param to
     * @param weight
     * @protected
     */
    AbstractGraph.prototype.updateEdgeWeight = function (from, to, weight) {
        var edge = this.getEdgeByValue(from, to);
        edge.weight = weight;
    };
    /**
     * Will remove all vertex relations with others vertices
     * @param vertexToRemove
     */
    AbstractGraph.prototype.cascadeRemoveVertexRelations = function (vertexToRemove) {
        var _this = this;
        this.getVerticesArrayFormat().forEach(function (neighbor) {
            var neighborVertexNeighbors = _this._vertices.get(neighbor);
            if (neighborVertexNeighbors) {
                var neighborVertexFilteredNeighbors = neighborVertexNeighbors.filter(function (newNeighbor) { return newNeighbor !== vertexToRemove; });
                _this._vertices.set(neighbor, neighborVertexFilteredNeighbors);
            }
        });
    };
    /**
     * Will remove all vertices edges with vertex to remove
     * @param vertexToRemove
     */
    AbstractGraph.prototype.cascadeRemoveVertexEdges = function (vertexToRemove) {
        var _this = this;
        this._edges.forEach(function (edge, index) {
            if (edge.toVertex === vertexToRemove ||
                edge.fromVertex === vertexToRemove) {
                _this._edges.splice(index, 1);
            }
        });
    };
    /**
     * @returns graph weight
     */
    AbstractGraph.prototype.weight = function () {
        return this._edges.reduce(function (acc, edge) { return acc + edge.weight; }, 0);
    };
    /**
     * @returns array of vertices
     */
    AbstractGraph.prototype.vertices = function () {
        return this.getVerticesArrayFormat().map(function (vertex) { return vertex; });
    };
    /**
     * @returns vertices count
     */
    AbstractGraph.prototype.verticesCount = function () {
        return this.vertices().length;
    };
    /**
     * @returns edges count
     */
    AbstractGraph.prototype.edgesCount = function () {
        return this._edges.length;
    };
    /**
     * Add vertex
     * @param data
     * @throws when vertex is already exists
     * @returns graph instance
     */
    AbstractGraph.prototype.addVertex = function (data) {
        if (this.hasVertex(data)) {
            throw new Error("Vertex is already exist");
        }
        this._vertices.set(data, new Array());
        return this;
    };
    /**
     * Remove vertex
     * @param data
     * @throws when vertex is already does not exist
     * @returns graph instance
     */
    AbstractGraph.prototype.removeVertex = function (data) {
        try {
            var vertexToRemove = this.tryFindVertex(data);
            this.cascadeRemoveVertexRelations(vertexToRemove);
            this.cascadeRemoveVertexEdges(vertexToRemove);
            this._vertices.delete(vertexToRemove);
        }
        catch (e) {
            throw new Error("Vertex does not exist already");
        }
        return this;
    };
    /**
     * Get vertex neighbors by its value
     * @param value - vertex value
     * @returns array of neighbors elements
     */
    AbstractGraph.prototype.getVertexNeighbors = function (value) {
        var _a;
        try {
            var vertex = this.tryFindVertex(value);
            return ((_a = this._vertices.get(vertex)) === null || _a === void 0 ? void 0 : _a.map(function (vertex) { return vertex; })) || [];
        }
        catch (e) {
            throw new Error("No such vertex");
        }
    };
    /**
     * Graph has vertex by its value
     * @param value - vertex value
     * @returns boolean
     */
    AbstractGraph.prototype.hasVertex = function (value) {
        return this.vertices().includes(value);
    };
    /**
     * Graph has edge between two vertices
     * @param from
     * @param to
     * @returns boolean
     */
    AbstractGraph.prototype.hasEdge = function (from, to) {
        return Boolean(this._edges.find(function (edge) {
            return edge.fromVertex === from && edge.toVertex === to;
        }));
    };
    /**
     * Get edge weight between two vertices
     * @param from
     * @param to
     * @returns number
     */
    AbstractGraph.prototype.getEdgeWeightByVertices = function (from, to) {
        var fromVertex = this.tryFindVertex(from);
        var toVertex = this.tryFindVertex(to);
        var edge = this.getEdgeByValue(fromVertex, toVertex);
        return edge.weight;
    };
    return AbstractGraph;
}());
exports.default = AbstractGraph;
