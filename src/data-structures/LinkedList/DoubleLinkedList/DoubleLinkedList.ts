import IBiDirectIterator from "../../../types/IBiDirectIterator";
import IBiDirectIterable from "../../../types/IBiDirectIterable";
import AbstractLinkedList from "../AbstractLinkedList/AbstractLinkedList";
import DoubleLinkedNode from "./DoubleLinkedNode";
import IsNotFoundException from "../../../exceptions/IsNotFoundException";

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

  /**
   * List iterator
   */
  public iterator(fromIndex = 0): IBiDirectIterator<T> {
    const head = this._head;
    const tail = this._tail;
    let activeNode = this.getNodeByIndex(fromIndex) as DoubleLinkedNode<T>;

    const iterator: IBiDirectIterator<T> = {
      /**
       * @inheritDoc
       */
      current: () => {
        return activeNode.data;
      },
      /**
       * @inheritDoc
       */
      hasNext(): boolean {
        return Boolean(activeNode.next) && activeNode !== head;
      },
      /**
       * @inheritDoc
       */
      hasPrev(): boolean {
        return Boolean(activeNode.prev) && activeNode !== tail;
      },
      /**
       * @inheritDoc
       * @throws when next element does not exist
       */
      next: (): T => {
        if (!iterator.hasNext()) {
          throw new IsNotFoundException("Next element does not exist");
        }
        activeNode = activeNode.next!;
        return activeNode.data;
      },
      /**
       * @inheritDoc
       * @throws when prev element does not exists
       */
      prev: (): T => {
        if (!iterator.hasPrev()) {
          throw new IsNotFoundException("Prev element does not exist");
        }
        activeNode = activeNode.prev!;
        return activeNode.data;
      },
    };

    return iterator;
  }
}
