import DoubleLinkedList from "../LinkedList/DoubleLinkedList/DoubleLinkedList";
import ILinearStorage from "../../types/ILinearStorage";
import LoopedArray from "../LoopedArray/LoopedArray";
import ILinearStorageAccessible from "../../types/ILinearStorageAccessible";

/**
 * LIFO data structure
 */
export default class Stack<T> implements ILinearStorage<T> {
  private readonly _list: ILinearStorageAccessible<T>;
  private readonly _capacity: number;

  /**
   * Create a stack instance
   * @param capacity - max stack elements count
   */
  public constructor(capacity?: number) {
    if (capacity === undefined) {
      this._capacity = Number.MAX_VALUE;
    } else {
      if (capacity > 0) {
        this._capacity = capacity;
      } else {
        throw new Error("Capacity must be larger than 0");
      }
    }
    this._list = new DoubleLinkedList(this._capacity);
    // this._list = new LoopedArray(this._capacity);
  }

  /**
   * Get stack top element
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
   * Add element to stack head
   * @param item - element data
   * @throws when list is full
   */
  public push(item: T): void {
    if (this.isFull()) {
      throw new Error("Stack is full");
    }
    this._list.push(item);
  }

  /**
   * Remove element from stack head
   * @throws when list is empty
   * @returns element data
   */
  public pop(): T {
    if (this.isEmpty()) {
      throw new Error("Cannot pop when stack is empty");
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
   * Is stack empty
   * @returns boolean
   */
  public isEmpty(): boolean {
    return this._list.length() === 0;
  }

  /**
   * Is stack full
   * @returns boolean
   */
  public isFull(): boolean {
    return this._list.length() >= this._capacity;
  }

  /**
   * Remove all elements in stack
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
}
