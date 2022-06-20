import IGraph from "../../../../src/app/types/IGraph";
import UndirectedGraph from "../../../../src/app/data-structures/Graph/UndirectedGraph";
import DirectedGraph from "../../../../src/app/data-structures/Graph/DirectedGraph";
import { createGraph } from "../../../../src/app/data-structures/Graph/_helpers/createGraph";
import { EnumGraphType } from "../../../../src/app/types/EnumGraphType";
import IsAlreadyExistsException from "../../../../src/app/exceptions/IsAlreadyExistsException";
import IsNotFoundException from "../../../../src/app/exceptions/IsNotFoundException";

describe.each([EnumGraphType.Directed, EnumGraphType.Undirected])(
  "%s graph",
  (graphType: EnumGraphType) => {
    describe("method weight", () => {
      const graph: IGraph<string> = createGraph(graphType);

      graph
        .addVertex("Mike")
        .addVertex("Bob")
        .addVertex("Lisa")
        .addEdge("Mike", "Bob", 5)
        .addEdge("Bob", "Lisa", 10)
        .addEdge("Mike", "Lisa", 20);

      it("should return correct weight value", () => {
        const weight = graph.weight();
        const expectedWeight = 35;

        expect(weight).toBe(expectedWeight);
      });
    });

    describe("method verticesCount", () => {
      describe("in empty graph", () => {
        const graph: IGraph<string> = createGraph(graphType);

        it("should return correct vertices count", () => {
          expect(graph.verticesCount()).toBe(0);
        });
      });
      describe("in non empty graph", () => {
        const graph: IGraph<string> = createGraph(graphType);
        graph.addVertex("Mike").addVertex("Bob").addVertex("Lisa");

        it("should return correct vertices count", () => {
          expect(graph.verticesCount()).toBe(3);
        });
      });
    });

    describe("method edgesCount", () => {
      describe("in empty graph", () => {
        const graph: IGraph<string> = createGraph(graphType);

        it("should return correct vertices count", () => {
          expect(graph.edgesCount()).toBe(0);
        });
      });

      if (graphType === EnumGraphType.Undirected) {
        describe("in non-empty graph", () => {
          const graph: IGraph<string> = new UndirectedGraph();
          graph
            .addVertex("Mike")
            .addVertex("Bob")
            .addVertex("Lisa")
            .addEdge("Mike", "Bob")
            .addEdge("Mike", "Lisa")
            .addEdge("Bob", "Lisa");

          it("should return correct vertices count", () => {
            expect(graph.edgesCount()).toBe(3);
          });
        });
      }

      if (graphType === EnumGraphType.Directed) {
        describe("in non-empty graph", () => {
          const graph: IGraph<string> = new DirectedGraph();
          graph
            .addVertex("Mike")
            .addVertex("Bob")
            .addVertex("Lisa")
            .addEdge("Mike", "Bob")
            .addEdge("Mike", "Lisa")
            .addEdge("Lisa", "Mike");

          it("should return correct vertices count", () => {
            expect(graph.edgesCount()).toBe(3);
          });
        });
      }
    });

    describe("method vertices", () => {
      describe("in empty graph", () => {
        const graph: IGraph<string> = createGraph(graphType);

        it("should return empty array of vertices", () => {
          expect(graph.vertices()).toEqual([]);
        });
      });
      describe("in non empty graph", () => {
        const graph: IGraph<string> = createGraph(graphType);
        graph.addVertex("Mike").addVertex("Bob").addVertex("Lisa");

        it("should return correct array of vertices", () => {
          expect(graph.vertices()).toEqual(["Mike", "Bob", "Lisa"]);
        });
      });
    });

    describe("method addVertex", () => {
      it("should correct add vertex", () => {
        const graph: IGraph<string> = createGraph(graphType);
        graph.addVertex("Mike").addVertex("Bob").addVertex("Lisa");

        const vertices = graph.vertices();
        const expectedVertices = ["Mike", "Bob", "Lisa"];

        expect(vertices).toEqual(expectedVertices);
      });
      it("should throw when try to add an existed vertex", () => {
        const graph: IGraph<string> = createGraph(graphType);
        graph.addVertex("Mike");

        expect(() => {
          graph.addVertex("Mike");
        }).toThrowError(IsAlreadyExistsException);
      });
    });

    describe("method addEdge", () => {
      describe("should throw when try to add edge between not existed vertices", () => {
        const graph: IGraph<string> = createGraph(graphType);
        graph.addVertex("Mike").addVertex("Bob");

        it("when first node does not exist", () => {
          expect(() => {
            graph.addEdge("NOT_EXISTED_NODE", "Bob");
          }).toThrowError(IsNotFoundException);
        });
        it("when second node does not exist", () => {
          expect(() => {
            graph.addEdge("Mike", "NOT_EXISTED_NODE");
          }).toThrowError(IsNotFoundException);
        });
      });

      if (graphType === EnumGraphType.Undirected) {
        describe("should correct add edge between two existed vertices", () => {
          const graph: IGraph<string> = new UndirectedGraph();
          graph.addVertex("Mike").addVertex("Bob").addEdge("Mike", "Bob");

          it("should add second node to first node neighbors", () => {
            expect(graph.getVertexNeighbors("Mike")).toContain("Bob");
          });
          it("should add first node to second node neighbors", () => {
            expect(graph.getVertexNeighbors("Bob")).toContain("Mike");
          });
        });

        describe("should override an existed edge and its weight", () => {
          const graph: IGraph<string> = new UndirectedGraph();
          graph
            .addVertex("Mike")
            .addVertex("Bob")
            .addEdge("Mike", "Bob", 5)
            .addEdge("Mike", "Bob", 10);

          describe("should not multiple edges", () => {
            it("should not add vertex to first edge", () => {
              expect(graph.getVertexNeighbors("Mike")).toEqual(["Bob"]);
            });
            it("should not add vertex to second edge", () => {
              expect(graph.getVertexNeighbors("Bob")).toEqual(["Mike"]);
            });
          });

          it("should override edge weight", () => {
            expect(graph.getEdgeWeight("Mike", "Bob")).toBe(10);
          });
        });
      }

      if (graphType === EnumGraphType.Directed) {
        describe("should correct add edge between two existed vertices", () => {
          const graph: IGraph<string> = new DirectedGraph();
          graph.addVertex("Mike").addVertex("Bob").addEdge("Mike", "Bob");

          it("should add second node to first node neighbors", () => {
            expect(graph.getVertexNeighbors("Mike")).toContain("Bob");
          });
          it("should not add first node to second node neighbors", () => {
            expect(graph.getVertexNeighbors("Bob")).not.toContain("Mike");
          });
        });

        describe("should override an existed edge and its weight", () => {
          const graph: IGraph<string> = new DirectedGraph();
          graph
            .addVertex("Mike")
            .addVertex("Bob")
            .addEdge("Mike", "Bob", 5)
            .addEdge("Bob", "Mike", 15)
            .addEdge("Mike", "Bob", 10);

          describe("should not multiple edges", () => {
            it("should not add vertex to first edge", () => {
              expect(graph.getVertexNeighbors("Mike")).toEqual(["Bob"]);
            });
            it("should not add vertex to second edge", () => {
              expect(graph.getVertexNeighbors("Bob")).toEqual(["Mike"]);
            });
          });

          it("should override edge weight", () => {
            expect(graph.getEdgeWeight("Mike", "Bob")).toBe(10);
          });

          it("should not override back edge weight", () => {
            expect(graph.getEdgeWeight("Bob", "Mike")).toBe(15);
          });
        });
      }
    });

    describe("method removeVertex", () => {
      it("should throw when try to delete not existed vertex", () => {
        const graph: IGraph<string> = createGraph(graphType);

        expect(() => {
          graph.removeVertex("NOT_EXISTED_VERTEX");
        }).toThrowError(IsNotFoundException);
      });

      if (graphType === EnumGraphType.Undirected) {
        describe("should cascade remove", () => {
          const graph: IGraph<string> = new UndirectedGraph();

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

          it("should remove edges", () => {
            const hasEdge = graph.hasEdge("Mike", "Bob");

            expect(hasEdge).toBe(false);
          });
          it("should remove related vertexes neighbors", () => {
            const mikeNeighbors = graph.getVertexNeighbors("Mike");
            const lisaNeighbors = graph.getVertexNeighbors("Lisa");
            const johnNeighbors = graph.getVertexNeighbors("John");

            expect(mikeNeighbors).toEqual(["Lisa"]);
            expect(lisaNeighbors).toEqual(["Mike", "John"]);
            expect(johnNeighbors).toEqual(["Lisa"]);
          });
        });
      }

      if (graphType === EnumGraphType.Directed) {
        describe("should cascade remove", () => {
          const graph: IGraph<string> = new DirectedGraph();

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

          it("should remove edges", () => {
            const hasEdge = graph.hasEdge("Mike", "Bob");
            expect(hasEdge).toBe(false);
          });

          it("should remove related vertices neighbors", () => {
            const mikeNeighbors = graph.getVertexNeighbors("Mike");
            const lisaNeighbors = graph.getVertexNeighbors("Lisa");
            const johnNeighbors = graph.getVertexNeighbors("John");

            expect(mikeNeighbors).toEqual(["Lisa"]);
            expect(lisaNeighbors).toEqual([]);
            expect(johnNeighbors).toEqual(["Lisa"]);
          });
        });
      }
    });

    describe("method removeEdge", () => {
      it("should throw when try to delete not existed edge", () => {
        const graph: IGraph<string> = createGraph(graphType);

        expect(() => {
          graph.removeEdge("NOT_EXISTED_VERTEX", "NOT_EXISTED_VERTEX");
        }).toThrowError(IsNotFoundException);
      });

      if (graphType === EnumGraphType.Undirected) {
        describe("should delete correct", () => {
          const graph: IGraph<string> = new UndirectedGraph();

          graph
            .addVertex("Mike")
            .addVertex("Bob")
            .addVertex("Lisa")
            .addEdge("Mike", "Bob")
            .addEdge("Bob", "Lisa")
            .addEdge("Mike", "Lisa");

          graph.removeEdge("Mike", "Lisa");

          it("should delete correct", () => {
            expect(graph.hasEdge("Mike", "Lisa")).toBe(false);
          });
        });
      }

      if (graphType === EnumGraphType.Directed) {
        describe("should delete correct", () => {
          const graph: IGraph<string> = new DirectedGraph();

          graph
            .addVertex("Mike")
            .addVertex("Bob")
            .addVertex("Lisa")
            .addEdge("Mike", "Bob")
            .addEdge("Bob", "Lisa")
            .addEdge("Mike", "Lisa")
            .addEdge("Lisa", "Mike");

          graph.removeEdge("Mike", "Lisa");

          it("should delete edge from-to", () => {
            expect(graph.hasEdge("Mike", "Lisa")).toBe(false);
          });

          it("should not delete edge to-from", () => {
            expect(graph.hasEdge("Lisa", "Mike")).toBe(true);
          });
        });
      }
    });

    describe("method getVertexNeighbors", () => {
      it("should throw when vertex does not exist", () => {
        const graph: IGraph<number> = createGraph(graphType);
        graph.addVertex(1).addVertex(2).addEdge(1, 2);

        expect(() => {
          graph.getVertexNeighbors(0);
        }).toThrowError();
      });

      if (graphType === EnumGraphType.Undirected) {
        it("should return correct neighbors", () => {
          const graph: IGraph<number> = new UndirectedGraph();
          graph
            .addVertex(1)
            .addVertex(2)
            .addVertex(3)
            .addEdge(1, 2)
            .addEdge(2, 3);

          expect(graph.getVertexNeighbors(2)).toEqual([1, 3]);
        });
      }

      if (graphType === EnumGraphType.Directed) {
        it("should return correct neighbors", () => {
          const graph: IGraph<number> = new DirectedGraph();
          graph
            .addVertex(1)
            .addVertex(2)
            .addVertex(3)
            .addEdge(1, 2)
            .addEdge(2, 3);

          expect(graph.getVertexNeighbors(2)).toEqual([3]);
        });
      }
    });
  }
);
