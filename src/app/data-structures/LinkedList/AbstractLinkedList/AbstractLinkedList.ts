import AbstractLinkedNode from "./AbstractLinkedNode";
import ILinkedList from "../../../types/ILinkedList";
import ValueOutOfRangeException from "../../../exceptions/ValueOutOfRangeException";
import CollectionIsFullException from "../../../exceptions/CollectionIsFullException";
import CollectionIsEmptyException from "../../../exceptions/CollectionIsEmptyException";
import IndexOutOfBoundsException from "../../../exceptions/IndexOutOfBoundsException";

export default abstract class AbstractLinkedList<T> implements ILinkedList<T> {
  protected readonly _capacity: number;
  protected _length: number;
  protected _head: AbstractLinkedNode<T> | null;
  protected _tail: AbstractLinkedNode<T> | null;

  /**
   * Create empty instance
   */
  protected constructor(capacity?: number) {
    this._capacity = AbstractLinkedList.calculateCapacity(capacity);
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  /**
   * Will calculate real capacity value
   * @throws {ValueOutOfRangeException} when capacity is out of range
   */
  private static calculateCapacity(capacity?: number) {
    if (capacity === undefined) {
      return Number.MAX_VALUE;
    }
    if (capacity <= 0) {
      throw new ValueOutOfRangeException("Capacity must be larger than 0");
    }

    return capacity;
  }

  /**
   * Will insert node between nodeLeft and nodeRight
   * @throws {CollectionIsFullException} when list is full
   */
  private insertNodeBetweenTwoNodes(
    targetNode: AbstractLinkedNode<T>,
    leftNode: AbstractLinkedNode<T> | null,
    rightNode: AbstractLinkedNode<T> | null
  ): void {
    if (this.isFull()) {
      throw new CollectionIsFullException(
        "List is full, no more space available"
      );
    }
    if (this._head === null) {
      this._head = targetNode;
    }
    if (this._tail === null) {
      this._tail = targetNode;
    }
    if (!leftNode) {
      leftNode = this._tail;
    }
    if (!rightNode) {
      rightNode = this._head;
    }

    this.insertNodeBetweenTwoNodesImpl(targetNode, leftNode, rightNode);
    this._length++;
  }

  /**
   * Will remove the node from its neighbors nodes links
   * @throws {CollectionIsEmptyException} when list is empty
   */
  private deleteNode(node: AbstractLinkedNode<T>): AbstractLinkedNode<T> {
    if (this.isEmpty()) {
      throw new CollectionIsEmptyException(
        "cannot delete because list is empty"
      );
    }

    this.deleteNodeImpl(node);
    this._length--;

    if (this.isEmpty()) {
      this.clear();
    }
    return node;
  }

  /**
   * Will find node by its index
   * @throws {CollectionIsEmptyException} when list is empty
   * @throws {IndexOutOfBoundsException} when given index is out of range
   */
  protected getNodeByIndex(index: number): AbstractLinkedNode<T> {
    const isIndexNotInRange = index < 0 || index > this._length;

    if (this.isEmpty()) {
      throw new CollectionIsEmptyException("List is empty");
    }
    if (isIndexNotInRange) {
      throw new IndexOutOfBoundsException("Index exceed list length");
    }

    let currentNode = this._tail;
    let counter = 0;

    while (currentNode && counter < index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode!;
  }

  /**
   * Will set links between target, left and right siblings
   */
  protected abstract insertNodeBetweenTwoNodesImpl(
    nodeToPush: AbstractLinkedNode<T>,
    nodeLeft: AbstractLinkedNode<T>,
    nodeRight: AbstractLinkedNode<T>
  ): void;

  /**
   * Will unset itself links and its neighbors links
   */
  protected abstract deleteNodeImpl(node: AbstractLinkedNode<T>): void;

  /**
   * Update head link
   */
  protected abstract popImpl(): void;

  /**
   * Update tail link
   */
  protected abstract shiftImpl(): void;

  /**
   * Will create empty node instance
   */
  protected abstract createNode(value: T): AbstractLinkedNode<T>;

  /**
   * Push into start
   * @throws {CollectionIsFullException} when there is no space available
   */
  public unshift(value: T): void {
    const node = this.createNode(value);
    this.insertNodeBetweenTwoNodes(node, this._head, this._tail);
    this._tail = node;
  }

  /**
   * Push into end
   * @throws {CollectionIsFullException} when there is no space available
   */
  public push(value: T): void {
    const node = this.createNode(value);
    this.insertNodeBetweenTwoNodes(node, this._head, this._tail);
    this._head = node;
  }

  /**
   * Push from index
   * @throws {IndexOutOfBoundsException} when given index is out of range
   * @throws {CollectionIsFullException} when there is no space available
   */
  public pushFromIndex(value: T, fromIndex: number): void {
    const isIndexNotInRange = fromIndex < 0 || fromIndex > this._length;
    const shouldPushAsFirst = this.isEmpty() && fromIndex === 0;

    if (isIndexNotInRange) {
      throw new IndexOutOfBoundsException(
        "index must be in range between 0 and list length"
      );
    }
    if (shouldPushAsFirst) {
      this.push(value);
    } else {
      const node = this.createNode(value);
      const nodeLeft = this.getNodeByIndex(fromIndex - 1);
      const nodeRight = this.getNodeByIndex(fromIndex);
      this.insertNodeBetweenTwoNodes(node, nodeLeft, nodeRight);
    }
  }

  /**
   * Delete node from list's end
   * @throws {CollectionIsEmptyException} when list is empty
   */
  public pop(): T {
    const deletedNode = this.deleteNode(this._head!);
    this.popImpl();
    return deletedNode.data;
  }

  /**
   * Delete node from list's start and get its data
   * @throws {CollectionIsEmptyException} when list is empty
   */
  public shift(): T {
    const deletedNode = this.deleteNode(this._tail!);
    this.shiftImpl();
    return deletedNode.data;
  }

  /**
   * Delete node from list by index from start
   * @throws {CollectionIsEmptyException} when list is empty
   */
  public deleteFromIndex(fromIndex: number): T {
    const nodeToDelete = this.getNodeByIndex(fromIndex);
    const deletedNode = this.deleteNode(nodeToDelete);
    return deletedNode.data;
  }

  /**
   * List length
   */
  public length(): number {
    return this._length;
  }

  /**
   * Is list empty
   */
  public isEmpty(): boolean {
    return this._length === 0 || this._head === null || this._tail === null;
  }

  /**
   * Is list full
   */
  public isFull(): boolean {
    return this._length >= this._capacity;
  }

  /**
   * Check if element exists in list
   */
  public has(item: T): boolean {
    return this.getAsArray().includes(item);
  }

  /**
   * Get head element data
   * @throws {CollectionIsEmptyException} when head does not exist
   */
  public peek(): T {
    if (this.isEmpty() || !this._head) {
      throw new CollectionIsEmptyException("head does not exist");
    }

    return this._head.data;
  }

  /**
   * Get tail element data
   * @throws {CollectionIsEmptyException} when tail does not exists
   */
  public peekFromStart(): T {
    if (this.isEmpty() || !this._tail) {
      throw new CollectionIsEmptyException("tail does not exist");
    }

    return this._tail.data;
  }

  /**
   * Get list element by index from start
   * @throws {CollectionIsEmptyException} when list is empty
   * @throws {IndexOutOfBoundsException} when given index is out of range
   */
  public peekByIndex(index: number): T {
    const node = this.getNodeByIndex(index);
    return node.data;
  }

  /**
   * Remove all elements from list
   */
  public clear(): void {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  /**
   * Get elements as an array
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
   * Add elements to list from array
   * @throws {CollectionIsFullException} when list is full
   * */
  public pushFromArray(elements: Array<T>): void {
    elements.forEach((element: T) => {
      if (this.isFull()) {
        throw new CollectionIsFullException(
          "List is full, no more space available"
        );
      }
      this.push(element);
    });
  }

  /**
   * Reverse list nodes links and swap head with tail
   * @example "4>7>10" will be reversed to "10>7>4"
   */
  public abstract reverse(): void;
}
