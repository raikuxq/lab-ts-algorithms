import IQueue from "../../types/IQueue";
import ILinkedList from "../../types/ILinkedList";
import DoubleLinkedList from "../LinkedList/DoubleLinkedList/DoubleLinkedList";
import LoopedArray from "../LoopedArray/LoopedArray";
import ICollection from "../../types/ICollection";

/**
 * FIFO data structure
 */
export default class Queue<T> implements IQueue<T> {
  private readonly _list: ICollection<T>;
  private readonly _capacity: number;

  /**
   * Create a queue instance
   * @param capacity - max stack elements count
   */
  public constructor(capacity?: number) {
    this._capacity = capacity || Number.MAX_VALUE;
    this._list = new DoubleLinkedList();
    // this._list = new LoopedArray(this._capacity);
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
    return this._list.peekHead();
  }

  /**
   * Add element to queue
   * @param item - element data
   * @throws when list is full
   */
  public enqueue(item: T): void {
    if (this._list.length() >= this._capacity) {
      throw new Error("Cannot enqueue when queue is full");
    }
    this._list.unshift(item);
  }

  /**
   * Delete first element in queue
   * @throws when list is empty
   * @returns element data
   */
  public dequeue(): T {
    if (this.isEmpty()) {
      throw new Error("Cannot dequeue when list is empty");
    }
    return this._list.pop();
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
    return this._list.length() >= this._capacity;
  }

  /**
   * Remove all elements in queue
   */
  public clear(): void {
    this._list.clear();
  }
}
