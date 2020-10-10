import DoubleLinkedNode from "./DoubleLinkedNode";
import IDoubleLinkedList, {
  DoubleLinkedListIterator,
} from "../IDoubleLinkedList";

export default class DoubleLinkedList<T> implements IDoubleLinkedList<T> {
  private _head: DoubleLinkedNode<T> | null;
  private _tail: DoubleLinkedNode<T> | null;
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
   * @param {DoubleLinkedNode} node
   * @private
   */
  private insertNodeBetweenHeadAndTail(node: DoubleLinkedNode<T>) {
    node.next = this._tail;
    node.prev = this._head;

    if (node.prev) node.prev.next = node;
    if (node.next) node.next.prev = node;

    this._length++;
  }

  /**
   * Delete node by link
   *
   * @param {DoubleLinkedNode} node - node for deleting
   * @private
   */
  private deleteNode(node: DoubleLinkedNode<T> | null): DoubleLinkedNode<T> {
    if (node === null) throw new Error("Node should be existed");

    const prev = node.prev;
    const next = node.next;

    if (prev) prev.next = next;
    if (next) next.prev = prev;

    node.next = null;
    node.prev = null;

    this._length--;

    return node;
  }

  /**
   * Head node <O(1)>
   */
  public get head(): DoubleLinkedNode<T> | null {
    return this._head;
  }

  /**
   * Tail node <O(1)>
   */
  public get tail(): DoubleLinkedNode<T> | null {
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
    if (!this._head) throw new Error("Head does not exist");

    return this._head.data;
  }

  /**
   * Get tail element data <O(1)>
   */
  public peekTail(): T {
    if (!this._tail) throw new Error("Tail does not exist");

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
   *
   * @param {Number} index - index of element
   */
  public getByIndex(index: number): T {
    const node = this.getNodeByIndex(index);
    return node.data;
  }

  /**
   * Node by index <O(n)>
   */
  public getNodeByIndex(index: number): DoubleLinkedNode<T> {
    if (this._length === 0) throw new Error("List is empty");
    if (this._length < index) throw new Error("Index exceed list length");

    let currentNode = this._tail;
    let counter = 0;

    while (currentNode && counter < index) {
      currentNode = currentNode.next;
      counter++;
    }

    if (currentNode === null) throw new Error("Node does not exist");

    return currentNode;
  }

  /**
   * Add node to end <O(1)>
   *
   * @param value - data
   */
  public push(value: T): void {
    const node: DoubleLinkedNode<T> = new DoubleLinkedNode<T>(value);
    if (!this._tail) this._tail = node;

    this.insertNodeBetweenHeadAndTail(node);
    this._head = node;
  }

  /**
   * Add node to start <O(1)>
   *
   * @param value - data
   */
  public unshift(value: T): void {
    const node: DoubleLinkedNode<T> = new DoubleLinkedNode<T>(value);
    if (!this._head) this._head = node;

    this.insertNodeBetweenHeadAndTail(node);
    this._tail = node;
  }

  /**
   * Add elements to list from array <O(n)>
   *
   * @param {Array} elements
   * */
  public pushFromArray(elements: Array<T>): void {
    elements.forEach((element: T) => {
      this.push(element);
    });
  }

  /**
   * Delete node from end <O(1)>
   */
  public pop(): T {
    const deletedNode = this.deleteNode(this._head);
    this._head = this._tail?.prev || null;

    return deletedNode.data;
  }

  /**
   * Delete node from start <O(1)>
   */
  public shift(): T {
    const deletedNode = this.deleteNode(this._tail);
    this._tail = this._head?.next || null;

    return deletedNode.data;
  }

  /**
   * Clear list
   */
  public clear(): void {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  public reverse(): void {
    let currentNode = this._tail;
    let i = 0;

    while (currentNode && i < this._length) {
      const newPrev = currentNode.next;
      const newNext = currentNode.prev;

      currentNode.prev = newPrev;
      currentNode.next = newNext;

      i++;
      currentNode = newNext;
    }

    if (currentNode) {
      this._tail = currentNode.next;
      this._head = currentNode;
    }
  }

  /**
   * List iterator
   *
   * @param {Number} fromIndex - where iterator starts
   */
  public iterator(fromIndex = 0): DoubleLinkedListIterator<T> {
    let activeNode: DoubleLinkedNode<T> = this.getNodeByIndex(fromIndex);

    const iterator: DoubleLinkedListIterator<T> = {
      current: () => {
        return activeNode.data;
      },
      next: () => {
        if (!activeNode.next) throw new Error("Next element does not exist");
        activeNode = activeNode.next;
        return activeNode.data;
      },
      prev: () => {
        if (!activeNode.prev) throw new Error("Prev element does not exist");
        activeNode = activeNode.prev;
        return activeNode.data;
      },
    };

    return iterator;
  }
}
