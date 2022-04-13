import GraphEdge from "./GraphEdge";

export default abstract class AbstractGraph<T> {
  protected _vertices: Map<T, Array<T>>;
  protected _edges: Array<GraphEdge<T>>;

  /**
   * Created empty instance
   */
  protected constructor() {
    this._vertices = new Map<T, Array<T>>();
    this._edges = new Array<GraphEdge<T>>();
  }

  /**
   * Find edge by its from and to vertices
   */
  protected abstract getEdgeByValue(from: T, to: T): GraphEdge<T>;

  /**
   * Get vertices list in array format
   */
  protected getVerticesArrayFormat(): Array<T> {
    return Array.from(this._vertices.keys());
  }

  /**
   * Find vertex in vertices list by its value
   * @throws when vertex was not found
   */
  protected tryFindVertex(value: T): T {
    const isExists = this._vertices.has(value);

    if (!isExists) {
      throw new Error("Vertex not found");
    }

    return value;
  }

  /**
   * Update edge weight between from and to vertices
   */
  protected updateEdgeWeight(from: T, to: T, weight: number): void {
    const edge = this.getEdgeByValue(from, to);

    edge.weight = weight;
  }

  /**
   * Will remove all vertex relations with others vertices
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
   */
  protected cascadeRemoveVertexEdges(vertexToRemove: T): void {
    this._edges = this._edges.filter((edge: GraphEdge<T>) => {
      const shouldBeDeleted =
        edge.toVertex === vertexToRemove || edge.fromVertex === vertexToRemove;

      return !shouldBeDeleted;
    });
  }

  /**
   * @returns sum of all graph edges
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
   * @throws when vertex is already exists
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
   * @throws when vertex is already does not exist
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
   */
  public abstract addEdge(from: T, to: T, weight?: number): this;

  /**
   * Remove edge between two vertices
   */
  public abstract removeEdge(from: T, to: T): this;

  /**
   * Get vertex neighbors by its value
   */
  public getVertexNeighbors(value: T): Array<T> {
    const vertex = this.tryFindVertex(value);
    return this._vertices.get(vertex) || [];
  }

  /**
   * Check if graph has vertex
   */
  public hasVertex(value: T): boolean {
    return this._vertices.has(value);
  }

  /**
   * Check if graph has edge between from and to vertices
   */
  public hasEdge(from: T, to: T): boolean {
    return Boolean(
      this._edges.find((edge) => {
        return edge.fromVertex === from && edge.toVertex === to;
      })
    );
  }

  /**
   * Get edge weight between from and to vertices
   */
  public getEdgeWeightByVertices(from: T, to: T): number {
    const fromVertex = this.tryFindVertex(from);
    const toVertex = this.tryFindVertex(to);

    const edge = this.getEdgeByValue(fromVertex, toVertex);

    return edge.weight;
  }
}
