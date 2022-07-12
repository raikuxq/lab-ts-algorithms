import AbstractLinkedList from "../AbstractLinkedList/AbstractLinkedList";
import DoubleLinkedNode from "./DoubleLinkedNode";

/**
 * Linear data structure
 * Each node has next and prev sibling
 * Head and tail are linked to each other
 */
export default class DoubleLinkedList<T> extends AbstractLinkedList<T> {
  /**
   * Override types
   */
  protected _head: DoubleLinkedNode<T> | null;
  protected _tail: DoubleLinkedNode<T> | null;

  /**
   * @inheritDoc
   */
  public constructor(capacity?: number) {
    super(capacity);
    this._head = null;
    this._tail = null;
  }

  /**
   * @inheritDoc
   */
  protected createNode(value: T): DoubleLinkedNode<T> {
    return new DoubleLinkedNode<T>(value);
  }

  /**
   * @inheritDoc
   */
  protected insertNodeBetweenTwoNodesImpl(
    targetNode: DoubleLinkedNode<T>,
    leftNode: DoubleLinkedNode<T>,
    rightNode: DoubleLinkedNode<T>
  ): void {
    targetNode.next = rightNode;
    targetNode.prev = leftNode;

    if (targetNode.prev) {
      targetNode.prev.next = targetNode;
    }
    if (targetNode.next) {
      targetNode.next.prev = targetNode;
    }
  }

  /**
   * @inheritDoc
   */
  protected deleteNodeImpl(node: DoubleLinkedNode<T>): void {
    node!.prev!.next = node!.next;
    node!.next!.prev = node!.prev;
    node!.next = null;
    node!.prev = null;
  }

  /**
   * @inheritDoc
   */
  protected popImpl(): void {
    this._head = this._tail?.prev || null;
  }

  /**
   * @inheritDoc
   */
  protected shiftImpl(): void {
    this._tail = this._head?.next || null;
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
}
