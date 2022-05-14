import IGraph from "../../../../src/types/IGraph";
import UndirectedGraph from "../../../../src/data-structures/Graph/UndirectedGraph";
import DirectedGraph from "../../../../src/data-structures/Graph/DirectedGraph";
import { createGraph } from "../../../../src/helpers/createGraph";
import { EnumGraphType } from "../../../../src/types/EnumGraphType";
import { presenterAdjacencyMatrix } from "../../../../src/data-structures/Graph/presenter/presenterAdjacencyMatrix";

describe("Graph Presenter Matrix", () => {
  describe.each([EnumGraphType.Directed, EnumGraphType.Undirected])(
    "%s graph",
    (graphType: EnumGraphType) => {
      describe("in empty graph", () => {
        const graph: IGraph<string> = createGraph(graphType);

        it("should return empty list", () => {
          const matrix = presenterAdjacencyMatrix(graph);

          expect(matrix).toEqual([]);
        });
      });

      if (graphType === EnumGraphType.Undirected) {
        describe("in non-empty graph", () => {
          const graph: IGraph<number> = new UndirectedGraph();
          graph
            .addVertex(1)
            .addVertex(2)
            .addVertex(3)
            .addVertex(4)
            .addEdge(1, 2)
            .addEdge(1, 3)
            .addEdge(3, 4);

          it("should return correct matrix", () => {
            const matrix = presenterAdjacencyMatrix(graph);

            expect(matrix).toEqual([
              [0, 1, 1, 0],
              [1, 0, 0, 0],
              [1, 0, 0, 1],
              [0, 0, 1, 0],
            ]);
          });
        });
      }

      if (graphType === EnumGraphType.Directed) {
        describe("in non-empty graph", () => {
          const graph: IGraph<number> = new DirectedGraph();
          graph
            .addVertex(1)
            .addVertex(2)
            .addVertex(3)
            .addVertex(4)
            .addEdge(1, 2)
            .addEdge(1, 3)
            .addEdge(3, 4);

          it("should return correct matrix", () => {
            const matrix = presenterAdjacencyMatrix(graph);

            expect(matrix).toEqual([
              [0, 1, 1, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 1],
              [0, 0, 0, 0],
            ]);
          });
        });
      }
    }
  );
});
