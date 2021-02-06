import IGraph from "../IGraph";

export default class GraphPresenter<V> {
  private graph: IGraph<V>;

  public constructor(graph: IGraph<V>) {
    this.graph = graph;
  }

  /**
   * Get graph adjacency list
   */
  public getAdjacencyList(): Map<V, Array<V>> {
    const keys = this.graph.vertices;
    const map = new Map<V, Array<V>>();

    keys.forEach((key) => {
      const vertex = key;
      const neighbors = this.graph.getVertexNeighbors(vertex);

      map.set(vertex, neighbors);
    });

    return map;
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
    const vertices = this.graph.vertices;
    const matrix = new Array(this.graph.verticesCount);

    vertices.forEach((graphVertexRow, rowIndex) => {
      matrix[rowIndex] = new Array(this.graph.verticesCount);

      vertices.forEach((graphVertexColumn, columnIndex) => {
        const isElementLinked = this.graph
          .getVertexNeighbors(graphVertexRow)
          .includes(graphVertexColumn);

        matrix[rowIndex][columnIndex] = isElementLinked ? 1 : 0;
      });
    });

    return matrix;
  }
}
