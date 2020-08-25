import IQueue from "../IQueue";
import ILinkedList from "../ILinkedList";
import DoubleLinkedList from "../DoubleLinkedList/DoubleLinkedList";

/**
 * FIFO data structure
 */
export default class Queue<T> implements IQueue<T>{

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
  public peek(): T | null {
    try {
      return this._list.peekHead()
    } catch {
      return null;
    }
  }

  /**
   * Add element to queue
   */
  public add(item: T) {
    this._list.unshift(item);
  }

  /**
   * Get and delete first element in queue
   */
  public pop(): T {
    if (this.isEmpty()) throw new Error('Queue is empty');

    return this._list.pop();
  }

  /**
   * Is queue empty
   */
  public isEmpty(): boolean {
    return this._list.isEmpty();
  }


}
