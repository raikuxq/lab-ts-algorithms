export default abstract class AbstractLinkedNode<T> {
  protected _next: AbstractLinkedNode<T> | null;
  protected readonly _data: T;

  /**
   * Will create empty node
   */
  protected constructor(data: T, next: AbstractLinkedNode<T> | null = null) {
    this._data = data;
    this._next = next;
  }

  /**
   * Get data of node
   */
  public get data(): T {
    return this._data;
  }

  /**
   * Get next node link
   */
  public get next(): AbstractLinkedNode<T> | null {
    return this._next;
  }

  /**
   * Set next node link
   */
  public set next(value: AbstractLinkedNode<T> | null) {
    this._next = value;
  }
}
