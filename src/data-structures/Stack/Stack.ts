import IStack from "../../types/IStack";
import ILinkedList from "../../types/ILinkedList";
import DoubleLinkedList from "../LinkedList/DoubleLinkedList/DoubleLinkedList";
import ICollection from "../../types/ICollection";
import LoopedArray from "../LoopedArray/LoopedArray";

/**
 * LIFO data structure
 */
export default class Stack<T> implements IStack<T> {
  private readonly _list: ICollection<T>;
  private readonly _capacity: number;

  /**
   * Create a stack instance
   * @param capacity - max stack elements count
   */
  public constructor(capacity?: number) {
    this._capacity = capacity || Number.MAX_VALUE;
    this._list = new DoubleLinkedList();
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
    return this._list.peekHead();
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
}
