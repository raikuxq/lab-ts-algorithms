"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * It can represent graph in different ways
 * @example Adjacency matrix
 * @example Adjacency list
 */
var GraphPresenter = /** @class */ (function () {
    /**
     * Create empty instance of presenter
     * @param graph - graph instance
     */
    function GraphPresenter(graph) {
        this.graph = graph;
    }
    /**
     * Get graph adjacency list
     * @example
     *
     * Directed graph:
     * - Bob [Maria]
     * - Maria [Bob, John]
     * - John []
     **/
    GraphPresenter.prototype.getAdjacencyList = function () {
        var _this = this;
        return this.graph.vertices().reduce(function (map, vertex) {
            var neighbors = _this.graph.getVertexNeighbors(vertex);
            map.set(vertex, neighbors);
            return map;
        }, new Map());
    };
    /**
     * Get graph adjacency matrix N x N
     *
     * @example
     *
     * Directed graph:
     * - Bob [Maria]
     * - Maria [Bob, John]
     * - John []
     *
     * Its matrix:
     *       |  Bob  | Maria |  John |
     * Bob   |   0   |   1   |   0   |
     * Maria |   1   |   0   |   1   |
     * John  |   0   |   0   |   0   |
     */
    GraphPresenter.prototype.getAdjacencyMatrix = function () {
        var _this = this;
        var vertices = this.graph.vertices();
        var matrix = new Array(this.graph.verticesCount());
        vertices.forEach(function (graphVertexRow, rowIndex) {
            matrix[rowIndex] = new Array(_this.graph.verticesCount());
            vertices.forEach(function (graphVertexColumn, columnIndex) {
                var isElementLinked = _this.graph
                    .getVertexNeighbors(graphVertexRow)
                    .includes(graphVertexColumn);
                matrix[rowIndex][columnIndex] = isElementLinked ? 1 : 0;
            });
        });
        return matrix;
    };
    return GraphPresenter;
}());
exports.default = GraphPresenter;
