import ILinkedList from "../LinkedList/ILinkedList";
import DoubleLinkedList from "../LinkedList/DoubleLinkedList/DoubleLinkedList";

/**
 * FIFO data structure
 */
export default class Queue<T> {
  private readonly _list: ILinkedList<T>;
  private readonly _capacity: number;

  /**
   * Create queue instance
   */
  public constructor(capacity?: number) {
    this._list = new DoubleLinkedList();
    this._capacity = capacity || Infinity;
  }

  /**
   * Get first element in queue (without deleting)
   */
  public peek(): T {
    if (this.isEmpty()) {
      throw new Error("Cannot peek when list is empty");
    }
    return this._list.peekHead();
  }

  /**
   * Add element to queue
   */
  public enqueue(item: T): void {
    if (this._list.length >= this._capacity) {
      throw new Error("Cannot enqueue when queue is full");
    }
    this._list.unshift(item);
  }

  /**
   * Get and delete first element in queue
   */
  public dequeue(): T {
    if (this.isEmpty()) {
      throw new Error("Cannot dequeue when list is empty");
    }
    return this._list.pop();
  }

  /**
   * Is queue empty
   */
  public isEmpty(): boolean {
    return this._list.isEmpty();
  }

  /**
   * Clear queue
   */
  public clear(): void {
    this._list.clear();
  }
}
