import SingleLinkedNode from "./SingleLinkedNode";
import ISingleLinkedList, {SingleLinkedListIterator} from "./ISingleLinkedList";

export default class SingleLinkedList<T> implements ISingleLinkedList<T> {

  private _head: SingleLinkedNode<T> | null;
  private _tail: SingleLinkedNode<T> | null;
  private _length: number;


  /**
   * Create empty instance
   */
  public constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }


  /**
   * Insert node between head and tail
   *
   * @param {SingleLinkedNode} node
   * @private
   */
  private insertNodeBetweenHeadAndTail(node: SingleLinkedNode<T>) {
    node.next = this._tail;
    if (this._head) {
      this._head.next = node;
    }

    this._length++;
  }


  /**
   * Head node <O(1)>
   */
  public get head(): SingleLinkedNode<T> | null {
    return this._head;
  }


  /**
   * Tail node <O(1)>
   */
  public get tail(): SingleLinkedNode<T> | null {
    return this._tail;
  }


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
   * Get head element data <O(1)>
   */
  public peekHead(): T {
    if (!this._head) throw new Error('Head does not exist');

    return this._head.data;
  }


  /**
   * Get tail element data <O(1)>
   */
  public peekTail(): T {
    if (!this._tail) throw new Error('Tail does not exist');

    return this._tail.data;
  }


  /**
   * Get elements as array <O(n)>
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
   * Get list element by index from start <O(n)>
   */
  public getByIndex(index: number): T {
    const node = this.getNodeByIndex(index);
    return node.data;
  }


  /**
   * Node by index <O(n)>
   */
  public getNodeByIndex(index: number): SingleLinkedNode<T> {
    if (this.isEmpty()) throw new Error('List is empty');
    if (this.length < index) throw new Error('Index exceed list length');

    let currentNode = this._tail;
    let counter = 0;

    while (currentNode && counter < index) {
      currentNode = currentNode.next;
      counter++;
    }

    if (currentNode === null) throw new Error('Node does not exist');
    return currentNode;
  }


  /**
   * Add node to end <O(1)>
   *
   * @param value - data
   *
   * @returns {SingleLinkedList} - current list instance
   */
  public push(value: T): void {
    const node: SingleLinkedNode<T> = new SingleLinkedNode<T>(value);
    if (!this._tail) this._tail = node;

    this.insertNodeBetweenHeadAndTail(node);
    this._head = node;
  }


  /**
   * Add node to start <O(1)>
   *
   * @param value - data
   *
   * @returns {SingleLinkedList} - current list instance
   */
  public unshift(value: T): void {
    const node: SingleLinkedNode<T> = new SingleLinkedNode<T>(value);
    if (!this._head) this._head = node;

    this.insertNodeBetweenHeadAndTail(node);
    this._tail = node;
  }


  /**
   * Add elements to list from array <O(n)>
   * */
  public pushFromArray(elements: Array<T>): void {
    elements.forEach((element: T) => {
      this.push(element);
    })
  }


  /**
   * Delete node from end <O(n)>
   */
  public pop(): T {
    /**
     * Get previous item before head
     */
    const getSecondLastNode = (): SingleLinkedNode<T> | null => {
      let last = this._head;
      let secondLast = null;
      let counter = 0;

      if (last) {

        while (last.next && counter < this._length) {
          secondLast = last;
          last = last.next;
          counter++;
        }
      }
      return secondLast;
    }

    const oldHead = this._head;
    const newHead = getSecondLastNode();

    if (newHead) newHead.next = this._tail;
    if (oldHead) oldHead.next = null;

    this._length--;

    if (oldHead === null) throw new Error('Node does not exist');

    return oldHead.data;
  }


  /**
   * Delete node from start <O(1)>
   */
  public shift(): T {
    const oldTail = this._tail;
    const newTail = this._tail?.next || null;

    if (this._head) this._head.next = newTail;

    this._tail = newTail;
    this._length--;

    if (oldTail === null) throw new Error('Node does not exist');

    oldTail.next = null;
    return oldTail.data;
  }


  /**
   * List iterator
   *
   * @param {Number} fromIndex - where iterator starts
   */
  public iterator(fromIndex: number = 0): SingleLinkedListIterator<T> {
    let activeNode: SingleLinkedNode<T> = this.getNodeByIndex(fromIndex);

    const iterator: SingleLinkedListIterator<T> = {
      current: () => {
        return activeNode.data;
      },
      next: () => {
        if (!activeNode.next) throw new Error('Next element does not exist');
        activeNode = activeNode.next;
        return activeNode.data;
      }
    };

    return iterator;
  }
}
