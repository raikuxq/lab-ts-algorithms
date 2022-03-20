import IBiDirectIterator from "../../../types/IBiDirectIterator";
import IBiDirectIterable from "../../../types/IBiDirectIterable";
import AbstractLinkedList from "../AbstractLinkedList";
import DoubleLinkedNode from "./DoubleLinkedNode";

/**
 * Linear data structure
 * Each node has next and prev sibling
 * Head and tail are linked to each other
 */
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
   * @inheritDoc
   */
  public constructor() {
    super();
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  /**
   * Will insert node into head next and tail prev links
   * @param nodeToPush - node that will be added between two nodes
   * @param nodeLeft - will be prev element of pushed node
   * @param nodeRight - will be next element of pushed node
   */
  protected insertNodeBetweenTwoNodes(
    nodeToPush: DoubleLinkedNode<T>,
    nodeLeft: DoubleLinkedNode<T> | null,
    nodeRight: DoubleLinkedNode<T> | null
  ): void {
    if (!this._head) this._head = nodeToPush;
    if (!this._tail) this._tail = nodeToPush;

    if (!nodeLeft) nodeLeft = this._tail;
    if (!nodeRight) nodeRight = this._head;

    nodeToPush.next = nodeRight;
    nodeToPush.prev = nodeLeft;

    if (nodeToPush.prev) nodeToPush.prev.next = nodeToPush;
    if (nodeToPush.next) nodeToPush.next.prev = nodeToPush;

    this._length++;
  }

  /**
   * Will change its neighbors nodes links
   * @param node - node to delete
   * @throws when node does not exist
   * @returns node with empty links that contain only data
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
    this.insertNodeBetweenTwoNodes(node, this._head, this._tail);
    this._head = node;
  }

  /**
   * @inheritDoc
   */
  public pushFromIndex(value: T, fromIndex: number): void {
    const node: DoubleLinkedNode<T> = new DoubleLinkedNode<T>(value);

    if (this.isEmpty() && fromIndex === 0) {
      this.push(value);
      return;
    }

    const nodeLeft: DoubleLinkedNode<T> = this.getNodeByIndex(fromIndex - 1);
    const nodeRight: DoubleLinkedNode<T> = this.getNodeByIndex(fromIndex);

    this.insertNodeBetweenTwoNodes(node, nodeLeft, nodeRight);
  }

  /**
   * @inheritDoc
   */
  public unshift(value: T): void {
    const node: DoubleLinkedNode<T> = new DoubleLinkedNode<T>(value);
    this.insertNodeBetweenTwoNodes(node, this._tail, this._head);
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

  /**
   * @inheritDoc
   */
  public shift(): T {
    const deletedNode = this.deleteNode(this._tail);
    this._tail = this._head?.next || null;

    return deletedNode.data;
  }

  /**
   * @inheritDoc
   */
  public deleteFromIndex(fromIndex: number): T {
    const nodeToDelete = this.getNodeByIndex(fromIndex);

    if (nodeToDelete === this._tail) {
      return this.shift();
    }
    if (nodeToDelete === this._head) {
      return this.pop();
    }

    const deletedNode = this.deleteNode(nodeToDelete);
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
   * @param fromIndex - where iterator starts from list start
   * @returns iterator instance
   */
  public iterator(fromIndex = 0): IBiDirectIterator<T> {
    let activeNode: DoubleLinkedNode<T> = this.getNodeByIndex(fromIndex);

    return {
      /**
       * @returns current element data
       */
      current: () => {
        return activeNode.data;
      },
      /**
       * @returns boolean - is next element exists
       */
      hasNext(): boolean {
        return Boolean(activeNode.next);
      },
      /**
       * @throws when next element does not exists
       * @returns next element data
       */
      next: (): T => {
        if (!activeNode.next) {
          throw new Error("Next element does not exist");
        }
        activeNode = activeNode.next;
        return activeNode.data;
      },
      /**
       * @throws when prev element does not exists
       * @returns next element data
       */
      prev: (): T => {
        if (!activeNode.prev) {
          throw new Error("Prev element does not exist");
        }
        activeNode = activeNode.prev;
        return activeNode.data;
      },
    };
  }
}
