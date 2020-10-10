export default class DoubleLinkedNode<T> {
  protected _prev: DoubleLinkedNode<T> | null;
  protected _next: DoubleLinkedNode<T> | null;
  protected _data: T;

  public constructor(
    data: T,
    next: DoubleLinkedNode<T> | null = null,
    prev: DoubleLinkedNode<T> | null = null
  ) {
    this._data = data;
    this._next = next;
    this._prev = prev;
  }

  public get data(): T {
    return this._data;
  }

  public get prev(): DoubleLinkedNode<T> | null {
    return this._prev;
  }

  public set prev(value: DoubleLinkedNode<T> | null) {
    this._prev = value;
  }

  public get next(): DoubleLinkedNode<T> | null {
    return this._next;
  }

  public set next(value: DoubleLinkedNode<T> | null) {
    this._next = value;
  }
}
