import IGraph from "../../../types/IGraph";
import { EDGE_EXISTS_STATE, EDGE_NOT_EXISTS_STATE } from "../../../constants";
import { ArrayMatrix } from "../../../types/ArrayMatrix";

/**
 * Get graph adjacency matrix N x N
 *
 * @example
 *
 * Directed graph:
 * - Bob [Maria]
 * - Maria [Bob, John]
 * - John []
 *
 * Its matrix:
 *       |  Bob  | Maria |  John |
 * Bob   |   0   |   1   |   0   |
 * Maria |   1   |   0   |   1   |
 * John  |   0   |   0   |   0   |
 *
 * @example
 *
 * Undirected graph:
 * - Bob [Maria]
 * - Maria [Bob, John]
 * - John [Maria]
 *
 * Its matrix:
 *       |  Bob  | Maria |  John |
 * Bob   |   0   |   1   |   0   |
 * Maria |   1   |   0   |   1   |
 * John  |   0   |   1   |   0   |
 */
export const presenterAdjacencyMatrix = <T>(graph: IGraph<T>): ArrayMatrix => {
  const vertices = graph.vertices();
  const matrix = new Array(graph.verticesCount());

  vertices.forEach((graphVertexRow, rowIndex) => {
    matrix[rowIndex] = new Array(graph.verticesCount());

    vertices.forEach((graphVertexColumn, columnIndex) => {
      const isElementLinked = graph.hasEdge(graphVertexRow, graphVertexColumn);

      matrix[rowIndex][columnIndex] = isElementLinked
        ? EDGE_EXISTS_STATE
        : EDGE_NOT_EXISTS_STATE;
    });
  });

  return matrix;
};
