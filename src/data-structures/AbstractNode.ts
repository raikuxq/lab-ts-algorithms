export default abstract class AbstractNode<T> {
  protected abstract _data: T | null;
  protected abstract _next: AbstractNode<T> | null;

  public get data(): T | null {
    return this._data;
  }

  public set data(value: T | null) {
    this._data = value;
  }

  get next(): AbstractNode<T> | null {
    return this._next;
  }

  set next(next: AbstractNode<T> | null) {
    this._next = next;
  }
}
