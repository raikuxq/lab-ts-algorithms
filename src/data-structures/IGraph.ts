export default interface IGraph<V> {

  addVertex(data: V): this;
  removeVertex(data: V): this;

  addEdge(from: V, to: V, weight?: number): this;
  removeEdge(from: V, to: V): this;

  vertices: Array<V>;
  weight: number;
  verticesCount: number;
  edgesCount: number;
}
