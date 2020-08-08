import AbstractNode from "./AbstractNode";

export default class SingleLinkedNode<T> extends AbstractNode<T> {
  protected _next: SingleLinkedNode<T> | null;
  protected _data: T | null;

  public constructor(
    data: T | null = null,
    next: SingleLinkedNode<T> | null = null
  ) {
    super();
    this._data = data;
    this._next = next;
  }

  public get next(): SingleLinkedNode<T> | null {
    return this._next;
  }

  public set next(value: SingleLinkedNode<T> | null) {
    this._next = value;
  }
}
