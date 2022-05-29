import AbstractGraph from "../../../../src/data-structures/Graph/AbstractGraph";
import UndirectedGraph from "../../../../src/data-structures/Graph/UndirectedGraph";
import DirectedGraph from "../../../../src/data-structures/Graph/DirectedGraph";
import IGraphIterationStrategy from "../../../../src/types/IGraphIterationStrategy";
import BFSIterationStrategy from "../../../../src/data-structures/Graph/strategy/BFSIterationStrategy";
import DijkstraIterationStrategy from "../../../../src/data-structures/Graph/strategy/DijkstraIterationStrategy";

import { shortestPath } from "../../../../src/data-structures/Graph/searching/shortestPath";
import { EnumGraphTraversalType } from "../../../../src/types/EnumGraphTraversalType";
import IsNotFoundException from "../../../../src/exceptions/IsNotFoundException";

describe("Shortest path algorithm", () => {
  const strategy: IGraphIterationStrategy<string> = new BFSIterationStrategy();

  describe("Any type of traversal in empty graph", () => {
    const graph: AbstractGraph<string> = new UndirectedGraph();

    it("should throw when graph is empty", () => {
      expect(() => {
        shortestPath(graph, "-", "-", strategy);
      }).toThrowError(IsNotFoundException);
    });
  });

  describe("Any type of traversal in non empty graph", () => {
    const graph: AbstractGraph<string> = new UndirectedGraph();

    graph.addVertex("Mike").addVertex("Bob").addEdge("Mike", "Bob");

    it("should throw when first node does not exist", () => {
      expect(() => {
        shortestPath(graph, "Mike", "NOT_EXISTED_NODE", strategy);
      }).toThrowError(IsNotFoundException);
    });

    it("should throw when second node does not exist", () => {
      expect(() => {
        shortestPath(graph, "NOT_EXISTED_NODE", "Bob", strategy);
      }).toThrowError(IsNotFoundException);
    });

    it("should find correct path between neighbor nodes", () => {
      expect(shortestPath(graph, "Mike", "Bob", strategy)).toEqual([
        "Mike",
        "Bob",
      ]);
    });
  });

  describe.each([EnumGraphTraversalType.DIJKSTRA])(
    "Weighted graph by %s",
    (strategyType: EnumGraphTraversalType) => {
      let strategy: IGraphIterationStrategy<string>;

      switch (strategyType) {
        case EnumGraphTraversalType.DIJKSTRA: {
          strategy = new DijkstraIterationStrategy();
          break;
        }
        default: {
          throw new Error("Invalid search method");
        }
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
          .addEdge("Mike", "Bob", 5)
          .addEdge("Mike", "Lisa", 3)
          .addEdge("Lisa", "Aaron", 3)
          .addEdge("Lisa", "James", 3)
          .addEdge("James", "Aaron", 3)
          .addEdge("James", "Anna", 6)
          .addEdge("Bob", "Anna", 15);

        it("should find correct path between multiple nodes", () => {
          /**
           * Bob -> Mike (5) -> Anna (15) = 20
           * Mike -> Lisa (3) -> James (3) -> Anna (6) = 12
           */
          expect(shortestPath(graph, "Mike", "Anna", strategy)).toEqual([
            "Mike",
            "Lisa",
            "James",
            "Anna",
          ]);
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
          .addEdge("Mike", "Bob", 5)
          .addEdge("Mike", "Lisa", 3)
          .addEdge("Lisa", "Aaron", 3)
          .addEdge("Aaron", "James", 3)
          .addEdge("James", "Lisa", 10)
          .addEdge("James", "Aaron", 10)
          .addEdge("James", "Anna", 6)
          .addEdge("Bob", "Anna", 15);

        it("should find correct path between multiple nodes", () => {
          /**
           * Bob -> Mike (5) -> Anna (15) = 20
           * Mike -> Lisa (3) -> Aaron (3) -> James (3) -> Anna (6) = 15
           */
          expect(shortestPath(graph, "Mike", "Anna", strategy)).toEqual([
            "Mike",
            "Lisa",
            "Aaron",
            "James",
            "Anna",
          ]);
        });
      });
    }
  );

  describe.each([EnumGraphTraversalType.BFS])(
    "Unweighted graph by %s",
    (strategyType: EnumGraphTraversalType) => {
      let strategy: IGraphIterationStrategy<string>;

      switch (strategyType) {
        case EnumGraphTraversalType.BFS: {
          strategy = new BFSIterationStrategy();
          break;
        }
        default: {
          throw new Error("Invalid search method");
        }
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
          .addEdge("Mike", "Bob")
          .addEdge("Mike", "Aaron")
          .addEdge("Mike", "Lisa")
          .addEdge("Lisa", "James")
          .addEdge("Lisa", "Aaron")
          .addEdge("James", "Aaron")
          .addEdge("James", "Anna")
          .addEdge("Aaron", "Anna");

        it("should find correct path between multiple nodes", () => {
          /**
           * Mike -> Aaron -> Lisa -> James -> Anna
           * Mike -> Aaron -> Anna
           * Mike -> Lisa -> James -> Anna
           */
          expect(shortestPath(graph, "Mike", "Anna", strategy)).toEqual([
            "Mike",
            "Aaron",
            "Anna",
          ]);
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
          .addEdge("Mike", "Bob")
          .addEdge("Mike", "Lisa")
          .addEdge("Lisa", "James")
          .addEdge("James", "Aaron")
          .addEdge("Aaron", "Anna")
          .addEdge("Lisa", "Anna");

        it("should find correct path between multiple nodes", () => {
          expect(shortestPath(graph, "Mike", "Anna", strategy)).toEqual([
            "Mike",
            "Lisa",
            "Anna",
          ]);
        });
      });
    }
  );
});
