export default class SingleLinkedNode<T> {
  protected _data: T;
  protected _next: SingleLinkedNode<T> | null;

  public constructor(
    data: T,
    next: SingleLinkedNode<T> | null = null
  ) {
    this._data = data;
    this._next = next;
  }

  public get data(): T {
    return this._data;
  }

  public set data(value: T) {
    this._data = value;
  }

  public get next(): SingleLinkedNode<T> | null {
    return this._next;
  }

  public set next(value: SingleLinkedNode<T> | null) {
    this._next = value;
  }
}
