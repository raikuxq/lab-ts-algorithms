import DoubleLinkedList from "../LinkedList/DoubleLinkedList/DoubleLinkedList";
import ILinearStorage from "../../types/ILinearStorage";
import ILinearStorageRA from "../../types/ILinearStorageRA";
import CollectionIsEmptyException from "../../exceptions/CollectionIsEmptyException";
import CollectionIsFullException from "../../exceptions/CollectionIsFullException";

/**
 * LIFO data structure
 */
export default class Stack<T> implements ILinearStorage<T> {
  private readonly _list: ILinearStorageRA<T>;

  /**
   * Create a stack instance
   */
  public constructor(capacity?: number) {
    this._list = new DoubleLinkedList(capacity);
  }

  /**
   * Get stack top element
   * @throws {CollectionIsEmptyException} when list is empty
   */
  public peek(): T {
    if (this.isEmpty()) {
      throw new CollectionIsEmptyException("Cannot peek when list is empty");
    }
    return this._list.peek();
  }

  /**
   * Add element to stack head
   * @throws {CollectionIsFullException} when list is full
   */
  public push(item: T): void {
    if (this.isFull()) {
      throw new CollectionIsFullException("Stack is full");
    }
    this._list.push(item);
  }

  /**
   * Remove element from stack head
   * @throws {CollectionIsEmptyException} when list is empty
   */
  public pop(): T {
    if (this.isEmpty()) {
      throw new CollectionIsEmptyException("Cannot pop when stack is empty");
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
   * Is stack empty
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
   * Remove all elements in stack
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
   * Reverse stack
   */
  public reverse(): void {
    this._list.reverse();
  }
}
