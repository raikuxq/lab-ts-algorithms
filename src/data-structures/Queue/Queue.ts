import DoubleLinkedList from "../LinkedList/DoubleLinkedList/DoubleLinkedList";
import ILinearStorage from "../../types/ILinearStorage";
import ILinearStorageRA from "../../types/ILinearStorageRA";

/**
 * FIFO data structure
 */
export default class Queue<T> implements ILinearStorage<T> {
  private readonly _list: ILinearStorageRA<T>;

  /**
   * Create a queue instance
   * @param capacity - max stack elements count
   */
  public constructor(capacity?: number) {
    this._list = new DoubleLinkedList<T>(capacity);
  }

  /**
   * Get first element in queue (without deleting)
   * @throws when list is empty
   * @returns element data
   */
  public peek(): T {
    if (this.isEmpty()) {
      throw new Error("Cannot peek when list is empty");
    }
    return this._list.peek();
  }

  /**
   * Add element to queue
   * @param item - element data
   * @throws when list is full
   */
  public push(item: T): void {
    if (this._list.isFull()) {
      throw new Error("Cannot push when queue is full");
    }
    this._list.unshift(item);
  }

  /**
   * Delete first element in queue
   * @throws when list is empty
   * @returns element data
   */
  public pop(): T {
    if (this.isEmpty()) {
      throw new Error("Cannot pop when list is empty");
    }
    return this._list.pop();
  }

  /**
   * Check if element exists in list
   * @param item
   * @returns boolean
   */
  public has(item: T): boolean {
    return this._list.has(item);
  }

  /**
   * Is queue empty
   * @returns boolean
   */
  public isEmpty(): boolean {
    return this._list.isEmpty();
  }

  /**
   * Is stack full
   * @returns boolean
   */
  public isFull(): boolean {
    return this._list.isFull();
  }

  /**
   * Remove all elements in queue
   */
  public clear(): void {
    this._list.clear();
  }

  /**
   * Queue length
   * @returns number
   */
  public length(): number {
    return this._list.length();
  }

  /**
   * Reverse queue
   */
  public reverse(): void {
    this._list.reverse();
  }
}
