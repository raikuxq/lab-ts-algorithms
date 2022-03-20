export default abstract class AbstractLinkedNode<T> {
  protected _next: AbstractLinkedNode<T> | null;
  protected readonly _data: T;

  /**
   * Will create empty node
   * @param data - element data
   * @param next - link to next node (null by default)
   * @protected
   */
  protected constructor(data: T, next: AbstractLinkedNode<T> | null = null) {
    this._data = data;
    this._next = next;
  }

  /**
   * @returns data of node element
   */
  public get data(): T {
    return this._data;
  }

  /**
   * @returns link to next node element or null
   */
  public get next(): AbstractLinkedNode<T> | null {
    return this._next;
  }

  /**
   * @param value - link to next node element or null
   */
  public set next(value: AbstractLinkedNode<T> | null) {
    this._next = value;
  }
}
