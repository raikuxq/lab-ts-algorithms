export default abstract class AbstractBinaryNode<T> {
  protected _data: T;
  protected _left: AbstractBinaryNode<T> | null;
  protected _right: AbstractBinaryNode<T> | null;
  protected _parent: AbstractBinaryNode<T> | null;

  protected constructor(initialData: T) {
    this._data = initialData;
    this._left = null;
    this._right = null;
    this._parent = null;
  }

  public get data(): T {
    return this._data;
  }

  public set data(value: T) {
    this._data = value;
  }

  public get left(): AbstractBinaryNode<T> | null {
    return this._left;
  }

  public set left(value: AbstractBinaryNode<T> | null) {
    this._left = value;
  }

  public get right(): AbstractBinaryNode<T> | null {
    return this._right;
  }

  public set right(value: AbstractBinaryNode<T> | null) {
    this._right = value;
  }

  public get parent(): AbstractBinaryNode<T> | null {
    return this._parent;
  }

  public set parent(value: AbstractBinaryNode<T> | null) {
    this._parent = value;
  }
}
