"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortestPath = void 0;
/**
 * Find the shortest path between two vertices
 *
 * @param graph - graph instance
 * @param from - start vertex
 * @param to - finish vertex
 * @param strategy - traversal method
 * @throws when one of vertices was not found
 * @returns Array - the shortest path
 */
exports.shortestPath = function (graph, from, to, strategy) {
    var iterator = strategy.createIterator(graph, from);
    /* Validate */
    if (!graph.hasVertex(from) || !graph.hasVertex(to)) {
        throw new Error("Invalid arguments: no such elements");
    }
    /* Find target element */
    while (iterator.hasNext()) {
        var next = iterator.next();
        if (next === to) {
            break;
        }
    }
    return iterator.getPath(from, to);
};
