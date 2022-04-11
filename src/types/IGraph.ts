export default interface IGraph<T> {
  weight(): number;
  vertices(): Array<T>;
  verticesCount(): number;
  edgesCount(): number;

  addVertex(data: T): this;
  removeVertex(data: T): this;
  hasVertex(value: T): boolean;

  addEdge(from: T, to: T, weight?: number): this;
  removeEdge(from: T, to: T): this;
  hasEdge(from: T, to: T): boolean;

  getVertexNeighbors(value: T): Array<T>;
  getEdgeWeightByVertices(from: T, to: T): number;
}
