import IGraph from "../../../types/IGraph";
import { EDGE_EXISTS_STATE, EDGE_NOT_EXISTS_STATE } from "../../../constants";

/**
 * It can represent graph in different ways
 * @example Adjacency matrix
 * @example Adjacency list
 */
export default class GraphPresenter<T> {
  private graph: IGraph<T>;

  /**
   * Create empty instance of presenter
   * @param graph - graph instance
   */
  public constructor(graph: IGraph<T>) {
    this.graph = graph;
  }

  /**
   * Get graph adjacency list
   * @example
   *
   * Directed graph:
   * - Bob [Maria]
   * - Maria [Bob, John]
   * - John []
   **/
  public getAdjacencyList(): Map<T, Array<T>> {
    return this.graph.vertices().reduce((map: Map<T, Array<T>>, vertex: T) => {
      const neighbors = this.graph.getVertexNeighbors(vertex);
      map.set(vertex, neighbors);

      return map;
    }, new Map());
  }

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
   */
  public getAdjacencyMatrix(): number[][] {
    const vertices = this.graph.vertices();
    const matrix = new Array(this.graph.verticesCount());

    vertices.forEach((graphVertexRow, rowIndex) => {
      matrix[rowIndex] = new Array(this.graph.verticesCount());

      vertices.forEach((graphVertexColumn, columnIndex) => {
        const isElementLinked = this.graph
          .getVertexNeighbors(graphVertexRow)
          .includes(graphVertexColumn);

        matrix[rowIndex][columnIndex] = isElementLinked
          ? EDGE_EXISTS_STATE
          : EDGE_NOT_EXISTS_STATE;
      });
    });

    return matrix;
  }
}
