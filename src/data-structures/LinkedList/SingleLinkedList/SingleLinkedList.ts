import IIterator from "../../../types/IIterator";
import IIterable from "../../../types/IIterable";
import AbstractLinkedList from "../AbstractLinkedList";
import SingleLinkedNode from "./SingleLinkedNode";

/**
 * Linear data structure
 * Each node has next
 * Head's next node is tail
 */
export default class SingleLinkedList<T>
  extends AbstractLinkedList<T>
  implements IIterable<T> {
  /**
   * Override types
   */
  protected _head: SingleLinkedNode<T> | null;
  protected _tail: SingleLinkedNode<T> | null;
  protected _length: number;

  /**
   * @inheritDoc
   */
  public constructor(capacity?: number) {
    super(capacity);
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  /**
   * Will insert node between nodeLeft and nodeRight
   */
  protected insertNodeBetweenTwoNodes(
    nodeToPush: SingleLinkedNode<T>,
    nodeLeft: SingleLinkedNode<T> | null,
    nodeRight: SingleLinkedNode<T> | null
  ): void {
    if (this.isFull()) throw new Error("List is full, no more space available");

    if (!this._head) this._head = nodeToPush;
    if (!this._tail) this._tail = nodeToPush;

    if (!nodeLeft) nodeLeft = this._tail;
    if (!nodeRight) nodeRight = this._head;

    nodeToPush.next = nodeRight;

    if (nodeLeft) nodeLeft.next = nodeToPush;

    this._length++;
  }

  /**
   * Will remove the node from its neighbors nodes links
   * @throws when node does not exist
   */
  protected deleteNode(node: SingleLinkedNode<T> | null): SingleLinkedNode<T> {
    if (node === null) {
      throw new Error("Node should be existed");
    }

    const getPrevNode = (): SingleLinkedNode<T> | null => {
      let currentNode = this._tail;
      while (currentNode?.next !== node) {
        currentNode = currentNode?.next || null;
      }
      return currentNode;
    };

    const getNextNode = (): SingleLinkedNode<T> | null => {
      return node.next;
    };

    const prevNode = getPrevNode();
    const nextNode = getNextNode();

    if (prevNode) {
      prevNode.next = nextNode;
      this._length--;
      this._tail = prevNode;
    }

    return node;
  }

  /**
   * @inheritDoc
   */
  protected getNodeByIndex(index: number): SingleLinkedNode<T> {
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
    const node: SingleLinkedNode<T> = new SingleLinkedNode<T>(value);
    this.insertNodeBetweenTwoNodes(node, this._head, this._tail);
    this._head = node;
  }

  /**
   * @inheritDoc
   */
  public pushFromIndex(value: T, fromIndex: number): void {
    const node: SingleLinkedNode<T> = new SingleLinkedNode<T>(value);

    if (this.isEmpty() && fromIndex === 0) {
      this.push(value);
      return;
    }

    const nodeLeft: SingleLinkedNode<T> = this.getNodeByIndex(fromIndex - 1);
    const nodeRight: SingleLinkedNode<T> = this.getNodeByIndex(fromIndex);

    this.insertNodeBetweenTwoNodes(node, nodeLeft, nodeRight);
  }

  /**
   * @inheritDoc
   */
  public unshift(value: T): void {
    const node: SingleLinkedNode<T> = new SingleLinkedNode<T>(value);
    this.insertNodeBetweenTwoNodes(node, this._head, this._tail);
    this._tail = node;
  }

  /**
   * @inheritDoc
   */
  public pop(): T {
    const deletedNode = this.deleteNode(this._head);

    return deletedNode.data;
  }

  /**
   * @inheritDoc
   */
  public shift(): T {
    const deletedNode = this.deleteNode(this._tail);

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

  /**
   * List iterator
   */
  public iterator(fromIndex = 0): IIterator<T> {
    let activeNode: SingleLinkedNode<T> = this.getNodeByIndex(fromIndex);

    return {
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
        return Boolean(activeNode.next);
      },
      /**
       * @inheritDoc
       * @throws when next element does not exist
       */
      next: () => {
        if (!activeNode.next) {
          throw new Error("Next element does not exist");
        }
        activeNode = activeNode.next;
        return activeNode.data;
      },
    };
  }
}
