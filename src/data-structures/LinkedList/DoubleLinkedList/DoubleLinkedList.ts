import IBiDirectIterator from "../../IBiDirectIterator";
import IBiDirectIterable from "../../IBiDirectIterable";
import AbstractLinkedList from "../AbstractLinkedList";
import DoubleLinkedNode from "./DoubleLinkedNode";

export default class DoubleLinkedList<T>
  extends AbstractLinkedList<T>
  implements IBiDirectIterable<T> {
  /**
   * Override types
   */

  protected _head: DoubleLinkedNode<T> | null;
  protected _tail: DoubleLinkedNode<T> | null;
  protected _length: number;

  /**
   * Create empty instance
   */
  public constructor() {
    super();
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  /**
   * Will insert node into head next and tail prev links
   */
  protected insertNodeBetweenHeadAndTail(node: DoubleLinkedNode<T>): void {
    node.next = this._tail;
    node.prev = this._head;

    if (node.prev) node.prev.next = node;
    if (node.next) node.next.prev = node;

    this._length++;
  }

  /**
   * Will change it's neighbors nodes links
   */
  protected deleteNode(node: DoubleLinkedNode<T> | null): DoubleLinkedNode<T> {
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
   * @inheritDoc
   */
  protected getNodeByIndex(index: number): DoubleLinkedNode<T> {
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
   * @inheritDoc
   */
  public push(value: T): void {
    const node: DoubleLinkedNode<T> = new DoubleLinkedNode<T>(value);
    if (!this._tail) this._tail = node;

    this.insertNodeBetweenHeadAndTail(node);
    this._head = node;
  }

  /**
   * @inheritDoc
   */
  public unshift(value: T): void {
    const node: DoubleLinkedNode<T> = new DoubleLinkedNode<T>(value);
    if (!this._head) this._head = node;

    this.insertNodeBetweenHeadAndTail(node);
    this._tail = node;
  }

  /**
   * @inheritDoc
   */
  public pop(): T {
    const deletedNode = this.deleteNode(this._head);
    this._head = this._tail?.prev || null;

    return deletedNode.data;
  }

  public shift(): T {
    const deletedNode = this.deleteNode(this._tail);
    this._tail = this._head?.next || null;

    return deletedNode.data;
  }

  /**
   * @inheritDoc
   */
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
  public iterator(fromIndex = 0): IBiDirectIterator<T> {
    let activeNode: DoubleLinkedNode<T> = this.getNodeByIndex(fromIndex);

    return {
      current: () => {
        return activeNode.data;
      },
      hasNext(): boolean {
        return Boolean(activeNode.next);
      },
      next: () => {
        if (!activeNode.next) {
          throw new Error("Next element does not exist");
        }
        activeNode = activeNode.next;
        return activeNode.data;
      },
      prev: () => {
        if (!activeNode.prev) {
          throw new Error("Prev element does not exist");
        }
        activeNode = activeNode.prev;
        return activeNode.data;
      },
    };
  }
}
