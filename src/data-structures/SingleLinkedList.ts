import SingleLinkedNode from "./SingleLinkedNode";
import AbstractLinkedList from "./AbstractLinkedList";

export default class SingleLinkedList<T> extends AbstractLinkedList<T> {

  protected _head: SingleLinkedNode<T> | null;
  protected _tail: SingleLinkedNode<T> | null;
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
   */
  public push(value: T): void {
    const node: SingleLinkedNode<T> = new SingleLinkedNode<T>(value);
    const oldHead = this._head;

    this._head = node;
    this._head.next = this._tail;

    if (oldHead) {
      oldHead.next = node;
    }

    if (this._tail === null) {
      this._tail = node;
    }

    this._length++;
  }

  /**
   * Add node to start
   *
   * @param value - data
   *
   * @returns {SingleLinkedList} - current list instance
   */
  public unshift(value: T): void {
    const node: SingleLinkedNode<T> = new SingleLinkedNode<T>(value);
    const oldTail = this._tail;

    this._tail = node;
    this._tail.next = oldTail;

    if (this._head === null) {
      this._head = node;
    }

    this._head.next = node;

    this._length++;
  }

  /**
   * Delete node from end
   *
   * @returns {SingleLinkedNode} - deleted item
   */
  public pop(): T | null {
    /**
     * Get previous item before head
     */
    const getSecondLastNode = (): SingleLinkedNode<T> | null => {
      let last = this._head;
      let secondLast = null;
      let counter = 0;

      if (last) {

        while(last.next && counter < this._length){
          secondLast = last;
          last = last.next;
          counter++;
        }
      }
      return secondLast;
    }

    const oldHead = this._head;
    const newHead = getSecondLastNode();

    if (newHead) {
      newHead.next = this._tail;
    }

    if (oldHead) {
      oldHead.next = null;
    }

    this._length--;

    return oldHead ? oldHead.data : null;
  }

  /**
   * Delete node from start
   *
   * @returns {SingleLinkedNode} - deleted item
   */
  public shift(): T | null {
    const oldTail = this._tail;
    const newTail = this._tail?.next;

    if (this._head) {
      this._head.next = newTail || null;
    }

    if (oldTail) {
      this._tail = newTail || null;
    }

    this._length--;

    return oldTail ? oldTail.data : null;
  }


  /**
   * Delete all nodes by value
   *
   * @param value
   *
   * @returns {SingleLinkedList} - current list instance
   */
  public deleteNodesByValue(value: T) : void {
    let counter: number = 0;
    let currentNode = this._tail;
    let prevNode: SingleLinkedNode<T> | null = null;

    while (currentNode && counter <= this._length) {

      /**
       * Deleting an item
       */
      if (currentNode.data === value) {
        if (prevNode) {
          prevNode.next = currentNode.next;
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
