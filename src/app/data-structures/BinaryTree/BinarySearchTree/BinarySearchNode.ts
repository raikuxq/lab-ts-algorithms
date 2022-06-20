import AbstractBinaryNode from "../AbstractBinaryTree/AbstractBinaryNode";

export default class BinarySearchNode<T> extends AbstractBinaryNode<T> {
  protected _left: BinarySearchNode<T> | null;
  protected _right: BinarySearchNode<T> | null;
  protected _parent: BinarySearchNode<T> | null;

  public constructor(initialData: T) {
    super(initialData);
    this._left = null;
    this._right = null;
    this._parent = null;
  }

  public get left(): BinarySearchNode<T> | null {
    return this._left;
  }

  public set left(value: BinarySearchNode<T> | null) {
    this._left = value;
  }

  public get right(): BinarySearchNode<T> | null {
    return this._right;
  }

  public set right(value: BinarySearchNode<T> | null) {
    this._right = value;
  }

  public get parent(): BinarySearchNode<T> | null {
    return this._parent;
  }

  public set parent(value: BinarySearchNode<T> | null) {
    this._parent = value;
  }
}
