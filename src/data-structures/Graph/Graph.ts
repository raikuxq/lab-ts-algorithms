import IGraph from "../IGraph";
import GraphVertex from "./GraphVertex";
import GraphEdge from "./GraphEdge";

export default class Graph<V> implements IGraph<V> {

  protected readonly _isDirected: boolean;
  protected _vertices: Map<GraphVertex<V>, Array<GraphVertex<V>>>;
  protected _edges: Array<GraphEdge<V>>;

  public constructor(isDirected: boolean = false) {
    this._vertices = new Map<GraphVertex<V>, Array<GraphVertex<V>>>();
    this._edges = new Array<GraphEdge<V>>();
    this._isDirected = isDirected;
  }


  /**
   * Get vertices list in array format
   * @private
   */
  private getVerticesArrayFormat(): Array<GraphVertex<V>> {
    return Array.from(this._vertices.keys());
  }


  /**
   * Find vertex in vertices list by its value
   * @param value
   * @private
   */
  private getVertexByValue(value: V): GraphVertex<V> {
    const vertex = this
      .getVerticesArrayFormat()
      .find((vertex: GraphVertex<V>) => vertex.data === value);

    if (!vertex) throw new Error('Vertex not found');

    return vertex;
  }


  /**
   * Find edge by its from and to vertices
   * @param from
   * @param to
   * @private
   */
  private getEdgeByValue(from: GraphVertex<V>, to: GraphVertex<V>): GraphEdge<V> {
    const edge = this._edges.find((edge: GraphEdge<V>) =>
      (edge.fromVertex === from && edge.toVertex === to)
      ||
      (edge.fromVertex === to && edge.toVertex === from));

    if (!edge) throw new Error('Edge not found');

    return edge;
  }


  /**
   *
   * @returns graph weight
   */
  public get weight(): number {
    return this._edges.reduce((acc: number, edge: GraphEdge<V>) => acc + edge.weight, 0);
  }


  /**
   * @returns array of vertices
   */
  public get vertices(): Array<V> {
    return this.getVerticesArrayFormat().map((vertex: GraphVertex<V>) => vertex.data);
  }


  /**
   * @returns vertices count
   */
  public get verticesCount(): number {
    return this.vertices.length;
  }


  /**
   * @returns edges count
   */
  public get edgesCount(): number {
    return this._edges.length;
  }


  /**
   * Add vertex
   * @param data
   */
  public addVertex(data: V): this {

    const vertex = new GraphVertex<V>(data);
    const siblings = new Array<GraphVertex<V>>();

    this._vertices.set(vertex, siblings);

    return this;
  }


  /**
   * Remove vertex
   * @param data
   */
  public removeVertex(data: V): this {

    try {
      const vertex = this.getVertexByValue(data);

      this._vertices.delete(vertex);
    } catch (e) {
      throw new Error('Vertex does not exist already');
    }

    return this;

  }


  /**
   * Add edge between two vertices
   * @param from
   * @param to
   * @param weight
   */
  public addEdge(from: V, to: V, weight?: number): this {

    try {
      const fromVertex = this.getVertexByValue(from);
      const toVertex = this.getVertexByValue(to);
      const edge = new GraphEdge(fromVertex, toVertex, weight);

      this._edges.push(edge);
      this._vertices.get(fromVertex)?.push(toVertex);

      /**
       * If graph is directed, there's no links in the opposite direction
       */
      if (!this._isDirected) {
        this._vertices.get(toVertex)?.push(fromVertex);
      }

    } catch {
      throw new Error('Edge cannot be added');
    }

    return this;
  }


  public removeEdge(from: V, to: V): this {

    try {
      const fromVertex = this.getVertexByValue(from);
      const toVertex = this.getVertexByValue(to);

      const fromVertexNeighbors = this._vertices.get(fromVertex) || [];
      const fromNewNeighbors = fromVertexNeighbors.filter((vertex: GraphVertex<V>) => toVertex !== vertex);
      this._vertices.set(fromVertex, fromNewNeighbors);

      /**
       * If graph is directed, there's no links in the opposite direction
       */
      if (!this._isDirected) {
        const toVertexNeighbors = this._vertices.get(toVertex) || [];
        const toNewNeighbors = toVertexNeighbors.filter((vertex: GraphVertex<V>) => fromVertex !== vertex);
        this._vertices.set(toVertex, toNewNeighbors);
      }

      /**
       * Remove from edge list
       */
      const edgeToRemove = this.getEdgeByValue(fromVertex, toVertex);
      this._edges = this._edges.filter((edge: GraphEdge<V>) => edge !== edgeToRemove);

    } catch {
      throw new Error('Edge cannot be removed');
    }

    return this;
  }


  /**
   * Get vertex neighbors by vertex value
   * @param value
   */
  public getVertexNeighbors(value: V): Array<V> {
    try {
      const vertex = this.getVertexByValue(value);

      return this._vertices.get(vertex)?.map((vertex: GraphVertex<V>) => vertex.data) || []

    } catch (e) {
      return [];
    }
  }


  /**
   * Graph has vertex by its value
   * @param value
   */
  public hasVertex(value: V): boolean {
    return this.vertices.includes(value);
  }


  /**
   * Get edge weight between two vertices
   * @param from
   * @param to
   */
  public getEdgeWeightByVertices(from: V, to: V) {
    const fromVertex = this.getVertexByValue(from);
    const toVertex = this.getVertexByValue(to);

    const edge = this.getEdgeByValue(fromVertex, toVertex);

    return edge.weight;
  }


  /**
   * Get graph adjacency list
   */
  public getAdjacencyList(): Map<V, Array<V>> {
    const keys = this.getVerticesArrayFormat();
    const map = new Map<V, Array<V>>();

    keys.forEach((key) => {

      const vertex = key.data;
      const neighbors = this.getVertexNeighbors(vertex);

      map.set(vertex, neighbors);
    });

    return map;
  }


  /**
   * Get graph adjacency list
   */
  public getAdjacencyMatrix(): Array<Array<number>> {

    const vertices = this.getVerticesArrayFormat();
    const matrix = new Array(this.verticesCount);

    /**
     * Matrix creating
     */
    vertices.forEach((graphVertexRow, i) => {
      matrix[i] = new Array(this.verticesCount);
    });


    /**
     * Matrix filling
     */
    vertices.forEach((graphVertexRow, i) => {
      vertices.forEach((graphVertexColumn, j) => {

        const rowElement = graphVertexRow.data;
        const columnElement = graphVertexColumn.data;

        const rowElementNeighbors = this.getVertexNeighbors(rowElement);
        const columnElementNeighbors = this.getVertexNeighbors(columnElement);

        matrix[i][j] = 0;
        matrix[j][i] = 0;

        const isRowLinkedToColumn = rowElementNeighbors.includes(columnElement);
        const isColumnLinkedToRow = columnElementNeighbors.includes(rowElement);

        if (isRowLinkedToColumn) {
          matrix[i][j] = 1;
        }

        if (isColumnLinkedToRow) {
          matrix[j][i] = 1;
        }

      });
    });

    return matrix;
  }
}
