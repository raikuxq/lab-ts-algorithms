import DoubleLinkedList from "../LinkedList/DoubleLinkedList/DoubleLinkedList";
import ILinearStorage from "../../types/ILinearStorage";
import ILinearStorageRA from "../../types/ILinearStorageRA";

/**
 * LIFO data structure
 */
export default class Stack<T> implements ILinearStorage<T> {
  private readonly _list: ILinearStorageRA<T>;

  /**
   * Create a stack instance
   * @param capacity - max stack elements count
   */
  public constructor(capacity?: number) {
    this._list = new DoubleLinkedList(capacity);
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

  /**
   * Reverse stack
   */
  public reverse(): void {
    this._list.reverse();
  }
}
