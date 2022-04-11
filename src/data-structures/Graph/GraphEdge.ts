/**
 * Graph edge between two vertices
 */
export default class GraphEdge<T> {
  private readonly _fromVertex: T;
  private readonly _toVertex: T;
  private _weight: number;

  /**
   * Create instance with linked "from" and "to" vertices
   * @param fromVertex - start vertex
   * @param toVertex - end vertex
   * @param weight - edge weight is 0 by default
   */
  public constructor(fromVertex: T, toVertex: T, weight = 0) {
    this._fromVertex = fromVertex;
    this._toVertex = toVertex;
    this._weight = weight;
  }

  /**
   * @returns vertex data
   */
  get fromVertex(): T {
    return this._fromVertex;
  }

  /**
   * @returns vertex data
   */
  get toVertex(): T {
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
