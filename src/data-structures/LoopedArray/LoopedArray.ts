import ICollection from "../../types/ICollection";

export default class LoopedArray<T> implements ICollection<T> {
  private _realLength = 0;
  private readonly _capacity: number;
  private _array: Array<T>;

  constructor(capacity: number) {
    this._capacity = capacity;
    this._array = new Array<T>(0);
  }

  public push(item: T): void {
    this._realLength++;

    if (this._array.length < this._capacity) {
      this._array.push(item);
    } else {
      const indexToPush = (this._realLength % this._capacity) - 1;
      this._array.splice(indexToPush, 1, item);
    }
  }

  public unshift(item: T): void {
    this._realLength++;

    if (this._array.length < this._capacity) {
      this._array.unshift(item);
    } else {
      this._array.splice(this._capacity - 1);
      this._array.unshift(item);
    }
  }

  public pop(): T {
    this._realLength--;
    const deletedItem = this._array.pop();
    if (deletedItem === undefined)
      throw new Error(
        "cannot delete last element because of it does not exists"
      );
    return deletedItem;
  }

  public shift(): T {
    this._realLength--;
    const deletedItem = this._array.shift();
    if (deletedItem === undefined)
      throw new Error(
        "cannot delete first element because of it does not exists"
      );
    return deletedItem;
  }

  public getArray(): Array<T> {
    return this._array;
  }

  public peekHead(): T {
    return this._array[this._array.length - 1];
  }

  public peekTail(): T {
    return this._array[0];
  }

  public isEmpty(): boolean {
    return this._array.length === 0;
  }

  public length(): number {
    return this._array.length;
  }

  public clear(): void {
    this._array = new Array<T>(0);
  }
}
