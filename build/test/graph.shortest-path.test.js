"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UndirectedGraph_1 = __importDefault(require("../src/data-structures/Graph/UndirectedGraph"));
var DirectedGraph_1 = __importDefault(require("../src/data-structures/Graph/DirectedGraph"));
var BFSIterationStrategy_1 = __importDefault(require("../src/data-structures/Graph/strategy/BFSIterationStrategy"));
var DFSIterationStrategy_1 = __importDefault(require("../src/data-structures/Graph/strategy/DFSIterationStrategy"));
var DijkstraIterationStrategy_1 = __importDefault(require("../src/data-structures/Graph/strategy/DijkstraIterationStrategy"));
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
        test("should find correct path between neighbor nodes", function () {
            expect(shortestPath_1.shortestPath(graph, "Mike", "Bob", strategy)).toEqual([
                "Mike",
                "Bob",
            ]);
        });
    });
});
describe.each([EnumGraphTraversalType_1.EnumGraphTraversalType.DIJKSTRA])("Weighted graph by %s", function (strategyType) {
    var strategy;
    switch (strategyType) {
        case EnumGraphTraversalType_1.EnumGraphTraversalType.DIJKSTRA: {
            strategy = new DijkstraIterationStrategy_1.default();
            break;
        }
        default: {
            throw new Error("Invalid search method");
        }
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
            .addEdge("Mike", "Bob", 5)
            .addEdge("Mike", "Lisa", 3)
            .addEdge("Lisa", "Aaron", 3)
            .addEdge("Lisa", "James", 3)
            .addEdge("James", "Aaron", 3)
            .addEdge("James", "Anna", 6)
            .addEdge("Bob", "Anna", 15);
        test("should find correct path between multiple nodes", function () {
            /**
             * Bob -> Mike (5) -> Anna (15) = 20
             * Mike -> Lisa (3) -> James (3) -> Anna (6) = 12
             */
            expect(shortestPath_1.shortestPath(graph, "Mike", "Anna", strategy)).toEqual([
                "Mike",
                "Lisa",
                "James",
                "Anna",
            ]);
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
            .addEdge("Mike", "Bob", 5)
            .addEdge("Mike", "Lisa", 3)
            .addEdge("Lisa", "Aaron", 3)
            .addEdge("Aaron", "James", 3)
            .addEdge("James", "Lisa", 10)
            .addEdge("James", "Aaron", 10)
            .addEdge("James", "Anna", 6)
            .addEdge("Bob", "Anna", 15);
        test("should find correct path between multiple nodes", function () {
            /**
             * Bob -> Mike (5) -> Anna (15) = 20
             * Mike -> Lisa (3) -> Aaron (3) -> James (3) -> Anna (6) = 15
             */
            expect(shortestPath_1.shortestPath(graph, "Mike", "Anna", strategy)).toEqual([
                "Mike",
                "Lisa",
                "Aaron",
                "James",
                "Anna",
            ]);
        });
    });
});
describe.each([EnumGraphTraversalType_1.EnumGraphTraversalType.BFS, EnumGraphTraversalType_1.EnumGraphTraversalType.DFS])("Unweighted graph by %s", function (strategyType) {
    var strategy;
    switch (strategyType) {
        case EnumGraphTraversalType_1.EnumGraphTraversalType.BFS: {
            strategy = new BFSIterationStrategy_1.default();
            break;
        }
        case EnumGraphTraversalType_1.EnumGraphTraversalType.DFS: {
            strategy = new DFSIterationStrategy_1.default();
            break;
        }
        default: {
            throw new Error("Invalid search method");
        }
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
            .addEdge("Mike", "Bob")
            .addEdge("Mike", "Lisa")
            .addEdge("Lisa", "James")
            .addEdge("Lisa", "Aaron")
            .addEdge("James", "Aaron")
            .addEdge("James", "Anna");
        test("should find correct path between multiple nodes", function () {
            expect(shortestPath_1.shortestPath(graph, "Mike", "Anna", strategy)).toEqual([
                "Mike",
                "Lisa",
                "James",
                "Anna",
            ]);
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
            .addEdge("Mike", "Bob")
            .addEdge("Mike", "Lisa")
            .addEdge("Lisa", "James")
            .addEdge("James", "Aaron")
            .addEdge("Aaron", "Anna")
            .addEdge("Lisa", "Anna");
        test("should find correct path between multiple nodes", function () {
            expect(shortestPath_1.shortestPath(graph, "Mike", "Anna", strategy)).toEqual([
                "Mike",
                "Lisa",
                "Anna",
            ]);
        });
    });
});
