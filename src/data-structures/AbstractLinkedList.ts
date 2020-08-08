import LinkedList from "./LinkedList";
import AbstractNode from "./AbstractNode";

export default abstract class AbstractLinkedList<T> implements LinkedList<T> {

  protected abstract _head: AbstractNode<T> | null;
  protected abstract _tail: AbstractNode<T> | null;
  protected abstract _length: number;

  public abstract push(value: T): void;
  public abstract unshift(value: T): void;

  public abstract shift(): T | null;
  public abstract pop(): T | null;
  public abstract deleteNodesByValue(value: T): void;

  /**
   * List length
   *
   * @returns {number}
   */
  public get length(): number {
    return this._length;
  }

  /**
   * Is list empty
   *
   * @returns {Boolean}
   */
  public isEmpty(): boolean {
    return this._length === 0;
  }

  /**
   * Get head element data
   *
   * @returns {T}
   */
  public peekHead(): T | null {
    return this._head ? this._head.data : null;
  }

  /**
   * Get tail element data
   *
   * @returns {T}
   */
  public peekTail(): T | null {
    return this._tail ? this._tail.data : null;
  }

  /**
   * Add elements to list from array
   *
   * @param elements
   */
  public createFromArray(elements: Array<T>): void {
    elements.forEach((element: T) => {
      this.push(element);
    })
  }

  /**
   * Get elements as array
   *
   * @returns Array<T>
   */
  public getAsArray(): Array<T | null> {
    const array: Array<T | null> = [];

    let currentNode = this._tail;
    let counter = 0;

    while (currentNode && counter < this._length) {
      const value = currentNode ? currentNode.data : null;

      array.push(value);
      currentNode = currentNode.next;
      counter++;
    }

    return array;
  }
}
