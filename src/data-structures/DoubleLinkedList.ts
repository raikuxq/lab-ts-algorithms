import DoubleLinkedNode from "./DoubleLinkedNode";
import AbstractLinkedList from "./AbstractLinkedList";

export default class DoubleLinkedList<T> extends AbstractLinkedList<T>{

  protected _head: DoubleLinkedNode<T> | null;
  protected _tail: DoubleLinkedNode<T> | null;
  protected _length: number;

  public constructor() {
    super();
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  /**
   * Add node to end
   *
   * @param value - data
   *
   * @returns {DoubleLinkedList} - current list instance
   */
  public push(value: T): void {
    const node: DoubleLinkedNode<T> = new DoubleLinkedNode<T>(value);
    const oldHead = this._head;

    this._head = node;
    this._head.next = this._tail;
    this._head.prev = oldHead;

    if (oldHead) {
      oldHead.next = node;
    }

    if (this._tail === null) {
      this._tail = node;
    }

    this._tail.prev = this._head;

    this._length++;
  }

  /**
   * Add node to start
   *
   * @param value - data
   *
   * @returns {DoubleLinkedList} - current list instance
   */
  public unshift(value: T): DoubleLinkedList<T> {
    const node: DoubleLinkedNode<T> = new DoubleLinkedNode<T>(value);
    const oldTail = this._tail;

    this._tail = node;
    this._tail.prev = this._head;
    this._tail.next = oldTail;

    if (oldTail) {
      oldTail.prev = node;
    }

    if (this._head === null) {
      this._head = node;
    }

    this._head.prev = this._tail;

    this._length++;

    return this;
  }

  /**
   * Delete node from end
   *
   * @returns {DoubleLinkedNode} - deleted item
   */
  public pop(): T | null {
    const oldHead: DoubleLinkedNode<T> | null = this._head;
    const newHead: DoubleLinkedNode<T> | null = this._head?.prev || null;

    if (newHead) {
      newHead.next = this._tail;
    }

    this._length--;

    return oldHead ? oldHead.data : null;
  }

  /**
   * Delete node from start
   *
   * @returns {DoubleLinkedNode} - deleted item
   */
  public shift(): T | null {
    const head = this._head;
    const oldTail = this._tail;
    const newTail = oldTail?.next || null;

    if (newTail) {
      newTail.prev = this._head;
      this._tail = newTail || null;
    }

    if (head) {
      head.next = newTail;
    }

    this._length--;

    return oldTail ? oldTail.data : null;
  }


  /**
   * Delete all nodes by value
   *
   * @param value
   *
   * @returns {DoubleLinkedList} - current list instance
   */
  public deleteNodesByValue(value: T) : void {
    let counter: number = 0;
    let currentNode: DoubleLinkedNode<T> | null = this._tail;
    let prevNode: DoubleLinkedNode<T> | null = null;

    while (currentNode && counter <= this._length) {

      /**
       * Deleting an item
       */
      if (currentNode.data === value) {
        if (prevNode) {
          prevNode.next = currentNode.next;
          currentNode.prev = prevNode;
          this._length--;
        }
      }

      /**
       * Loop increment
       */
      prevNode = currentNode;
      currentNode = currentNode.next;
      counter++;
    }
  }
}
