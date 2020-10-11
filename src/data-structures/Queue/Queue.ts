import IQueue from "./interface/IQueue";
import ILinkedList from "../ILinkedList";
import DoubleLinkedList from "../DoubleLinkedList/DoubleLinkedList";

/**
 * FIFO data structure
 */
export default class Queue<T> implements IQueue<T> {
  private readonly _list: ILinkedList<T>;

  /**
   * Create queue instance
   */
  public constructor() {
    this._list = new DoubleLinkedList();
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
