import IGraph from "../src/types/IGraph";
import UndirectedGraph from "../src/data-structures/Graph/UndirectedGraph";
import DirectedGraph from "../src/data-structures/Graph/DirectedGraph";
import GraphPresenter from "../src/data-structures/Graph/presenter/GraphPresenter";
import { createGraph } from "../src/helpers/createGraph";
import { EnumGraphType } from "../src/types/EnumGraphType";

describe.each([EnumGraphType.Directed, EnumGraphType.Undirected])(
  "%s graph",
  (graphType: EnumGraphType) => {
    describe("method getAdjacencyMatrix", () => {
      describe("in empty graph", () => {
        const graph: IGraph<string> = createGraph(graphType);
        const graphPresenter = new GraphPresenter(graph);

        test("should return empty list", () => {
          const matrix = graphPresenter.getAdjacencyMatrix();

          expect(matrix).toEqual([]);
        });
      });
    });

    describe("method getAdjacencyList", () => {
      describe("in empty graph", () => {
        const graph: IGraph<number> = createGraph(graphType);
        const graphPresenter = new GraphPresenter(graph);

        test("should return empty list", () => {
          const map = graphPresenter.getAdjacencyList();
          const emptyMap = new Map<number, number>();
          expect(map).toEqual(emptyMap);
        });
      });
    });
  }
);

describe("Any type of graph", () => {
  describe("method getAdjacencyMatrix", () => {
    describe("in undirected graph", () => {
      const graph: IGraph<number> = new UndirectedGraph();
      const graphPresenter = new GraphPresenter(graph);
      graph
        .addVertex(1)
        .addVertex(2)
        .addVertex(3)
        .addVertex(4)
        .addEdge(1, 2)
        .addEdge(1, 3)
        .addEdge(3, 4);

      test("should return correct matrix", () => {
        const matrix = graphPresenter.getAdjacencyMatrix();

        expect(matrix).toEqual([
          [0, 1, 1, 0],
          [1, 0, 0, 0],
          [1, 0, 0, 1],
          [0, 0, 1, 0],
        ]);
      });
    });

    describe("in directed graph", () => {
      const graph: IGraph<number> = new DirectedGraph();
      const graphPresenter = new GraphPresenter(graph);
      graph
        .addVertex(1)
        .addVertex(2)
        .addVertex(3)
        .addVertex(4)
        .addEdge(1, 2)
        .addEdge(1, 3)
        .addEdge(3, 4);

      test("should return correct matrix", () => {
        const matrix = graphPresenter.getAdjacencyMatrix();

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
    describe("in undirected graph", () => {
      const graph: IGraph<number> = new UndirectedGraph();
      const graphPresenter = new GraphPresenter(graph);
      graph
        .addVertex(1)
        .addVertex(2)
        .addVertex(3)
        .addVertex(4)
        .addEdge(1, 2)
        .addEdge(1, 3)
        .addEdge(3, 4);

      test("should return correct list", () => {
        const list = graphPresenter.getAdjacencyList();
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

    describe("in directed graph", () => {
      const graph: IGraph<number> = new DirectedGraph();
      const graphPresenter = new GraphPresenter(graph);
      graph
        .addVertex(1)
        .addVertex(2)
        .addVertex(3)
        .addVertex(4)
        .addEdge(1, 2)
        .addEdge(1, 3)
        .addEdge(3, 4);

      test("should return correct list", () => {
        const list = graphPresenter.getAdjacencyList();
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
});
