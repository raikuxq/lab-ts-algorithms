import AbstractGraph from "./AbstractGraph";
import GraphEdge from "./GraphEdge";
import GraphVertex from "./GraphVertex";

export default class DirectedGraph<V> extends AbstractGraph<V> {
  public constructor() {
    super();
  }

  /**
   * @inheritDoc
   */
  protected getEdgeByValue(
    from: GraphVertex<V>,
    to: GraphVertex<V>
  ): GraphEdge<V> {
    const edge = this._edges.find(
      (edge: GraphEdge<V>) => edge.fromVertex === from && edge.toVertex === to
    );

    if (!edge) throw new Error("Edge not found");

    return edge;
  }

  /**
   * @inheritDoc
   */
  public addEdge(from: V, to: V, weight?: number): this {
    try {
      const fromVertex = this.getVertexByValue(from);
      const toVertex = this.getVertexByValue(to);

      if (this.hasEdge(fromVertex.data, toVertex.data)) {
        if (typeof weight === "number") {
          this.updateEdgeWeight(fromVertex, toVertex, weight);
        }
        return this;
      }

      const edge = new GraphEdge(fromVertex, toVertex, weight);

      this._edges.push(edge);
      this._vertices.get(fromVertex)?.push(toVertex);
    } catch {
      throw new Error("Edge cannot be added");
    }

    return this;
  }

  /**
   * @inheritDoc
   */
  public removeEdge(from: V, to: V): this {
    try {
      const fromVertex = this.getVertexByValue(from);
      const toVertex = this.getVertexByValue(to);
      const edgeToRemove = this.getEdgeByValue(fromVertex, toVertex);

      const fromVertexNeighbors = this._vertices.get(fromVertex) || [];
      const fromNewNeighbors = fromVertexNeighbors.filter(
        (vertex: GraphVertex<V>) => toVertex !== vertex
      );

      this._vertices.set(fromVertex, fromNewNeighbors);
      this._edges = this._edges.filter(
        (edge: GraphEdge<V>) => edge !== edgeToRemove
      );
    } catch {
      throw new Error("Edge cannot be removed");
    }

    return this;
  }
}
