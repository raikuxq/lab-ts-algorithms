export default class GraphEdge<V> {
  private readonly _fromVertex: V;
  private readonly _toVertex: V;
  private _weight: number;

  public constructor(fromVertex: V, toVertex: V, weight = 0) {
    this._fromVertex = fromVertex;
    this._toVertex = toVertex;
    this._weight = weight;
  }

  get fromVertex(): V {
    return this._fromVertex;
  }

  get toVertex(): V {
    return this._toVertex;
  }

  get weight(): number {
    return this._weight;
  }

  set weight(value: number) {
    this._weight = value;
  }
}
