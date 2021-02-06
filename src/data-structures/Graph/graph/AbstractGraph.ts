import GraphEdge from "./GraphEdge";

export default abstract class AbstractGraph<V> {
  protected _vertices: Map<V, Array<V>>;
  protected _edges: Array<GraphEdge<V>>;

  protected constructor() {
    this._vertices = new Map<V, Array<V>>();
    this._edges = new Array<GraphEdge<V>>();
  }

  /**
   * Find edge by its from and to vertices
   * @param from
   * @param to
   * @private
   */
  protected abstract getEdgeByValue(from: V, to: V): GraphEdge<V>;

  /**
   * Get vertices list in array format
   * @private
   */
  protected getVerticesArrayFormat(): Array<V> {
    return Array.from(this._vertices.keys());
  }

  /**
   * Find vertex in vertices list by its value
   * @param value
   * @private
   */
  protected getVertexByValue(value: V): V {
    const vertex = this.getVerticesArrayFormat().find(
      (vertex: V) => vertex === value
    );

    if (!vertex) throw new Error("Vertex not found");

    return vertex;
  }

  /**
   * Update edge weight
   * @param from
   * @param to
   * @param weight
   * @private
   */
  protected updateEdgeWeight(from: V, to: V, weight: number): void {
    const edge = this.getEdgeByValue(from, to);

    edge.weight = weight;
  }

  /**
   * Will remove all vertex relations with others vertices
   */
  protected cascadeRemoveVertexRelations(vertexToRemove: V): void {
    this.getVerticesArrayFormat().forEach((neighbor: V) => {
      const neighborVertexNeighbors = this._vertices.get(neighbor);

      if (neighborVertexNeighbors) {
        const neighborVertexFilteredNeighbors = neighborVertexNeighbors.filter(
          (newNeighbor: V) => newNeighbor !== vertexToRemove
        );

        this._vertices.set(neighbor, neighborVertexFilteredNeighbors);
      }
    });
  }

  /**
   * Will remove all vertices edges with vertex to remove
   */
  protected cascadeRemoveVertexEdges(vertexToRemove: V): void {
    this._edges.forEach((edge: GraphEdge<V>, index: number) => {
      if (
        edge.toVertex === vertexToRemove ||
        edge.fromVertex === vertexToRemove
      ) {
        this._edges.splice(index, 1);
      }
    });
  }

  /**
   *
   * @returns graph weight
   */
  public get weight(): number {
    return this._edges.reduce(
      (acc: number, edge: GraphEdge<V>) => acc + edge.weight,
      0
    );
  }

  /**
   * @returns array of vertices
   */
  public get vertices(): Array<V> {
    return this.getVerticesArrayFormat().map((vertex: V) => vertex);
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
    if (this.hasVertex(data)) {
      throw new Error("Vertex is already exist");
    }

    this._vertices.set(data, new Array<V>());

    return this;
  }

  /**
   * Remove vertex
   * @param data
   */
  public removeVertex(data: V): this {
    try {
      const vertexToRemove = this.getVertexByValue(data);

      this.cascadeRemoveVertexRelations(vertexToRemove);
      this.cascadeRemoveVertexEdges(vertexToRemove);
      this._vertices.delete(vertexToRemove);
    } catch (e) {
      throw new Error("Vertex does not exist already");
    }

    return this;
  }

  /**
   * Add edge between two vertices
   */
  public abstract addEdge(from: V, to: V, weight?: number): this;

  /**
   * Remove edge between two vertices
   */
  public abstract removeEdge(from: V, to: V): this;

  /**
   * Get vertex neighbors by vertex value
   */
  public getVertexNeighbors(value: V): Array<V> {
    try {
      const vertex = this.getVertexByValue(value);

      return this._vertices.get(vertex)?.map((vertex: V) => vertex) || [];
    } catch (e) {
      throw new Error("No such vertex");
    }
  }

  /**
   * Graph has vertex by its value
   */
  public hasVertex(value: V): boolean {
    return this.vertices.includes(value);
  }

  /**
   * Graph has edge between two vertices
   */
  public hasEdge(from: V, to: V): boolean {
    return Boolean(
      this._edges.find((edge) => {
        return edge.fromVertex === from && edge.toVertex === to;
      })
    );
  }

  /**
   * Get edge weight between two vertices
   */
  public getEdgeWeightByVertices(from: V, to: V): number {
    const fromVertex = this.getVertexByValue(from);
    const toVertex = this.getVertexByValue(to);

    const edge = this.getEdgeByValue(fromVertex, toVertex);

    return edge.weight;
  }
}
