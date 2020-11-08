import AbstractGraph from "../../data-structures/Graph/AbstractGraph";
import UndirectedGraph from "../../data-structures/Graph/UndirectedGraph";
import DirectedGraph from "../../data-structures/Graph/DirectedGraph";
import IGraphIterationStrategy from "../../data-structures/Graph/strategy/interface/IGraphIterationStrategy";
import BFSIterationStrategy from "../../data-structures/Graph/strategy/BFSIterationStrategy";
import DFSIterationStrategy from "../../data-structures/Graph/strategy/DFSIterationStrategy";

import hasPath from "../has-path";
import shortestPath from "../shortest-path";

describe("has path searching algorithm", () => {
  describe("in any graph type", () => {
    const strategy: IGraphIterationStrategy<string> = new BFSIterationStrategy();

    describe("in empty graph", () => {
      const graph: AbstractGraph<string> = new UndirectedGraph();

      test("should throw when graph is empty", () => {
        expect(() => {
          shortestPath(graph, "-", "-", strategy);
        }).toThrowError();
      });
    });

    describe("in non empty graph", () => {
      const graph: AbstractGraph<string> = new UndirectedGraph();

      graph.addVertex("Mike").addVertex("Bob").addEdge("Mike", "Bob");

      test("should throw when first node does not exist", () => {
        expect(() => {
          shortestPath(graph, "Mike", "NOT_EXISTED_NODE", strategy);
        }).toThrowError();
      });

      test("should throw when second node does not exist", () => {
        expect(() => {
          shortestPath(graph, "NOT_EXISTED_NODE", "Bob", strategy);
        }).toThrowError();
      });
    });
  });

  describe.each(["BFS", "DFS"])(
    "searching by %s method",
    (strategyType: string) => {
      let strategy: IGraphIterationStrategy<string>;

      switch (strategyType) {
        case "BFS":
          strategy = new BFSIterationStrategy();
          break;
        case "DFS":
          strategy = new DFSIterationStrategy();
          break;
        default:
          throw new Error("Invalid search method");
      }

      describe("in undirected graph", () => {
        const graph: AbstractGraph<string> = new UndirectedGraph();

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

        test("should find element if it has an edge", () => {
          expect(hasPath(graph, "Mike", "Anna", strategy)).toBe(true);
        });
        test("should not find element if it has not an edge", () => {
          expect(hasPath(graph, "Mike", "John", strategy)).toBe(false);
        });
      });

      describe("in directed graph", () => {
        const graph: AbstractGraph<string> = new DirectedGraph();

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

        test("should find element if it has an edge", () => {
          expect(hasPath(graph, "Mike", "Anna", strategy)).toBe(true);
        });
        test("should not find element if it has not an edge", () => {
          expect(hasPath(graph, "Mike", "John", strategy)).toBe(false);
        });
        test("should not find element if and edge has wrong direction", () => {
          expect(hasPath(graph, "Lisa", "Mike", strategy)).toBe(false);
        });
      });
    }
  );
});
