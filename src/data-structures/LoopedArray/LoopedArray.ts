import IArrayFacade from "../../types/IArrayFacade";

/**
 * Linear data structure
 * Facade above array
 * After reaching full array new pushed elements will be overwritten over old elements
 */
export default class LoopedArray<T> implements IArrayFacade<T> {
  private readonly _capacity: number;
  private _realLength = 0;
  private _array: Array<T>;

  /**
   * Create empty instance
   */
  constructor(capacity: number) {
    if (capacity <= 0) {
      throw new Error("Capacity must be larger than 0");
    }
    this._capacity = capacity;
    this._array = new Array<T>(0);
  }

  /**
   * Push into end
   */
  public push(value: T): void {
    if (this._realLength % this._capacity === 0) {
      this._array = new Array<T>(0);
    }

    this._realLength++;

    if (!this.isFull()) {
      this._array.push(value);
    } else {
      const indexToPush = (this._realLength % this._capacity) - 1;
      this._array.splice(indexToPush, 1, value);
    }
  }

  /**
   * Push into start
   */
  public unshift(value: T): void {
    if (this._realLength % this._capacity === 0) {
      this._array = new Array<T>(0);
    }
    this._realLength++;

    if (!this.isFull()) {
      this._array.unshift(value);
    } else {
      this._array.splice(this._capacity - 1);
      this._array.unshift(value);
    }
  }

  /**
   * Delete node from array's end
   */
  public pop(): T {
    this._realLength--;
    const deletedItem = this._array.pop();
    if (deletedItem === undefined)
      throw new Error(
        "cannot delete last element because of it does not exists"
      );
    return deletedItem;
  }

  /**
   * Delete node from array's start
   */
  public shift(): T {
    this._realLength--;
    const deletedItem = this._array.shift();
    if (deletedItem === undefined)
      throw new Error(
        "cannot delete first element because of it does not exists"
      );
    return deletedItem;
  }

  /**
   * Get head element data
   * @throws Error when head does not exists
   */
  public peek(): T {
    return this._array[this._array.length - 1];
  }

  /**
   * Get tail element data
   * @throws Error when head does not exists
   */
  public peekFromStart(): T {
    return this._array[0];
  }

  /**
   * Get array element by index from start
   * @throws when element does not exists
   */
  peekByIndex(index: number): T {
    return this._array[index];
  }

  /**
   * Push from index
   */
  pushFromIndex(value: T, fromIndex: number): void {
    this._array[fromIndex] = value;
  }

  /**
   * Get elements as array
   */
  public getAsArray(): Array<T> {
    return this._array;
  }

  /**
   * Check if element exists in array
   */
  public has(item: T): boolean {
    return this._array.includes(item);
  }

  /**
   * Is array empty
   */
  public isEmpty(): boolean {
    return this._array.length === 0;
  }

  /**
   * Is array full
   */
  public isFull(): boolean {
    return this._array.length >= this._capacity;
  }

  /**
   * List length
   */
  public length(): number {
    return this._array.length;
  }

  /**
   * Remove all elements from array
   */
  public clear(): void {
    this._array = new Array<T>(0);
  }

  /**
   * Delete node from array by index from start
   */
  deleteFromIndex(fromIndex: number): T {
    const deletedElement = this._array[fromIndex];
    delete this._array[fromIndex];
    return deletedElement;
  }

  /**
   * Add elements to array from array
   * */
  pushFromArray(elements: Array<T>): void {
    elements.forEach((element: T) => {
      this.push(element);
    });
  }

  /**
   * Reverse array nodes links and swap head with tail
   */
  reverse(): void {
    this._array = this._array.reverse();
  }
}
