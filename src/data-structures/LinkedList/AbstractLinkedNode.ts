export default abstract class AbstractLinkedNode<T> {
  protected _next: AbstractLinkedNode<T> | null;
  protected readonly _data: T;

  protected constructor(data: T, next: AbstractLinkedNode<T> | null = null) {
    this._data = data;
    this._next = next;
  }

  public get data(): T {
    return this._data;
  }

  public get next(): AbstractLinkedNode<T> | null {
    return this._next;
  }

  public set next(value: AbstractLinkedNode<T> | null) {
    this._next = value;
  }
}
