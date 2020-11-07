import IIterator from "../../IIterator";
import IIterable from "../../IIterable";
import AbstractLinkedList from "../AbstractLinkedList";
import SingleLinkedNode from "./SingleLinkedNode";

export default class SingleLinkedList<T>
  extends AbstractLinkedList<T>
  implements IIterable<T> {
  protected _head: SingleLinkedNode<T> | null;
  protected _tail: SingleLinkedNode<T> | null;
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
  protected insertNodeBetweenHeadAndTail(node: SingleLinkedNode<T>): void {
    if (this._head) {
      this._head.next = node;
      this._head.next.next = this._tail;
    }

    this._length++;
  }

  /**
   * Will change it's neighbors nodes links
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
    if (!this._tail) this._tail = node;

    this.insertNodeBetweenHeadAndTail(node);
    this._head = node;
  }

  /**
   * @inheritDoc
   */
  public unshift(value: T): void {
    const node: SingleLinkedNode<T> = new SingleLinkedNode<T>(value);
    if (!this._head) this._head = node;

    this.insertNodeBetweenHeadAndTail(node);
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
   *
   * @param {Number} fromIndex - where iterator starts
   */
  public iterator(fromIndex = 0): IIterator<T> {
    let activeNode: SingleLinkedNode<T> = this.getNodeByIndex(fromIndex);

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
    };
  }
}
