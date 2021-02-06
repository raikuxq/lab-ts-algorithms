import AbstractGraph from "./AbstractGraph";
import GraphEdge from "./GraphEdge";

export default class UndirectedGraph<V> extends AbstractGraph<V> {
  public constructor() {
    super();
  }

  /**
   * @inheritDoc
   */
  protected getEdgeByValue(from: V, to: V): GraphEdge<V> {
    const edge = this._edges.find(
      (edge: GraphEdge<V>) =>
        (edge.fromVertex === from && edge.toVertex === to) ||
        (edge.fromVertex === to && edge.toVertex === from)
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

      /** When edge is already exist, we can update its weight */
      if (this.hasEdge(fromVertex, toVertex)) {
        if (weight) {
          this.updateEdgeWeight(fromVertex, toVertex, weight);
        }
        return this;
      }

      const edge = new GraphEdge(fromVertex, toVertex, weight);

      this._edges.push(edge);
      this._vertices.get(fromVertex)?.push(toVertex);
      this._vertices.get(toVertex)?.push(fromVertex);
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
      const toVertexNeighbors = this._vertices.get(toVertex) || [];

      const fromNewNeighbors = fromVertexNeighbors.filter(
        (vertex: V) => toVertex !== vertex
      );
      const toNewNeighbors = toVertexNeighbors.filter(
        (vertex: V) => fromVertex !== vertex
      );

      this._vertices.set(fromVertex, fromNewNeighbors);
      this._vertices.set(toVertex, toNewNeighbors);
      this._edges = this._edges.filter(
        (edge: GraphEdge<V>) => edge !== edgeToRemove
      );
    } catch {
      throw new Error("Edge cannot be removed");
    }

    return this;
  }
}
