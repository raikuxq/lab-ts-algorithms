"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UndirectedGraph_1 = __importDefault(require("../src/data-structures/Graph/UndirectedGraph"));
var DirectedGraph_1 = __importDefault(require("../src/data-structures/Graph/DirectedGraph"));
var GraphPresenter_1 = __importDefault(require("../src/data-structures/Graph/presenter/GraphPresenter"));
var createGraph_1 = require("../src/data-structures/Graph/helpers/createGraph");
var EnumGraphType_1 = require("../src/types/EnumGraphType");
describe.each([EnumGraphType_1.EnumGraphType.Directed, EnumGraphType_1.EnumGraphType.Undirected])("%s graph", function (graphType) {
    describe("method getAdjacencyMatrix", function () {
        describe("in empty graph", function () {
            var graph = createGraph_1.createGraph(graphType);
            var graphPresenter = new GraphPresenter_1.default(graph);
            test("should return empty list", function () {
                var matrix = graphPresenter.getAdjacencyMatrix();
                expect(matrix).toEqual([]);
            });
        });
    });
    describe("method getAdjacencyList", function () {
        describe("in empty graph", function () {
            var graph = createGraph_1.createGraph(graphType);
            var graphPresenter = new GraphPresenter_1.default(graph);
            test("should return empty list", function () {
                var map = graphPresenter.getAdjacencyList();
                var emptyMap = new Map();
                expect(map).toEqual(emptyMap);
            });
        });
    });
});
describe("Any type of graph", function () {
    describe("method getAdjacencyMatrix", function () {
        describe("in undirected graph", function () {
            var graph = new UndirectedGraph_1.default();
            var graphPresenter = new GraphPresenter_1.default(graph);
            graph
                .addVertex(1)
                .addVertex(2)
                .addVertex(3)
                .addVertex(4)
                .addEdge(1, 2)
                .addEdge(1, 3)
                .addEdge(3, 4);
            test("should return correct matrix", function () {
                var matrix = graphPresenter.getAdjacencyMatrix();
                expect(matrix).toEqual([
                    [0, 1, 1, 0],
                    [1, 0, 0, 0],
                    [1, 0, 0, 1],
                    [0, 0, 1, 0],
                ]);
            });
        });
        describe("in directed graph", function () {
            var graph = new DirectedGraph_1.default();
            var graphPresenter = new GraphPresenter_1.default(graph);
            graph
                .addVertex(1)
                .addVertex(2)
                .addVertex(3)
                .addVertex(4)
                .addEdge(1, 2)
                .addEdge(1, 3)
                .addEdge(3, 4);
            test("should return correct matrix", function () {
                var matrix = graphPresenter.getAdjacencyMatrix();
                expect(matrix).toEqual([
                    [0, 1, 1, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 1],
                    [0, 0, 0, 0],
                ]);
            });
        });
    });
    describe("method getAdjacencyList", function () {
        describe("in undirected graph", function () {
            var graph = new UndirectedGraph_1.default();
            var graphPresenter = new GraphPresenter_1.default(graph);
            graph
                .addVertex(1)
                .addVertex(2)
                .addVertex(3)
                .addVertex(4)
                .addEdge(1, 2)
                .addEdge(1, 3)
                .addEdge(3, 4);
            test("should return correct list", function () {
                var list = graphPresenter.getAdjacencyList();
                var expectedList = new Map();
                // eslint-disable-next-line
                expectedList
                    .set(1, [2, 3])
                    .set(2, [1])
                    .set(3, [1, 4])
                    .set(4, [3]);
                expect(list).toEqual(expectedList);
            });
        });
        describe("in directed graph", function () {
            var graph = new DirectedGraph_1.default();
            var graphPresenter = new GraphPresenter_1.default(graph);
            graph
                .addVertex(1)
                .addVertex(2)
                .addVertex(3)
                .addVertex(4)
                .addEdge(1, 2)
                .addEdge(1, 3)
                .addEdge(3, 4);
            test("should return correct list", function () {
                var list = graphPresenter.getAdjacencyList();
                var expectedList = new Map();
                // eslint-disable-next-line
                expectedList
                    .set(1, [2, 3])
                    .set(2, [])
                    .set(3, [4])
                    .set(4, []);
                expect(list).toEqual(expectedList);
            });
        });
    });
});
