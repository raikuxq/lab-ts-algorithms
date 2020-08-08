import AbstractNode from "./AbstractNode";

export default class DoubleLinkedNode<T> extends AbstractNode<T> {
  protected _prev: DoubleLinkedNode<T> | null;
  protected _next: DoubleLinkedNode<T> | null;
  protected _data: T | null;

  public constructor(
    data: T | null = null,
    next: DoubleLinkedNode<T> | null = null,
    prev: DoubleLinkedNode<T> | null = null
  ) {
    super();
    this._data = data;
    this._next = next;
    this._prev = prev;
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
