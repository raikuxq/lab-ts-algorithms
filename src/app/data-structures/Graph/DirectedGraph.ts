import AbstractGraph from "./AbstractGraph";
import GraphEdge from "./GraphEdge";
import IsNotFoundException from "../../exceptions/IsNotFoundException";

/**
 * Directed graph - data structure where edges with same pair of vertices are not equal
 * @example A-B is not the same as B-A
 */
export default class DirectedGraph<T> extends AbstractGraph<T> {
  /**
   * @inheritDoc
   */
  public constructor() {
    super();
  }

  /**
   * @inheritDoc
   * @throws {IsNotFoundException} when vertex was not found
   */
  protected getEdgeByValue(from: T, to: T): GraphEdge<T> {
    const edge = this._edges.find(
      (edge: GraphEdge<T>) => edge.fromVertex === from && edge.toVertex === to
    );

    if (!edge) {
      throw new IsNotFoundException("Edge not found");
    }

    return edge;
  }

  /**
   * @inheritDoc
   * @throws {IsNotFoundException} when vertex was not found
   */
  public addEdge(from: T, to: T, weight?: number): this {
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
      throw new IsNotFoundException(
        "Edge cannot be added because one of vertices was not found"
      );
    }

    return this;
  }

  /**
   * @inheritDoc
   * @throws {IsNotFoundException} when vertex was not found
   */
  public removeEdge(from: T, to: T): this {
    try {
      const fromVertex = this.tryFindVertex(from);
      const toVertex = this.tryFindVertex(to);
      const edgeToRemove = this.getEdgeByValue(fromVertex, toVertex);

      const fromVertexNeighbors = this._vertices.get(fromVertex) || [];
      const fromNewNeighbors = fromVertexNeighbors.filter(
        (vertex: T) => toVertex !== vertex
      );

      this._vertices.set(fromVertex, fromNewNeighbors);
      this._edges = this._edges.filter(
        (edge: GraphEdge<T>) => edge !== edgeToRemove
      );
    } catch {
      throw new IsNotFoundException(
        "Edge cannot be removed because one of vertices was not found"
      );
    }

    return this;
  }
}
