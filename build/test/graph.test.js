"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UndirectedGraph_1 = __importDefault(require("../src/data-structures/Graph/UndirectedGraph"));
var DirectedGraph_1 = __importDefault(require("../src/data-structures/Graph/DirectedGraph"));
var createGraph_1 = require("../src/data-structures/Graph/helpers/createGraph");
var EnumGraphType_1 = require("../src/types/EnumGraphType");
describe.each([EnumGraphType_1.EnumGraphType.Directed, EnumGraphType_1.EnumGraphType.Undirected])("%s graph", function (graphType) {
    describe("method weight", function () {
        var graph = createGraph_1.createGraph(graphType);
        graph
            .addVertex("Mike")
            .addVertex("Bob")
            .addVertex("Lisa")
            .addEdge("Mike", "Bob", 5)
            .addEdge("Bob", "Lisa", 10)
            .addEdge("Mike", "Lisa", 20);
        test("should return correct weight value", function () {
            var weight = graph.weight();
            var expectedWeight = 35;
            expect(weight).toBe(expectedWeight);
        });
    });
    describe("method verticesCount", function () {
        describe("in empty graph", function () {
            var graph = createGraph_1.createGraph(graphType);
            test("should return correct vertices count", function () {
                expect(graph.verticesCount()).toBe(0);
            });
        });
        describe("in non empty graph", function () {
            var graph = createGraph_1.createGraph(graphType);
            graph.addVertex("Mike").addVertex("Bob").addVertex("Lisa");
            test("should return correct vertices count", function () {
                expect(graph.verticesCount()).toBe(3);
            });
        });
    });
    describe("method edgesCount", function () {
        describe("in empty graph", function () {
            var graph = createGraph_1.createGraph(graphType);
            test("should return correct vertices count", function () {
                expect(graph.edgesCount()).toBe(0);
            });
        });
    });
    describe("method vertices", function () {
        describe("in empty graph", function () {
            var graph = createGraph_1.createGraph(graphType);
            test("should return empty array of vertices", function () {
                expect(graph.vertices()).toEqual([]);
            });
        });
        describe("in non empty graph", function () {
            var graph = createGraph_1.createGraph(graphType);
            graph.addVertex("Mike").addVertex("Bob").addVertex("Lisa");
            test("should return correct array of vertices", function () {
                expect(graph.vertices()).toEqual(["Mike", "Bob", "Lisa"]);
            });
        });
    });
    describe("method addVertex", function () {
        test("should correct add vertex", function () {
            var graph = createGraph_1.createGraph(graphType);
            graph.addVertex("Mike").addVertex("Bob").addVertex("Lisa");
            var vertices = graph.vertices();
            var expectedVertices = ["Mike", "Bob", "Lisa"];
            expect(vertices).toEqual(expectedVertices);
        });
        test("should throw when try to add an existed vertex", function () {
            var graph = createGraph_1.createGraph(graphType);
            graph.addVertex("Mike");
            expect(function () {
                graph.addVertex("Mike");
            }).toThrowError();
        });
    });
    describe("method addEdge", function () {
        describe("in any graph", function () {
            describe("should throw when try to add edge between not existed vertices", function () {
                var graph = createGraph_1.createGraph(graphType);
                graph.addVertex("Mike").addVertex("Bob");
                test("when first node does not exist", function () {
                    expect(function () {
                        graph.addEdge("NOT_EXISTED_NODE", "Bob");
                    }).toThrowError();
                });
                test("when second node does not exist", function () {
                    expect(function () {
                        graph.addEdge("Mike", "NOT_EXISTED_NODE");
                    }).toThrowError();
                });
            });
        });
    });
    describe("method removeVertex", function () {
        test("should throw when try to delete not existed vertex", function () {
            var graph = createGraph_1.createGraph(graphType);
            expect(function () {
                graph.removeVertex("NOT_EXISTED_VERTEX");
            }).toThrowError();
        });
    });
    describe("method removeEdge", function () {
        test("should throw when try to delete not existed edge", function () {
            var graph = createGraph_1.createGraph(graphType);
            expect(function () {
                graph.removeEdge("NOT_EXISTED_VERTEX", "NOT_EXISTED_VERTEX");
            }).toThrowError();
        });
    });
    describe("method getVertexNeighbors", function () {
        test("should throw when vertex does not exist", function () {
            var graph = createGraph_1.createGraph(graphType);
            graph.addVertex(1).addVertex(2).addEdge(1, 2);
            expect(function () {
                graph.getVertexNeighbors(0);
            }).toThrowError();
        });
    });
});
describe("Any type of graph", function () {
    describe("method edgesCount", function () {
        describe("in undirected graph", function () {
            var graph = new UndirectedGraph_1.default();
            graph
                .addVertex("Mike")
                .addVertex("Bob")
                .addVertex("Lisa")
                .addEdge("Mike", "Bob")
                .addEdge("Mike", "Lisa");
            test("should return correct vertices count", function () {
                expect(graph.edgesCount()).toBe(2);
            });
        });
        describe("in directed graph", function () {
            var graph = new DirectedGraph_1.default();
            graph
                .addVertex("Mike")
                .addVertex("Bob")
                .addVertex("Lisa")
                .addEdge("Mike", "Bob")
                .addEdge("Mike", "Lisa")
                .addEdge("Lisa", "Mike");
            test("should return correct vertices count", function () {
                expect(graph.edgesCount()).toBe(3);
            });
        });
    });
    describe("method addEdge", function () {
        describe("in undirected graph", function () {
            describe("should correct add edge between two existed vertices", function () {
                var graph = new UndirectedGraph_1.default();
                graph.addVertex("Mike").addVertex("Bob").addEdge("Mike", "Bob");
                test("should add second node to first node neighbors", function () {
                    expect(graph.getVertexNeighbors("Mike")).toContain("Bob");
                });
                test("should add first node to second node neighbors", function () {
                    expect(graph.getVertexNeighbors("Bob")).toContain("Mike");
                });
            });
            describe("should override an existed edge and its weight", function () {
                var graph = new UndirectedGraph_1.default();
                graph
                    .addVertex("Mike")
                    .addVertex("Bob")
                    .addEdge("Mike", "Bob", 5)
                    .addEdge("Mike", "Bob", 10);
                describe("should not multiple edges", function () {
                    test("should not add vertex to first edge", function () {
                        expect(graph.getVertexNeighbors("Mike")).toEqual(["Bob"]);
                    });
                    test("should not add vertex to second edge", function () {
                        expect(graph.getVertexNeighbors("Bob")).toEqual(["Mike"]);
                    });
                });
                test("should override edge weight", function () {
                    expect(graph.getEdgeWeightByVertices("Mike", "Bob")).toBe(10);
                });
            });
        });
        describe("in directed graph", function () {
            describe("should correct add edge between two existed vertices", function () {
                var graph = new DirectedGraph_1.default();
                graph.addVertex("Mike").addVertex("Bob").addEdge("Mike", "Bob");
                test("should add second node to first node neighbors", function () {
                    expect(graph.getVertexNeighbors("Mike")).toContain("Bob");
                });
                test("should not add first node to second node neighbors", function () {
                    expect(graph.getVertexNeighbors("Bob")).not.toContain("Mike");
                });
            });
            describe("should override an existed edge and its weight", function () {
                var graph = new DirectedGraph_1.default();
                graph
                    .addVertex("Mike")
                    .addVertex("Bob")
                    .addEdge("Mike", "Bob", 5)
                    .addEdge("Bob", "Mike", 15)
                    .addEdge("Mike", "Bob", 10);
                describe("should not multiple edges", function () {
                    test("should not add vertex to first edge", function () {
                        expect(graph.getVertexNeighbors("Mike")).toEqual(["Bob"]);
                    });
                    test("should not add vertex to second edge", function () {
                        expect(graph.getVertexNeighbors("Bob")).toEqual(["Mike"]);
                    });
                });
                test("should override edge weight", function () {
                    expect(graph.getEdgeWeightByVertices("Mike", "Bob")).toBe(10);
                });
                test("should not override back edge weight", function () {
                    expect(graph.getEdgeWeightByVertices("Bob", "Mike")).toBe(15);
                });
            });
        });
    });
    describe("method removeEdge", function () {
        describe("in undirected graph", function () {
            var graph = new UndirectedGraph_1.default();
            graph
                .addVertex("Mike")
                .addVertex("Bob")
                .addVertex("Lisa")
                .addEdge("Mike", "Bob")
                .addEdge("Bob", "Lisa")
                .addEdge("Mike", "Lisa");
            graph.removeEdge("Mike", "Lisa");
            test("should delete correct", function () {
                expect(graph.hasEdge("Mike", "Lisa")).toBe(false);
            });
        });
        describe("in directed graph", function () {
            var graph = new DirectedGraph_1.default();
            graph
                .addVertex("Mike")
                .addVertex("Bob")
                .addVertex("Lisa")
                .addEdge("Mike", "Bob")
                .addEdge("Bob", "Lisa")
                .addEdge("Mike", "Lisa")
                .addEdge("Lisa", "Mike");
            graph.removeEdge("Mike", "Lisa");
            describe("should delete correct", function () {
                test("should delete edge from-to", function () {
                    expect(graph.hasEdge("Mike", "Lisa")).toBe(false);
                });
                test("should not delete edge to-from", function () {
                    expect(graph.hasEdge("Lisa", "Mike")).toBe(true);
                });
            });
        });
    });
    describe("method getVertexNeighbors", function () {
        describe("in undirected graph", function () {
            test("should return correct neighbors", function () {
                var graph = new UndirectedGraph_1.default();
                graph
                    .addVertex(1)
                    .addVertex(2)
                    .addVertex(3)
                    .addEdge(1, 2)
                    .addEdge(2, 3);
                expect(graph.getVertexNeighbors(2)).toEqual([1, 3]);
            });
        });
        describe("in directed graph", function () {
            test("should return correct neighbors", function () {
                var graph = new DirectedGraph_1.default();
                graph
                    .addVertex(1)
                    .addVertex(2)
                    .addVertex(3)
                    .addEdge(1, 2)
                    .addEdge(2, 3);
                expect(graph.getVertexNeighbors(2)).toEqual([3]);
            });
        });
    });
    describe("method removeVertex", function () {
        describe("in undirected graph", function () {
            describe("should cascade remove", function () {
                var graph = new UndirectedGraph_1.default();
                graph
                    .addVertex("Mike")
                    .addVertex("Bob")
                    .addVertex("John")
                    .addVertex("Lisa")
                    .addEdge("Mike", "Bob")
                    .addEdge("Mike", "Lisa")
                    .addEdge("John", "Lisa")
                    .addEdge("Bob", "John");
                graph.removeVertex("Bob");
                test("should remove edges", function () {
                    var hasEdge = graph.hasEdge("Mike", "Bob");
                    expect(hasEdge).toBe(false);
                });
                test("should remove related vertexes neighbors", function () {
                    var mikeNeighbors = graph.getVertexNeighbors("Mike");
                    var lisaNeighbors = graph.getVertexNeighbors("Lisa");
                    var johnNeighbors = graph.getVertexNeighbors("John");
                    expect(mikeNeighbors).toEqual(["Lisa"]);
                    expect(lisaNeighbors).toEqual(["Mike", "John"]);
                    expect(johnNeighbors).toEqual(["Lisa"]);
                });
            });
        });
        describe("in directed graph", function () {
            describe("should cascade remove", function () {
                var graph = new DirectedGraph_1.default();
                graph
                    .addVertex("Mike")
                    .addVertex("Bob")
                    .addVertex("John")
                    .addVertex("Lisa")
                    .addEdge("Mike", "Bob")
                    .addEdge("Mike", "Lisa")
                    .addEdge("John", "Lisa")
                    .addEdge("Bob", "John");
                graph.removeVertex("Bob");
                test("should remove edges", function () {
                    var hasEdge = graph.hasEdge("Mike", "Bob");
                    expect(hasEdge).toBe(false);
                });
                test("should remove related vertices neighbors", function () {
                    var mikeNeighbors = graph.getVertexNeighbors("Mike");
                    var lisaNeighbors = graph.getVertexNeighbors("Lisa");
                    var johnNeighbors = graph.getVertexNeighbors("John");
                    expect(mikeNeighbors).toEqual(["Lisa"]);
                    expect(lisaNeighbors).toEqual([]);
                    expect(johnNeighbors).toEqual(["Lisa"]);
                });
            });
        });
    });
});
