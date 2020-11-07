import IStack from "./interface/IStack";
import ILinkedList from "../ILinkedList";
import DoubleLinkedList from "../LinkedList/DoubleLinkedList/DoubleLinkedList";

/**
 * LIFO data structure
 */
export default class Stack<T> implements IStack<T> {
  private readonly _list: ILinkedList<T>;
  private readonly _capacity: number;

  /**
   * Create a stack instance
   *
   * @param capacity - max stack elements count
   */
  public constructor(capacity: number) {
    this._capacity = capacity;
    this._list = new DoubleLinkedList();
  }

  /**
   * Get stack top element (or null if stack is empty)
   */
  public peek(): T {
    if (this.isEmpty()) {
      throw new Error("Cannot peek when list is empty");
    }
    return this._list.peekHead();
  }

  /**
   * Add element to stack head
   */
  public push(item: T): void {
    if (this.isFull()) throw new Error("Stack is full");

    this._list.push(item);
  }

  /**
   * Remove element from stack head
   */
  public pop(): T {
    if (this.isEmpty()) {
      throw new Error("Cannot pop when stack is empty");
    }
    return this._list.pop();
  }

  /**
   * Is stack empty
   */
  public isEmpty(): boolean {
    return this._list.length === 0;
  }

  /**
   * Is stack full
   */
  public isFull(): boolean {
    return this._list.length >= this._capacity;
  }
}
