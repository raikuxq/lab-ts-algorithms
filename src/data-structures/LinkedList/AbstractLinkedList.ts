import ILinkedList from "../ILinkedList";
import AbstractLinkedNode from "./AbstractLinkedNode";

export default abstract class AbstractLinkedList<T> implements ILinkedList<T> {
  protected _head: AbstractLinkedNode<T> | null;
  protected _tail: AbstractLinkedNode<T> | null;
  protected _length: number;

  /**
   * Create empty instance
   */
  protected constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  protected abstract getNodeByIndex(index: number): AbstractLinkedNode<T>;

  /**
   * Push node into start
   */
  public abstract unshift(value: T): void;

  /**
   * Push node into end
   */
  public abstract push(value: T): void;

  /**
   * Delete node from end
   */
  public abstract pop(): T;

  /**
   * Delete node from start
   */
  public abstract shift(): T;

  /**
   * Reverse list nodes links and swap head with tail
   */
  public abstract reverse(): void;

  /**
   * List length
   */
  public get length(): number {
    return this._length;
  }

  /**
   * Is list empty
   */
  public isEmpty(): boolean {
    return this._length === 0;
  }

  /**
   * Get head element data
   */
  public peekHead(): T {
    if (!this._head) {
      throw new Error("Head does not exist");
    }

    return this._head.data;
  }

  /**
   * Get tail element data
   */
  public peekTail(): T {
    if (!this._tail) {
      throw new Error("Tail does not exist");
    }

    return this._tail.data;
  }

  /**
   * Get elements as array
   */
  public getAsArray(): Array<T> {
    const array: Array<T> = [];
    let currentNode = this._tail;
    let counter = 0;

    while (currentNode && counter < this._length) {
      if (currentNode) array.push(currentNode.data);

      currentNode = currentNode.next;
      counter++;
    }

    return array;
  }

  /**
   * Get list element by index from start
   */
  public getByIndex(index: number): T {
    try {
      const node = this.getNodeByIndex(index);
      return node.data;
    } catch (e) {
      throw new Error(e);
    }
  }

  /**
   * Remove all elements from list
   */
  public clear(): void {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  /**
   * Add elements to list from array
   * */
  public pushFromArray(elements: Array<T>): void {
    elements.forEach((element: T) => {
      this.push(element);
    });
  }
}
