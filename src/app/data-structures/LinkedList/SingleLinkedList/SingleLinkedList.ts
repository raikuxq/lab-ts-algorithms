import AbstractLinkedList from "../AbstractLinkedList/AbstractLinkedList";
import SingleLinkedNode from "./SingleLinkedNode";

/**
 * Linear data structure
 * Each node has next
 * Head's next node is tail
 */
export default class SingleLinkedList<T> extends AbstractLinkedList<T> {
  /**
   * Override types
   */
  protected _head: SingleLinkedNode<T> | null;
  protected _tail: SingleLinkedNode<T> | null;

  /**
   * @inheritDoc
   */
  public constructor(capacity?: number) {
    super(capacity);
    this._head = null;
    this._tail = null;
  }

  /**
   * Find previous sibling of given node
   */
  private getPrevNode(
    node: SingleLinkedNode<T> | null
  ): SingleLinkedNode<T> | null {
    let currentNode = this._tail;
    while (currentNode?.next !== node) {
      currentNode = currentNode?.next || null;
    }
    return currentNode;
  }

  /**
   * @inheritDoc
   */
  protected createNode(value: T): SingleLinkedNode<T> {
    return new SingleLinkedNode<T>(value);
  }

  /**
   * @inheritDoc
   */
  protected insertNodeBetweenTwoNodesImpl(
    targetNode: SingleLinkedNode<T>,
    leftNode: SingleLinkedNode<T>,
    rightNode: SingleLinkedNode<T>
  ): void {
    targetNode.next = rightNode;

    if (leftNode) {
      leftNode.next = targetNode;
    }
  }

  /**
   * @inheritDoc
   */
  protected deleteNodeImpl(node: SingleLinkedNode<T>): void {
    this.getPrevNode(node)!.next = node.next;
    node.next = null;
  }

  /**
   * @inheritDoc
   */
  protected popImpl(): void {
    this._head = this.getPrevNode(this._tail);
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
    let currentNode: SingleLinkedNode<T> | null = this._tail;
    let prevNode: SingleLinkedNode<T> | null = this._head;
    let index = 0;

    while (index < this._length) {
      const next = currentNode?.next || null;

      if (currentNode) {
        currentNode.next = prevNode;
      }

      index++;
      prevNode = currentNode;
      currentNode = next;
    }

    if (currentNode) {
      this._head = currentNode;
      this._tail = currentNode.next;
    }
  }
}
