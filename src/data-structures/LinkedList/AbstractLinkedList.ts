import AbstractLinkedNode from "./AbstractLinkedNode";
import ILinkedList from "../../types/ILinkedList";

export default abstract class AbstractLinkedList<T> implements ILinkedList<T> {
  protected readonly _capacity: number;
  protected _length: number;
  protected _head: AbstractLinkedNode<T> | null;
  protected _tail: AbstractLinkedNode<T> | null;

  /**
   * Create empty instance
   */
  protected constructor(capacity?: number) {
    if (capacity === undefined) {
      this._capacity = Number.MAX_VALUE;
    } else {
      if (capacity > 0) {
        this._capacity = capacity;
      } else {
        throw new Error("Capacity must be larger than 0");
      }
    }

    this._capacity = capacity && capacity > 0 ? capacity : Number.MAX_VALUE;
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  /**
   * Will find node by its index
   */
  protected abstract getNodeByIndex(index: number): AbstractLinkedNode<T>;

  /**
   * Push into start
   */
  public abstract unshift(value: T): void;

  /**
   * Push into end
   */
  public abstract push(value: T): void;

  /**
   * Push from index
   */
  public abstract pushFromIndex(value: T, fromIndex: number): void;

  /**
   * Delete node from list's end
   */
  public abstract pop(): T;

  /**
   * Delete node from list by index from start and get its data
   */
  public abstract deleteFromIndex(fromIndex: number): T;

  /**
   * Delete node from list's start and get its data
   */
  public abstract shift(): T;

  /**
   * Reverse list nodes links and swap head with tail
   * @example "4 -> 7 -> 10" will be reversed to "10 -> 7 -> 4"
   */
  public abstract reverse(): void;

  /**
   * List length
   */
  public length(): number {
    return this._length;
  }

  /**
   * Is list empty
   */
  public isEmpty(): boolean {
    return this._length === 0;
  }

  /**
   * Is list full
   */
  public isFull(): boolean {
    return this._length >= this._capacity;
  }

  /**
   * Get head element data
   * @throws Error when head does not exist
   */
  public peek(): T {
    if (!this._head) {
      throw new Error("Head does not exist");
    }

    return this._head.data;
  }

  /**
   * Get tail element data
   * @throws Error when tail does not exists
   */
  public peekFromStart(): T {
    if (!this._tail) {
      throw new Error("Tail does not exist");
    }

    return this._tail.data;
  }

  /**
   * Check if element exists in list
   */
  public has(item: T): boolean {
    return this.getAsArray().includes(item);
  }

  /**
   * Get elements as an array
   */
  public getAsArray(): Array<T> {
    const array: Array<T> = [];
    let currentNode = this._tail;
    let counter = 0;

    while (currentNode && counter < this._length) {
      if (currentNode) array.push(currentNode.data);

      currentNode = currentNode.next;
      counter++;
    }

    return array;
  }

  /**
   * Get list element by index from start
   * @throws when element does not exist
   */
  public peekByIndex(index: number): T {
    try {
      const node = this.getNodeByIndex(index);
      return node.data;
    } catch (e) {
      throw new Error(e);
    }
  }

  /**
   * Remove all elements from list
   */
  public clear(): void {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  /**
   * Add elements to list from array
   * @throws when list is full
   * */
  public pushFromArray(elements: Array<T>): void {
    elements.forEach((element: T) => {
      if (this.isFull()) {
        throw new Error("List is full, no more space available");
      }
      this.push(element);
    });
  }
}
