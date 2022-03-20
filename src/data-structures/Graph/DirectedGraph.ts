import AbstractGraph from "./AbstractGraph";
import GraphEdge from "./GraphEdge";

/**
 * Directed graph - data structure where edges with same pair of vertices are not equal
 * @example A-B is not the same as B-A
 */
export default class DirectedGraph<V> extends AbstractGraph<V> {
  /**
   * @inheritDoc
   */
  public constructor() {
    super();
  }

  /**
   * @inheritDoc
   */
  protected getEdgeByValue(from: V, to: V): GraphEdge<V> {
    const edge = this._edges.find(
      (edge: GraphEdge<V>) => edge.fromVertex === from && edge.toVertex === to
    );

    if (!edge) {
      throw new Error("Edge not found");
    }

    return edge;
  }

  /**
   * @inheritDoc
   */
  public addEdge(from: V, to: V, weight?: number): this {
    try {
      const fromVertex = this.tryFindVertex(from);
      const toVertex = this.tryFindVertex(to);

      if (this.hasEdge(fromVertex, toVertex)) {
        if (typeof weight === "number") {
          this.updateEdgeWeight(fromVertex, toVertex, weight);
        }
      } else {
        const edge = new GraphEdge(fromVertex, toVertex, weight);

        this._edges.push(edge);
        this._vertices.get(fromVertex)?.push(toVertex);
      }
    } catch {
      throw new Error(
        "Edge cannot be added because one of vertices was not found"
      );
    }

    return this;
  }

  /**
   * @inheritDoc
   */
  public removeEdge(from: V, to: V): this {
    try {
      const fromVertex = this.tryFindVertex(from);
      const toVertex = this.tryFindVertex(to);
      const edgeToRemove = this.getEdgeByValue(fromVertex, toVertex);

      const fromVertexNeighbors = this._vertices.get(fromVertex) || [];
      const fromNewNeighbors = fromVertexNeighbors.filter(
        (vertex: V) => toVertex !== vertex
      );

      this._vertices.set(fromVertex, fromNewNeighbors);
      this._edges = this._edges.filter(
        (edge: GraphEdge<V>) => edge !== edgeToRemove
      );
    } catch {
      throw new Error(
        "Edge cannot be removed because one of vertices was not found"
      );
    }

    return this;
  }
}
