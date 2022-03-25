"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Graph edge between two vertices
 */
var GraphEdge = /** @class */ (function () {
    /**
     * Create instance with linked "from" and "to" vertices
     * @param fromVertex - start vertex
     * @param toVertex - end vertex
     * @param weight - edge weight is 0 by default
     */
    function GraphEdge(fromVertex, toVertex, weight) {
        if (weight === void 0) { weight = 0; }
        this._fromVertex = fromVertex;
        this._toVertex = toVertex;
        this._weight = weight;
    }
    Object.defineProperty(GraphEdge.prototype, "fromVertex", {
        /**
         * @returns vertex data
         */
        get: function () {
            return this._fromVertex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphEdge.prototype, "toVertex", {
        /**
         * @returns vertex data
         */
        get: function () {
            return this._toVertex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphEdge.prototype, "weight", {
        /**
         * @returns edge weight
         */
        get: function () {
            return this._weight;
        },
        /**
         * @param value - edge weight
         */
        set: function (value) {
            this._weight = value;
        },
        enumerable: false,
        configurable: true
    });
    return GraphEdge;
}());
exports.default = GraphEdge;
