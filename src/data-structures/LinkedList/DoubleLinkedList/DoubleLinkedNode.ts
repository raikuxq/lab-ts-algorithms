import AbstractLinkedNode from "../AbstractLinkedNode";

export default class DoubleLinkedNode<T> extends AbstractLinkedNode<T> {
  protected _prev: DoubleLinkedNode<T> | null;
  protected _next: DoubleLinkedNode<T> | null;

  public constructor(
    data: T,
    next: DoubleLinkedNode<T> | null = null,
    prev: DoubleLinkedNode<T> | null = null
  ) {
    super(data);
    this._prev = prev;
    this._next = next;
  }

  public set prev(value: DoubleLinkedNode<T> | null) {
    this._prev = value;
  }

  public get prev(): DoubleLinkedNode<T> | null {
    return this._prev;
  }

  public set next(value: DoubleLinkedNode<T> | null) {
    this._next = value;
  }

  public get next(): DoubleLinkedNode<T> | null {
    return this._next;
  }
}
