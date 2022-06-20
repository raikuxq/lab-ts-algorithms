export default class HashTableNode<T> {
  private readonly _key: string;
  private _data: T;
  private _isDeleted: boolean;

  public constructor(key: string, data: T) {
    this._key = key;
    this._data = data;
    this._isDeleted = false;
  }

  get data(): T {
    return this._data;
  }

  set data(value: T) {
    this._data = value;
  }

  get key(): string {
    return this._key;
  }

  get isDeleted(): boolean {
    return this._isDeleted;
  }

  set isDeleted(value: boolean) {
    this._isDeleted = value;
  }
}
