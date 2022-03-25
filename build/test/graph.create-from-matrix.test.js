"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnumGraphType_1 = require("../src/types/EnumGraphType");
var createGraphFromMatrix_1 = require("../src/data-structures/Graph/helpers/createGraphFromMatrix");
describe("in Directed graph", function () {
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
    describe("created graph", function () {
        var fieldsList = ["Bob", "Maria", "John"];
        var matrix = [
            [0, 1, 0],
            [1, 0, 1],
            [0, 0, 0],
        ];
        var graph = createGraphFromMatrix_1.createGraphFromMatrix(matrix, fieldsList, EnumGraphType_1.EnumGraphType.Directed);
        test("should contain all vertices", function () {
            expect(graph.vertices()).toEqual(fieldsList);
        });
        test("should contain all edges", function () {
            expect(graph.hasEdge("Bob", "Bob")).toBe(false);
            expect(graph.hasEdge("Bob", "Maria")).toBe(true);
            expect(graph.hasEdge("Bob", "John")).toBe(false);
            expect(graph.hasEdge("Maria", "Maria")).toBe(false);
            expect(graph.hasEdge("Maria", "Bob")).toBe(true);
            expect(graph.hasEdge("Maria", "John")).toBe(true);
            expect(graph.hasEdge("John", "John")).toBe(false);
            expect(graph.hasEdge("John", "Bob")).toBe(false);
            expect(graph.hasEdge("John", "Maria")).toBe(false);
        });
    });
});
describe("in Undirected graph", function () {
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
     * John  |   0   |   1   |   0   |
     */
    describe("created graph", function () {
        var fieldsList = ["Bob", "Maria", "John"];
        var matrix = [
            [0, 1, 0],
            [1, 0, 1],
            [0, 1, 0],
        ];
        var graph = createGraphFromMatrix_1.createGraphFromMatrix(matrix, fieldsList, EnumGraphType_1.EnumGraphType.Undirected);
        test("should contain all vertices", function () {
            expect(graph.vertices()).toEqual(fieldsList);
        });
        test("should contain all edges", function () {
            expect(graph.hasEdge("Bob", "Bob")).toBe(false);
            expect(graph.hasEdge("Bob", "Maria")).toBe(true);
            expect(graph.hasEdge("Bob", "John")).toBe(false);
            expect(graph.hasEdge("Maria", "Maria")).toBe(false);
            expect(graph.hasEdge("Maria", "Bob")).toBe(true);
            expect(graph.hasEdge("Maria", "John")).toBe(true);
            expect(graph.hasEdge("John", "John")).toBe(false);
            expect(graph.hasEdge("John", "Bob")).toBe(false);
            expect(graph.hasEdge("John", "Maria")).toBe(true);
        });
    });
});
