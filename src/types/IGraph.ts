export default interface IGraph<V> {
  weight(): number;
  vertices(): Array<V>;
  verticesCount(): number;
  edgesCount(): number;

  addVertex(data: V): this;
  removeVertex(data: V): this;
  hasVertex(value: V): boolean;

  addEdge(from: V, to: V, weight?: number): this;
  removeEdge(from: V, to: V): this;
  hasEdge(from: V, to: V): boolean;

  getVertexNeighbors(value: V): Array<V>;
  getEdgeWeightByVertices(from: V, to: V): number;
}
