export default interface IGraph<V> {

  vertices: Array<V>;
  weight: number;
  verticesCount: number;
  edgesCount: number;

  addVertex(data: V): this;
  removeVertex(data: V): this;

  addEdge(from: V, to: V, weight?: number): this;
  removeEdge(from: V, to: V): this;

  getVertexNeighbors(value: V): Array<V>;
  hasVertex(value: V): boolean;

  getAdjacencyMatrix(): Array<Array<number>>;
  getAdjacencyList(): Map<V, Array<V>>;
}
