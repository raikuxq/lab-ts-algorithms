import IGraph from "../../data-structures/Graph/interface/IGraph";
import IGraphIterationStrategy from "../../data-structures/Graph/strategy/interface/IGraphIterationStrategy";

import Graph from "../../data-structures/Graph/Graph";
import BFSIterationStrategy from "../../data-structures/Graph/strategy/BFSIterationStrategy";
import DFSIterationStrategy from "../../data-structures/Graph/strategy/DFSIterationStrategy";
import DijkstraIterationStrategy from "../../data-structures/Graph/strategy/DijkstraIterationStrategy";

import shortestPath from "../shortest-path";

describe("shortest path searching algorithm", () => {
  describe("in any graph type", () => {
    const strategy: IGraphIterationStrategy<string> = new BFSIterationStrategy();

    describe("in empty graph", () => {
      const graph: IGraph<string> = new Graph();

      test("should throw when graph is empty", () => {
        expect(() => {
          shortestPath(graph, "-", "-", strategy);
        }).toThrowError();
      });
    });

    describe("in non empty graph", () => {
      const graph: IGraph<string> = new Graph();

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

      test("should find correct path between neighbor nodes", () => {
        expect(shortestPath(graph, "Mike", "Bob", strategy)).toEqual([
          "Mike",
          "Bob",
        ]);
      });
    });
  });

  describe.each(["Dijkstra"])(
    "in weighted graph by %s method",
    (strategyType: string) => {
      let strategy: IGraphIterationStrategy<string>;

      switch (strategyType) {
        case "Dijkstra": {
          strategy = new DijkstraIterationStrategy();
          break;
        }
        default: {
          throw new Error("Invalid search method");
        }
      }

      describe("in undirected graph", () => {
        const graph: IGraph<string> = new Graph<string>();

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

        test("should find correct path between multiple nodes", () => {
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
        const graph: IGraph<string> = new Graph(true);

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

        test("should find correct path between multiple nodes", () => {
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

  describe.each(["BFS", "DFS"])(
    "in unweighted graph by %s method",
    (strategyType: string) => {
      let strategy: IGraphIterationStrategy<string>;

      switch (strategyType) {
        case "BFS": {
          strategy = new BFSIterationStrategy();
          break;
        }
        case "DFS": {
          strategy = new DFSIterationStrategy();
          break;
        }
        default: {
          throw new Error("Invalid search method");
        }
      }

      describe("in undirected graph", () => {
        const graph: IGraph<string> = new Graph();

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

        test("should find correct path between multiple nodes", () => {
          expect(shortestPath(graph, "Mike", "Anna", strategy)).toEqual([
            "Mike",
            "Lisa",
            "James",
            "Anna",
          ]);
        });
      });

      describe("in directed graph", () => {
        const graph: IGraph<string> = new Graph(true);

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

        test("should find correct path between multiple nodes", () => {
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
