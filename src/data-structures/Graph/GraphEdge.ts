import GraphVertex from "./GraphVertex";

export default class GraphEdge<V> {
  private readonly _fromVertex: GraphVertex<V>;
  private readonly _toVertex: GraphVertex<V>;
  private readonly _weight: number;

  public constructor(
    fromVertex: GraphVertex<V>,
    toVertex: GraphVertex<V>,
    weight = 0
  ) {
    this._fromVertex = fromVertex;
    this._toVertex = toVertex;
    this._weight = weight;
  }

  get fromVertex(): GraphVertex<V> {
    return this._fromVertex;
  }

  get toVertex(): GraphVertex<V> {
    return this._toVertex;
  }

  get weight(): number {
    return this._weight;
  }
}
