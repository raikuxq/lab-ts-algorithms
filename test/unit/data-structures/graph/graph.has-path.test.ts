import AbstractGraph from "src/app/data-structures/Graph/core/AbstractGraph";
import UndirectedGraph from "src/app/data-structures/Graph/core/UndirectedGraph";
import DirectedGraph from "src/app/data-structures/Graph/core/DirectedGraph";

import { hasPath } from "src/app/data-structures/Graph/searching/hasPath";
import { EnumGraphTraversalType } from "src/app/types/EnumGraphTraversalType";
import IsNotFoundException from "src/app/exceptions/IsNotFoundException";

describe("Has Path Algorithm", () => {
  const traversalType = EnumGraphTraversalType.BFS;

  describe("Any type of traversal in empty graph", () => {
    const graph: AbstractGraph<string> = new UndirectedGraph();

    it("should throw when graph is empty", () => {
      expect(() => {
        hasPath<string>({ graph, from: "-", to: "-", traversalType });
      }).toThrow(IsNotFoundException);
    });
  });

  describe("Any type of traversal in non empty graph", () => {
    const graph: AbstractGraph<string> = new UndirectedGraph();

    graph.addVertex("Mike").addVertex("Bob").addEdge("Mike", "Bob");

    it("should throw when first node does not exist", () => {
      expect(() => {
        hasPath<string>({
          graph,
          from: "Mike",
          to: "NOT_EXISTED_NODE",
          traversalType,
        });
      }).toThrow(IsNotFoundException);
    });

    it("should throw when second node does not exist", () => {
      expect(() => {
        hasPath<string>({
          graph,
          from: "NOT_EXISTED_NODE",
          to: "Bob",
          traversalType,
        });
      }).toThrow(IsNotFoundException);
    });
  });

  describe.each([EnumGraphTraversalType.BFS, EnumGraphTraversalType.DFS])(
    "%s",
    (traversalType: EnumGraphTraversalType) => {
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
          expect(
            hasPath({ graph, from: "Mike", to: "Anna", traversalType }),
          ).toBe(true);
        });
        it("should not find element if it has not an edge", () => {
          expect(
            hasPath({ graph, from: "Mike", to: "John", traversalType }),
          ).toBe(false);
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
          expect(
            hasPath<string>({ graph, from: "Mike", to: "Anna", traversalType }),
          ).toBe(true);
        });
        it("should not find element if it has not an edge", () => {
          expect(
            hasPath<string>({ graph, from: "Mike", to: "John", traversalType }),
          ).toBe(false);
        });
        it("should not find element if and edge has wrong direction", () => {
          expect(
            hasPath<string>({ graph, from: "Lisa", to: "Mike", traversalType }),
          ).toBe(false);
        });
      });
    },
  );
});
