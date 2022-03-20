import AbstractLinkedNode from "../AbstractLinkedNode";

export default class DoubleLinkedNode<T> extends AbstractLinkedNode<T> {
  protected _prev: DoubleLinkedNode<T> | null;
  protected _next: DoubleLinkedNode<T> | null;

  /**
   * Will create empty node
   * @param data - element data
   * @param next - link to next node (null by default)
   * @param prev - link to previous node (null by default)
   */
  public constructor(
    data: T,
    next: DoubleLinkedNode<T> | null = null,
    prev: DoubleLinkedNode<T> | null = null
  ) {
    super(data);
    this._prev = prev;
    this._next = next;
  }

  /**
   * @param value - link to prev node element or null
   */
  public set prev(value: DoubleLinkedNode<T> | null) {
    this._prev = value;
  }

  /**
   * @returns link to prev node element or null
   */
  public get prev(): DoubleLinkedNode<T> | null {
    return this._prev;
  }

  /**
   * @inheritDoc
   */
  public set next(value: DoubleLinkedNode<T> | null) {
    this._next = value;
  }

  /**
   * @inheritDoc
   */
  public get next(): DoubleLinkedNode<T> | null {
    return this._next;
  }
}
