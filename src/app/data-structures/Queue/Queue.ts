import DoubleLinkedList from "../LinkedList/DoubleLinkedList/DoubleLinkedList";
import ILinearStorage from "../../types/ILinearStorage";
import ILinearStorageRA from "../../types/ILinearStorageRA";
import CollectionIsEmptyException from "../../exceptions/CollectionIsEmptyException";
import CollectionIsFullException from "../../exceptions/CollectionIsFullException";

/**
 * FIFO data structure
 */
export default class Queue<T> implements ILinearStorage<T> {
  private readonly _list: ILinearStorageRA<T>;

  /**
   * Create a queue instance
   */
  public constructor(capacity?: number) {
    this._list = new DoubleLinkedList<T>(capacity);
  }

  /**
   * Get first element in queue (without deleting)
   * @throws {CollectionIsEmptyException} when list is empty
   */
  public peek(): T {
    if (this.isEmpty()) {
      throw new CollectionIsEmptyException("Cannot peek when list is empty");
    }
    return this._list.peek();
  }

  /**
   * Add element to queue
   * @throws {CollectionIsFullException} when list is full
   */
  public push(item: T): void {
    if (this._list.isFull()) {
      throw new CollectionIsFullException("Cannot push when queue is full");
    }
    this._list.unshift(item);
  }

  /**
   * Delete first element in queue
   * @throws {CollectionIsEmptyException} when list is empty
   */
  public pop(): T {
    if (this.isEmpty()) {
      throw new CollectionIsEmptyException("Cannot pop when list is empty");
    }
    return this._list.pop();
  }

  /**
   * Check if element exists in list
   */
  public has(item: T): boolean {
    return this._list.has(item);
  }

  /**
   * Is queue empty
   */
  public isEmpty(): boolean {
    return this._list.isEmpty();
  }

  /**
   * Is stack full
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
