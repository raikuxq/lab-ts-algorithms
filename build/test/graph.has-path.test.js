"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UndirectedGraph_1 = __importDefault(require("../src/data-structures/Graph/UndirectedGraph"));
var DirectedGraph_1 = __importDefault(require("../src/data-structures/Graph/DirectedGraph"));
var BFSIterationStrategy_1 = __importDefault(require("../src/data-structures/Graph/strategy/BFSIterationStrategy"));
var DFSIterationStrategy_1 = __importDefault(require("../src/data-structures/Graph/strategy/DFSIterationStrategy"));
var hasPath_1 = require("../src/data-structures/Graph/searching/hasPath");
var shortestPath_1 = require("../src/data-structures/Graph/searching/shortestPath");
var EnumGraphTraversalType_1 = require("../src/types/EnumGraphTraversalType");
describe("Any graph type", function () {
    var strategy = new BFSIterationStrategy_1.default();
    describe("in empty graph", function () {
        var graph = new UndirectedGraph_1.default();
        test("should throw when graph is empty", function () {
            expect(function () {
                shortestPath_1.shortestPath(graph, "-", "-", strategy);
            }).toThrowError();
        });
    });
    describe("in non empty graph", function () {
        var graph = new UndirectedGraph_1.default();
        graph.addVertex("Mike").addVertex("Bob").addEdge("Mike", "Bob");
        test("should throw when first node does not exist", function () {
            expect(function () {
                shortestPath_1.shortestPath(graph, "Mike", "NOT_EXISTED_NODE", strategy);
            }).toThrowError();
        });
        test("should throw when second node does not exist", function () {
            expect(function () {
                shortestPath_1.shortestPath(graph, "NOT_EXISTED_NODE", "Bob", strategy);
            }).toThrowError();
        });
    });
});
describe.each([EnumGraphTraversalType_1.EnumGraphTraversalType.BFS, EnumGraphTraversalType_1.EnumGraphTraversalType.DFS])("%s", function (strategyType) {
    var strategy;
    switch (strategyType) {
        case EnumGraphTraversalType_1.EnumGraphTraversalType.BFS:
            strategy = new BFSIterationStrategy_1.default();
            break;
        case EnumGraphTraversalType_1.EnumGraphTraversalType.DFS:
            strategy = new DFSIterationStrategy_1.default();
            break;
        default:
            throw new Error("Invalid search method");
    }
    describe("in undirected graph", function () {
        var graph = new UndirectedGraph_1.default();
        graph
            .addVertex("Mike")
            .addVertex("Bob")
            .addVertex("Lisa")
            .addVertex("Aaron")
            .addVertex("James")
            .addVertex("Anna")
            .addVertex("John")
            .addEdge("Mike", "Bob")
            .addEdge("Mike", "Lisa")
            .addEdge("Lisa", "James")
            .addEdge("Lisa", "Aaron")
            .addEdge("James", "Aaron")
            .addEdge("James", "Anna");
        test("should find element if it has an edge", function () {
            expect(hasPath_1.hasPath(graph, "Mike", "Anna", strategy)).toBe(true);
        });
        test("should not find element if it has not an edge", function () {
            expect(hasPath_1.hasPath(graph, "Mike", "John", strategy)).toBe(false);
        });
    });
    describe("in directed graph", function () {
        var graph = new DirectedGraph_1.default();
        graph
            .addVertex("Mike")
            .addVertex("Bob")
            .addVertex("Lisa")
            .addVertex("Aaron")
            .addVertex("James")
            .addVertex("Anna")
            .addVertex("John")
            .addEdge("Mike", "Bob")
            .addEdge("Mike", "Lisa")
            .addEdge("Lisa", "James")
            .addEdge("Lisa", "Aaron")
            .addEdge("James", "Aaron")
            .addEdge("James", "Anna");
        test("should find element if it has an edge", function () {
            expect(hasPath_1.hasPath(graph, "Mike", "Anna", strategy)).toBe(true);
        });
        test("should not find element if it has not an edge", function () {
            expect(hasPath_1.hasPath(graph, "Mike", "John", strategy)).toBe(false);
        });
        test("should not find element if and edge has wrong direction", function () {
            expect(hasPath_1.hasPath(graph, "Lisa", "Mike", strategy)).toBe(false);
        });
    });
});
