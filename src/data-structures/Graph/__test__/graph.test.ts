import IGraph from "../interface/IGraph";
import Graph from "../Graph";

describe("graph", () => {
  describe("getter weight", () => {
    const graph: IGraph<string> = new Graph();

    graph
      .addVertex("Mike")
      .addVertex("Bob")
      .addVertex("Lisa")
      .addEdge("Mike", "Bob", 5)
      .addEdge("Bob", "Lisa", 10)
      .addEdge("Mike", "Lisa", 20);

    test("should return correct weight value", () => {
      const weight = graph.weight;
      const expectedWeight = 35;

      expect(weight).toBe(expectedWeight);
    });
  });

  describe("getter verticesCount", () => {
    describe("in empty graph", () => {
      const graph: IGraph<string> = new Graph();

      test("should return correct vertices count", () => {
        expect(graph.verticesCount).toBe(0);
      });
    });
    describe("in non empty graph", () => {
      const graph: IGraph<string> = new Graph();
      graph.addVertex("Mike").addVertex("Bob").addVertex("Lisa");

      test("should return correct vertices count", () => {
        expect(graph.verticesCount).toBe(3);
      });
    });
  });

  describe("getter edgesCount", () => {
    describe("in empty graph", () => {
      const graph: IGraph<string> = new Graph();

      test("should return correct vertices count", () => {
        expect(graph.edgesCount).toBe(0);
      });
    });
    describe("in undirected graph", () => {
      const graph: IGraph<string> = new Graph();
      graph
        .addVertex("Mike")
        .addVertex("Bob")
        .addVertex("Lisa")
        .addEdge("Mike", "Bob")
        .addEdge("Mike", "Lisa");

      test("should return correct vertices count", () => {
        expect(graph.edgesCount).toBe(2);
      });
    });
    describe("in directed graph", () => {
      const graph: IGraph<string> = new Graph(true);
      graph
        .addVertex("Mike")
        .addVertex("Bob")
        .addVertex("Lisa")
        .addEdge("Mike", "Bob")
        .addEdge("Mike", "Lisa")
        .addEdge("Lisa", "Mike");

      test("should return correct vertices count", () => {
        expect(graph.edgesCount).toBe(3);
      });
    });
  });

  describe("getter edgesCount", () => {
    describe("in empty graph", () => {
      const graph: IGraph<string> = new Graph();

      test("should return empty array of vertices", () => {
        expect(graph.vertices).toEqual([]);
      });
    });
    describe("in non empty graph", () => {
      const graph: IGraph<string> = new Graph(true);
      graph.addVertex("Mike").addVertex("Bob").addVertex("Lisa");

      test("should return correct array of vertices", () => {
        expect(graph.vertices).toEqual(["Mike", "Bob", "Lisa"]);
      });
    });
  });

  describe("method addVertex", () => {
    test("should correct add vertex", () => {
      const graph: IGraph<string> = new Graph();
      graph.addVertex("Mike").addVertex("Bob").addVertex("Lisa");

      const vertices = graph.vertices;
      const expectedVertices = ["Mike", "Bob", "Lisa"];

      expect(vertices).toEqual(expectedVertices);
    });
    test("should throw when try to add an existed vertex", () => {
      const graph: IGraph<string> = new Graph();
      graph.addVertex("Mike");

      expect(() => {
        graph.addVertex("Mike");
      }).toThrowError();
    });
  });

  describe("method addEdge", () => {
    describe("in any graph", () => {
      describe("should throw when try to add edge between not existed vertices", () => {
        const graph: IGraph<string> = new Graph();
        graph.addVertex("Mike").addVertex("Bob");

        test("when first node does not exist", () => {
          expect(() => {
            graph.addEdge("NOT_EXISTED_NODE", "Bob");
          }).toThrowError();
        });
        test("when second node does not exist", () => {
          expect(() => {
            graph.addEdge("Mike", "NOT_EXISTED_NODE");
          }).toThrowError();
        });
      });
      describe("should override an existed edge and its weight", () => {
        const graph: IGraph<string> = new Graph();
        graph
          .addVertex("Mike")
          .addVertex("Bob")
          .addEdge("Mike", "Bob", 5)
          .addEdge("Mike", "Bob", 10);

        describe("should not multiple edges", () => {
          test("should not add vertex to first edge", () => {
            expect(graph.getVertexNeighbors("Mike")).toEqual(["Bob"]);
          });
          test("should not add vertex to first edge", () => {
            expect(graph.getVertexNeighbors("Bob")).toEqual(["Mike"]);
          });
        });

        test("should override edge weight", () => {
          expect(graph.getEdgeWeightByVertices("Mike", "Bob")).toBe(10);
        });
      });
    });
    describe("in undirected graph", () => {
      describe("should correct add edge between two existed vertices", () => {
        const graph: IGraph<string> = new Graph();
        graph.addVertex("Mike").addVertex("Bob").addEdge("Mike", "Bob");

        test("should add second node to first node neighbors", () => {
          expect(graph.getVertexNeighbors("Mike")).toContain("Bob");
        });
        test("should add first node to second node neighbors", () => {
          expect(graph.getVertexNeighbors("Bob")).toContain("Mike");
        });
      });
    });
    describe("in directed graph", () => {
      describe("should correct add edge between two existed vertices", () => {
        const graph: IGraph<string> = new Graph(true);
        graph.addVertex("Mike").addVertex("Bob").addEdge("Mike", "Bob");

        test("should add second node to first node neighbors", () => {
          expect(graph.getVertexNeighbors("Mike")).toContain("Bob");
        });
        test("should not add first node to second node neighbors", () => {
          expect(graph.getVertexNeighbors("Bob")).not.toContain("Mike");
        });
      });
    });
  });

  describe("method removeVertex", () => {
    test("should throw when try to delete not existed vertex", () => {
      const graph: IGraph<string> = new Graph();

      expect(() => {
        graph.removeVertex("NOT_EXISTED_VERTEX");
      }).toThrowError();
    });

    describe("should cascade remove", () => {
      const graph: IGraph<string> = new Graph();

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

      test("should remove edges", () => {
        const hasEdge = graph.hasEdge("Mike", "Bob");

        expect(hasEdge).toBe(false);
      });
      test("should remove related vertexes neighbors", () => {
        const list = graph.getAdjacencyList();
        const expectedList = new Map();

        // eslint-disable-next-line
        expectedList
          .set("Mike", ["Lisa"])
          .set("Lisa", ["Mike", "John"])
          .set("John", ["Lisa"]);

        expect(list).toEqual(expectedList);
      });
    });
  });

  describe("method removeEdge", () => {
    test("should throw when try to delete not existed edge", () => {
      const graph: IGraph<string> = new Graph();

      expect(() => {
        graph.removeEdge("NOT_EXISTED_VERTEX", "NOT_EXISTED_VERTEX");
      }).toThrowError();
    });
    describe("in undirected graph", () => {
      const graph: IGraph<string> = new Graph();

      graph
        .addVertex("Mike")
        .addVertex("Bob")
        .addVertex("Lisa")
        .addEdge("Mike", "Bob")
        .addEdge("Bob", "Lisa")
        .addEdge("Mike", "Lisa");

      graph.removeEdge("Mike", "Lisa");

      test("should delete correct", () => {
        expect(graph.hasEdge("Mike", "Lisa")).toBe(false);
      });
    });
    describe("in undirected graph", () => {
      const graph: IGraph<string> = new Graph(true);

      graph
        .addVertex("Mike")
        .addVertex("Bob")
        .addVertex("Lisa")
        .addEdge("Mike", "Bob")
        .addEdge("Bob", "Lisa")
        .addEdge("Mike", "Lisa")
        .addEdge("Lisa", "Mike");

      graph.removeEdge("Mike", "Lisa");

      describe("should delete correct", () => {
        test("should delete edge from-to", () => {
          expect(graph.hasEdge("Mike", "Lisa")).toBe(false);
        });
        test("should not delete edge to-from", () => {
          expect(graph.hasEdge("Lisa", "Mike")).toBe(true);
        });
      });
    });
  });

  describe("method getAdjacencyMatrix", () => {
    describe("in empty graph", () => {
      const graph: IGraph<number> = new Graph();
      test("should return empty list", () => {
        const matrix = graph.getAdjacencyMatrix();

        expect(matrix).toEqual([]);
      });
    });

    describe("in undirected graph", () => {
      const graph: IGraph<number> = new Graph();
      graph
        .addVertex(1)
        .addVertex(2)
        .addVertex(3)
        .addVertex(4)
        .addEdge(1, 2)
        .addEdge(1, 3)
        .addEdge(3, 4);

      test("should return correct matrix", () => {
        const matrix = graph.getAdjacencyMatrix();

        expect(matrix).toEqual([
          [0, 1, 1, 0],
          [1, 0, 0, 0],
          [1, 0, 0, 1],
          [0, 0, 1, 0],
        ]);
      });
    });

    describe("in undirected graph", () => {
      const graph: IGraph<number> = new Graph(true);
      graph
        .addVertex(1)
        .addVertex(2)
        .addVertex(3)
        .addVertex(4)
        .addEdge(1, 2)
        .addEdge(1, 3)
        .addEdge(3, 4);

      test("should return correct matrix", () => {
        const matrix = graph.getAdjacencyMatrix();

        expect(matrix).toEqual([
          [0, 1, 1, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 1],
          [0, 0, 0, 0],
        ]);
      });
    });
  });

  describe("method getAdjacencyList", () => {
    describe("in empty graph", () => {
      const graph: IGraph<number> = new Graph();
      test("should return empty list", () => {
        const map = graph.getAdjacencyList();
        const emptyMap = new Map<number, number>();
        expect(map).toEqual(emptyMap);
      });
    });

    describe("in undirected graph", () => {
      const graph: IGraph<number> = new Graph();
      graph
        .addVertex(1)
        .addVertex(2)
        .addVertex(3)
        .addVertex(4)
        .addEdge(1, 2)
        .addEdge(1, 3)
        .addEdge(3, 4);

      test("should return correct list", () => {
        const list = graph.getAdjacencyList();
        const expectedList = new Map<number, Array<number>>();

        // eslint-disable-next-line
        expectedList
          .set(1, [2, 3])
          .set(2, [1])
          .set(3, [1, 4])
          .set(4, [3]);

        expect(list).toEqual(expectedList);
      });
    });

    describe("in undirected graph", () => {
      const graph: IGraph<number> = new Graph(true);
      graph
        .addVertex(1)
        .addVertex(2)
        .addVertex(3)
        .addVertex(4)
        .addEdge(1, 2)
        .addEdge(1, 3)
        .addEdge(3, 4);

      test("should return correct list", () => {
        const list = graph.getAdjacencyList();
        const expectedList = new Map<number, Array<number>>();

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

  describe("method getVertexNeighbors", () => {
    test("should throw when vertex does not exist", () => {
      const graph: IGraph<number> = new Graph<number>();
      graph.addVertex(1).addVertex(2).addEdge(1, 2);

      expect(() => {
        graph.getVertexNeighbors(0);
      }).toThrowError();
    });
    describe("in undirected graph", () => {
      test("should return correct neighbors", () => {
        const graph: IGraph<number> = new Graph();
        graph
          .addVertex(1)
          .addVertex(2)
          .addVertex(3)
          .addEdge(1, 2)
          .addEdge(2, 3);

        expect(graph.getVertexNeighbors(2)).toEqual([1, 3]);
      });
    });
    describe("in directed graph", () => {
      test("should return correct neighbors", () => {
        const graph: IGraph<number> = new Graph(true);
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
});
