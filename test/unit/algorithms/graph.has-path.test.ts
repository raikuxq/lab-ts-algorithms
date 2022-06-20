import AbstractGraph from "../../../src/app/data-structures/Graph/AbstractGraph";
import UndirectedGraph from "../../../src/app/data-structures/Graph/UndirectedGraph";
import DirectedGraph from "../../../src/app/data-structures/Graph/DirectedGraph";
import IGraphIterationStrategy from "../../../src/app/types/IGraphIterationStrategy";
import BFSIterationStrategy from "../../../src/app/algorithms/graph/iterator-strategy/BFSIterationStrategy";
import DFSIterationStrategy from "../../../src/app/algorithms/graph/iterator-strategy/DFSIterationStrategy";

import { hasPath } from "../../../src/app/algorithms/graph/searching/hasPath";
import { EnumGraphTraversalType } from "../../../src/app/types/EnumGraphTraversalType";
import IsNotFoundException from "../../../src/app/exceptions/IsNotFoundException";

describe("Has Path Algorithm", () => {
  const strategy: IGraphIterationStrategy<string> = new BFSIterationStrategy();

  describe("Any type of traversal in empty graph", () => {
    const graph: AbstractGraph<string> = new UndirectedGraph();

    it("should throw when graph is empty", () => {
      expect(() => {
        hasPath(graph, "-", "-", strategy);
      }).toThrowError(IsNotFoundException);
    });
  });

  describe("Any type of traversal in non empty graph", () => {
    const graph: AbstractGraph<string> = new UndirectedGraph();

    graph.addVertex("Mike").addVertex("Bob").addEdge("Mike", "Bob");

    it("should throw when first node does not exist", () => {
      expect(() => {
        hasPath(graph, "Mike", "NOT_EXISTED_NODE", strategy);
      }).toThrowError(IsNotFoundException);
    });

    it("should throw when second node does not exist", () => {
      expect(() => {
        hasPath(graph, "NOT_EXISTED_NODE", "Bob", strategy);
      }).toThrowError(IsNotFoundException);
    });
  });

  describe.each([EnumGraphTraversalType.BFS, EnumGraphTraversalType.DFS])(
    "%s",
    (strategyType: EnumGraphTraversalType) => {
      let strategy: IGraphIterationStrategy<string>;

      switch (strategyType) {
        case EnumGraphTraversalType.BFS:
          strategy = new BFSIterationStrategy();
          break;
        case EnumGraphTraversalType.DFS:
          strategy = new DFSIterationStrategy();
          break;
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

        it("should find element if it has an edge", () => {
          expect(hasPath(graph, "Mike", "Anna", strategy)).toBe(true);
        });
        it("should not find element if it has not an edge", () => {
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

        it("should find element if it has an edge", () => {
          expect(hasPath(graph, "Mike", "Anna", strategy)).toBe(true);
        });
        it("should not find element if it has not an edge", () => {
          expect(hasPath(graph, "Mike", "John", strategy)).toBe(false);
        });
        it("should not find element if and edge has wrong direction", () => {
          expect(hasPath(graph, "Lisa", "Mike", strategy)).toBe(false);
        });
      });
    }
  );
});
