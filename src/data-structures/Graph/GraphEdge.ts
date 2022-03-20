/**
 * Graph edge between two vertices
 */
export default class GraphEdge<V> {
  private readonly _fromVertex: V;
  private readonly _toVertex: V;
  private _weight: number;

  /**
   * Create instance with linked "from" and "to" vertices
   * @param fromVertex - start vertex
   * @param toVertex - end vertex
   * @param weight - edge weight is 0 by default
   */
  public constructor(fromVertex: V, toVertex: V, weight = 0) {
    this._fromVertex = fromVertex;
    this._toVertex = toVertex;
    this._weight = weight;
  }

  /**
   * @returns vertex data
   */
  get fromVertex(): V {
    return this._fromVertex;
  }

  /**
   * @returns vertex data
   */
  get toVertex(): V {
    return this._toVertex;
  }

  /**
   * @returns edge weight
   */
  get weight(): number {
    return this._weight;
  }

  /**
   * @param value - edge weight
   */
  set weight(value: number) {
    this._weight = value;
  }
}
