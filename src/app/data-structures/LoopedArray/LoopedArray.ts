import IArrayFacade from "../../types/IArrayFacade";
import ValueOutOfRangeException from "../../exceptions/ValueOutOfRangeException";
import IsNotFoundException from "../../exceptions/IsNotFoundException";
import CollectionIsEmptyException from "../../exceptions/CollectionIsEmptyException";

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
   * @throws {ValueOutOfRangeException} when given capacity is not valid
   */
  constructor(capacity: number) {
    if (capacity <= 0) {
      throw new ValueOutOfRangeException("Capacity must be larger than 0");
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
   * @throws {CollectionIsEmptyException} when array is empty
   */
  public pop(): T {
    if (this.isEmpty()) {
      throw new CollectionIsEmptyException(
        "cannot delete because array is empty"
      );
    }
    this._realLength--;
    const deletedItem = this._array.pop();

    return deletedItem!;
  }

  /**
   * Delete node from array's start
   * @throws {CollectionIsEmptyException} when array is empty
   */
  public shift(): T {
    if (this.isEmpty()) {
      throw new CollectionIsEmptyException(
        "cannot delete because array is empty"
      );
    }
    this._realLength--;
    const deletedItem = this._array.shift();

    return deletedItem!;
  }

  /**
   * Get head element data
   */
  public peek(): T {
    return this._array[this._array.length - 1];
  }

  /**
   * Get tail element data
   */
  public peekFromStart(): T {
    return this._array[0];
  }

  /**
   * Get array element by index from start
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
