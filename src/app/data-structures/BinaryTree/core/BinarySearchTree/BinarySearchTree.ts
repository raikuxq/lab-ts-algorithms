import { FnCompareTwo } from "src/app/types/FnCompareTwo";
import { EnumTreeTraversalType } from "src/app/types/EnumTreeTraversalType";
import IBinaryTree from "src/app/types/IBinaryTree";
import AbstractBinaryTree from "src/app/data-structures/BinaryTree/core/AbstractBinaryTree/AbstractBinaryTree";
import BinarySearchNode from "src/app/data-structures/BinaryTree/core/BinarySearchTree/BinarySearchNode";
import Queue from "src/app/data-structures/Queue/Queue";
import IsAlreadyExistsException from "src/app/exceptions/IsAlreadyExistsException";
import IsNotFoundException from "src/app/exceptions/IsNotFoundException";
import CollectionIsEmptyException from "src/app/exceptions/CollectionIsEmptyException";

/**
 * Unbalanced binary search tree implementation
 */
export default class BinarySearchTree<T> extends AbstractBinaryTree<T> {
  /**
   * Override types
   */
  protected _head: BinarySearchNode<T> | null;

  /**
   * @inheritDoc
   */
  public constructor(fnCompare?: FnCompareTwo<T>) {
    super(fnCompare);
    this._head = null;
  }

  /**
   *
   * @throws {CollectionIsEmptyException} when tree is empty
   */
  protected checkIsEmpty(): void {
    if (this._head === null) {
      throw new CollectionIsEmptyException("Tree is empty");
    }
  }

  /**
   * Will update left and right links parent with current node
   */
  protected updateLeftRightParents(node: BinarySearchNode<T>): void {
    if (node.left && node.left.parent !== node) {
      node.left.parent = node;
    }
    if (node.right && node.right.parent !== node) {
      node.right.parent = node;
    }
  }

  /**
   * Will return node instance by its data
   */
  protected findNode(value: T): BinarySearchNode<T> | null {
    let current = this._head;

    while (current && current.data !== value) {
      current = this.compare(current.data, value)
        ? current.left
        : current.right;
    }

    return current;
  }

  /**
   * @inheritDoc
   */
  protected insertToLeaf(createdNode: BinarySearchNode<T>): void {
    let parent = null;
    let current = this._head;

    while (current) {
      parent = current;

      current = this.compare(current.data, createdNode.data)
        ? current.left
        : current.right;
    }

    createdNode.parent = parent;

    if (parent === null) {
      this._head = createdNode;
    } else {
      if (this.compare(parent.data, createdNode.data)) {
        parent.left = createdNode;
      } else {
        parent.right = createdNode;
      }
    }
    this._length++;
  }

  /**
   * Will join two trees into one   */
  protected join(
    treeLeft: BinarySearchNode<T> | null,
    treeRight: BinarySearchNode<T> | null,
  ): BinarySearchNode<T> | null {
    if (treeLeft === null) {
      return treeRight;
    }
    if (treeRight === null) {
      return treeLeft;
    }

    treeRight.left = this.join(treeLeft, treeRight.left);
    if (treeRight.left) {
      this.updateLeftRightParents(treeRight);
    }
    return treeRight;
  }

  /**
   * @inheritDoc
   * @throws {CollectionIsEmptyException} when tree is empty
   */
  public max(): T {
    this.checkIsEmpty();
    let currentNode = this._head;
    while (currentNode?.right) {
      currentNode = currentNode.right;
    }
    return currentNode!.data;
  }

  /**
   * @inheritDoc
   * @throws {CollectionIsEmptyException} when tree is empty
   */
  public min(): T {
    this.checkIsEmpty();
    let currentNode = this._head;
    while (currentNode?.left) {
      currentNode = currentNode.left;
    }
    return currentNode!.data;
  }

  /**
   * @inheritDoc
   * @throws {IsAlreadyExistsException} when node already exists
   */
  public insert(value: T): void {
    if (this.has(value)) {
      throw new IsAlreadyExistsException("Node already exists");
    }
    const createdNode = new BinarySearchNode(value);
    this.insertToLeaf(createdNode);
  }

  /**
   * @inheritDoc
   */
  public has(value: T): boolean {
    const current = this.findNode(value);
    return current?.data === value;
  }

  /**
   * @inheritDoc
   * @throws {IsNotFoundException} when node was not found
   */
  public delete(value: T): void {
    if (!this.has(value)) {
      throw new IsNotFoundException("Value does not exist in the tree");
    }

    const recursiveDelete = (node: BinarySearchNode<T> | null, value: T) => {
      if (node === null) {
        return node;
      }

      if (node.data === value) {
        const updatedNode = this.join(node.left, node.right);
        if (updatedNode) {
          updatedNode.parent = node.parent;
        }
        return updatedNode;
      } else if (this.compare(node.data, value)) {
        node.left = recursiveDelete(node.left, value);
      } else {
        node.right = recursiveDelete(node.right, value);
      }
      this.updateLeftRightParents(node);
      return node;
    };

    this._head = recursiveDelete(this._head, value);
    this._length--;
  }

  /**
   * @inheritDoc
   */
  public subtree(value: T): IBinaryTree<T> {
    const tree = new BinarySearchTree<T>();
    const node = this.findNode(value);
    const queue = new Queue<BinarySearchNode<T> | null>();

    const traverse = [];
    queue.push(node);

    while (!queue.isEmpty()) {
      const currentNode = queue.pop();
      traverse.push(currentNode);
      if (currentNode?.left) {
        queue.push(currentNode.left);
      }
      if (currentNode?.right) {
        queue.push(currentNode.right);
      }
    }

    traverse.forEach((elem) => {
      if (elem !== null) {
        tree.insert(elem.data);
      }
    });

    return tree;
  }

  /**
   * @inheritDoc
   * @throws {CollectionIsEmptyException} when tree is empty
   */
  public traverse(type: EnumTreeTraversalType, from?: T): Array<T> {
    this.checkIsEmpty();

    const result: Array<T> = [];
    const root = from !== undefined ? this.findNode(from) : this._head;

    switch (type) {
      case EnumTreeTraversalType.IN_ORDER:
        this.storeInOrder(root, result);
        break;
      case EnumTreeTraversalType.PRE_ORDER:
        this.storePreOrder(root, result);
        break;
      case EnumTreeTraversalType.POST_ORDER:
        this.storePostOrder(root, result);
        break;
    }

    return result;
  }

  private storeInOrder(node: BinarySearchNode<T> | null, acc: Array<T>): void {
    if (!node) return;
    this.storeInOrder(node.left, acc);
    acc.push(node.data);
    this.storeInOrder(node.right, acc);
  }

  private storePreOrder(node: BinarySearchNode<T> | null, acc: Array<T>): void {
    if (!node) return;
    acc.push(node.data);
    this.storePreOrder(node.left, acc);
    this.storePreOrder(node.right, acc);
  }

  private storePostOrder(
    node: BinarySearchNode<T> | null,
    acc: Array<T>,
  ): void {
    if (!node) return;
    this.storePostOrder(node.left, acc);
    this.storePostOrder(node.right, acc);
    acc.push(node.data);
  }

  /**
   * Calc max height of the largest branch of the tree
   */
  public height(): number {
    const calcHeight = (node: BinarySearchNode<T>) => {
      if (node === null) return 0;
      const left: number = node.left === null ? -1 : calcHeight(node.left);
      const right: number = node.right === null ? -1 : calcHeight(node.right);
      const max = left > right ? left : right;
      return max + 1;
    };

    if (this._head === null) {
      return 0;
    } else {
      return calcHeight(this._head) + 1;
    }
  }
}
