import BinarySearchNode from "../BSTree/BinarySearchNode";

export default class RandBinarySearchNode<T> extends BinarySearchNode<T> {
  private _rank: number;
  protected _left: RandBinarySearchNode<T> | null;
  protected _right: RandBinarySearchNode<T> | null;
  protected _parent: RandBinarySearchNode<T> | null;

  public constructor(initialData: T) {
    super(initialData);
    this._rank = 0;
    this._left = null;
    this._right = null;
    this._parent = null;
  }

  public get rank(): number {
    return this._rank;
  }

  public set rank(value: number) {
    this._rank = value;
  }

  public get left(): RandBinarySearchNode<T> | null {
    return this._left;
  }

  public set left(value: RandBinarySearchNode<T> | null) {
    this._left = value;
  }

  public get right(): RandBinarySearchNode<T> | null {
    return this._right;
  }

  public set right(value: RandBinarySearchNode<T> | null) {
    this._right = value;
  }

  public get parent(): RandBinarySearchNode<T> | null {
    return this._parent;
  }

  public set parent(value: RandBinarySearchNode<T> | null) {
    this._parent = value;
  }
}
