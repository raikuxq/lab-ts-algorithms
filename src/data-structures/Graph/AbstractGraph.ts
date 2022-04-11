import GraphEdge from "./GraphEdge";

export default abstract class AbstractGraph<T> {
  protected _vertices: Map<T, Array<T>>;
  protected _edges: Array<GraphEdge<T>>;

  /**
   * Created empty instance
   * @protected
   */
  protected constructor() {
    this._vertices = new Map<T, Array<T>>();
    this._edges = new Array<GraphEdge<T>>();
  }

  /**
   * Find edge by its from and to vertices
   * @param from
   * @param to
   * @protected
   */
  protected abstract getEdgeByValue(from: T, to: T): GraphEdge<T>;

  /**
   * Get vertices list in array format
   * @protected
   * @returns array of graph elements
   */
  protected getVerticesArrayFormat(): Array<T> {
    return Array.from(this._vertices.keys());
  }

  /**
   * Find vertex in vertices list by its value
   * @param value
   * @protected
   * @throws when vertex was not found
   * @returns vertex data
   */
  protected tryFindVertex(value: T): T {
    const vertex = this.getVerticesArrayFormat().find(
      (vertex: T) => vertex === value
    );

    if (!vertex) throw new Error("Vertex not found");

    return vertex;
  }

  /**
   * Update edge weight
   * @param from
   * @param to
   * @param weight
   * @protected
   */
  protected updateEdgeWeight(from: T, to: T, weight: number): void {
    const edge = this.getEdgeByValue(from, to);

    edge.weight = weight;
  }

  /**
   * Will remove all vertex relations with others vertices
   * @param vertexToRemove
   */
  protected cascadeRemoveVertexRelations(vertexToRemove: T): void {
    this.getVerticesArrayFormat().forEach((neighbor: T) => {
      const neighborVertexNeighbors = this._vertices.get(neighbor);

      if (neighborVertexNeighbors) {
        const neighborVertexFilteredNeighbors = neighborVertexNeighbors.filter(
          (newNeighbor: T) => newNeighbor !== vertexToRemove
        );

        this._vertices.set(neighbor, neighborVertexFilteredNeighbors);
      }
    });
  }

  /**
   * Will remove all vertices edges with vertex to remove
   * @param vertexToRemove
   */
  protected cascadeRemoveVertexEdges(vertexToRemove: T): void {
    this._edges = this._edges.filter((edge: GraphEdge<T>) => {
      const shouldBeDeleted =
        edge.toVertex === vertexToRemove || edge.fromVertex === vertexToRemove;

      return !shouldBeDeleted;
    });
  }

  /**
   * @returns graph weight
   */
  public weight(): number {
    return this._edges.reduce(
      (acc: number, edge: GraphEdge<T>) => acc + edge.weight,
      0
    );
  }

  /**
   * @returns array of vertices
   */
  public vertices(): Array<T> {
    return this.getVerticesArrayFormat().map((vertex: T) => vertex);
  }

  /**
   * @returns vertices count
   */
  public verticesCount(): number {
    return this.vertices().length;
  }

  /**
   * @returns edges count
   */
  public edgesCount(): number {
    return this._edges.length;
  }

  /**
   * Add vertex
   * @param data
   * @throws when vertex is already exists
   * @returns graph instance
   */
  public addVertex(data: T): this {
    if (this.hasVertex(data)) {
      throw new Error("Vertex is already exist");
    }

    this._vertices.set(data, new Array<T>());

    return this;
  }

  /**
   * Remove vertex
   * @param data
   * @throws when vertex is already does not exist
   * @returns graph instance
   */
  public removeVertex(data: T): this {
    try {
      const vertexToRemove = this.tryFindVertex(data);

      this.cascadeRemoveVertexEdges(vertexToRemove);
      this.cascadeRemoveVertexRelations(vertexToRemove);
      this._vertices.delete(vertexToRemove);
    } catch (e) {
      throw new Error("Vertex does not exist already");
    }

    return this;
  }

  /**
   * Add edge between two vertices
   * @param from
   * @param to
   * @param weight
   * @returns graph instance
   */
  public abstract addEdge(from: T, to: T, weight?: number): this;

  /**
   * Remove edge between two vertices
   * @param from
   * @param to
   * @returns graph instance
   */
  public abstract removeEdge(from: T, to: T): this;

  /**
   * Get vertex neighbors by its value
   * @param value - vertex value
   * @returns array of neighbors elements
   */
  public getVertexNeighbors(value: T): Array<T> {
    try {
      const vertex = this.tryFindVertex(value);

      return this._vertices.get(vertex)?.map((vertex: T) => vertex) || [];
    } catch (e) {
      throw new Error("No such vertex");
    }
  }

  /**
   * Graph has vertex by its value
   * @param value - vertex value
   * @returns boolean
   */
  public hasVertex(value: T): boolean {
    return this.vertices().includes(value);
  }

  /**
   * Graph has edge between two vertices
   * @param from
   * @param to
   * @returns boolean
   */
  public hasEdge(from: T, to: T): boolean {
    return Boolean(
      this._edges.find((edge) => {
        return edge.fromVertex === from && edge.toVertex === to;
      })
    );
  }

  /**
   * Get edge weight between two vertices
   * @param from
   * @param to
   * @returns number
   */
  public getEdgeWeightByVertices(from: T, to: T): number {
    const fromVertex = this.tryFindVertex(from);
    const toVertex = this.tryFindVertex(to);

    const edge = this.getEdgeByValue(fromVertex, toVertex);

    return edge.weight;
  }
}
