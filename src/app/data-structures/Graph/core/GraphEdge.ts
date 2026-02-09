/**
 * Graph edge between two vertices
 */
export default class GraphEdge<T> {
  private readonly _fromVertex: T;
  private readonly _toVertex: T;
  private _weight: number;

  /**
   * Create instance with linked "from" and "to" vertices
   */
  public constructor(fromVertex: T, toVertex: T, weight = 0) {
    this._fromVertex = fromVertex;
    this._toVertex = toVertex;
    this._weight = weight;
  }

  get fromVertex(): T {
    return this._fromVertex;
  }

  get toVertex(): T {
    return this._toVertex;
  }

  get weight(): number {
    return this._weight;
  }

  set weight(value: number) {
    this._weight = value;
  }
}
