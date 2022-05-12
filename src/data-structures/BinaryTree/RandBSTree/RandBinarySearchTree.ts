import { FnCompareTwo } from "../../../types/FnCompareTwo";
import RandBinarySearchNode from "./RandBinarySearchNode";
import BinarySearchTree from "../BSTree/BinarySearchTree";

/**
 * Randomized binary search tree implementation
 */
export default class RandBinarySearchTree<T> extends BinarySearchTree<T> {
  /**
   * Override types
   */
  protected _head: RandBinarySearchNode<T> | null;

  /**
   * @inheritDoc
   */
  public constructor(fnCompare?: FnCompareTwo<T>) {
    super(fnCompare);
    this._head = null;
  }

  /**
   * Will update node rank by summing left and right subtrees tanks and itself rank (1)
   */
  private updateRank(node: RandBinarySearchNode<T>): void {
    node.rank = (node.right?.rank || 0) + (node.left?.rank || 0) + 1;
  }

  /**
   * Will set rank and parent attributes and update tree length
   */
  private addCreatedNode(
    node: RandBinarySearchNode<T>,
    parentNode: RandBinarySearchNode<T> | null = null
  ): RandBinarySearchNode<T> {
    node.rank = 1;
    if (parentNode !== null) {
      node.parent = parentNode;
    }
    return node;
  }

  /**
   * Will rotate node to the right side
   */
  private rotateNodeRight(node: RandBinarySearchNode<T>): void {
    const pivot = node.left;
    if (pivot === null) {
      return;
    }
    node.left = pivot.right;
    if (pivot.right !== null) {
      pivot.right.parent = node;
    }
    pivot.parent = node.parent;
    if (node.parent === null) {
      this._head = pivot;
    } else {
      if (node === node.parent.right) {
        node.parent.right = pivot;
      } else {
        node.parent.left = pivot;
      }
    }
    pivot.right = node;
    node.parent = pivot;
    this.updateRank(node);
    this.updateRank(pivot);
  }

  /**
   * Will rotate node to the left side
   */
  private rotateNodeLeft(node: RandBinarySearchNode<T>): void {
    const pivot = node.right;
    if (pivot === null) {
      return;
    }
    node.right = pivot.left;
    if (pivot.left !== null) {
      pivot.left.parent = node;
    }
    pivot.parent = node.parent;
    if (node.parent === null) {
      this._head = pivot;
    } else {
      if (node === node.parent.left) {
        node.parent.left = pivot;
      } else {
        node.parent.right = pivot;
      }
    }
    pivot.left = node;
    node.parent = pivot;
    this.updateRank(node);
    this.updateRank(pivot);
  }

  /**
   * @inheritDoc
   */
  protected join(
    treeLeft: RandBinarySearchNode<T> | null,
    treeRight: RandBinarySearchNode<T> | null
  ): RandBinarySearchNode<T> | null {
    if (treeLeft === null) {
      return treeRight;
    }
    if (treeRight === null) {
      return treeLeft;
    }

    if (Math.random() < treeLeft.rank / (treeLeft.rank + treeRight.rank)) {
      treeLeft.right = this.join(treeLeft.right, treeRight);
      if (treeLeft.right) {
        this.updateLeftRightParents(treeLeft);
      }
      this.updateRank(treeLeft);
      return treeLeft;
    } else {
      treeRight.left = this.join(treeLeft, treeRight.left);
      if (treeRight.left) {
        this.updateLeftRightParents(treeRight);
      }
      this.updateRank(treeRight);
      return treeRight;
    }
  }

  /**
   * @inheritDoc
   */
  protected updateLeftRightParents(node: RandBinarySearchNode<T>): void {
    super.updateLeftRightParents(node);
    this.updateRank(node);
  }

  /**
   * @inheritDoc
   */
  protected insertToRoot(
    createdNode: RandBinarySearchNode<T>,
    fromNode?: RandBinarySearchNode<T>
  ): void {
    const recursiveInsert = (node: RandBinarySearchNode<T>) => {
      if (this.compare(node.data, createdNode.data)) {
        if (node.left === null) {
          node.left = this.addCreatedNode(createdNode, node);
        } else {
          recursiveInsert(node.left);
        }
        this.rotateNodeRight(node);
      } else {
        if (node.right === null) {
          node.right = this.addCreatedNode(createdNode, node);
        } else {
          recursiveInsert(node.right);
        }

        this.rotateNodeLeft(node);
      }
    };

    if (this._head === null) {
      this._head = this.addCreatedNode(createdNode);
    } else {
      fromNode ? recursiveInsert(fromNode) : recursiveInsert(this._head);
    }
  }

  /**
   * @inheritDoc
   */
  protected insertRandomly(createdNode: RandBinarySearchNode<T>): void {
    const recursiveInsertRandomly = (node: RandBinarySearchNode<T>) => {
      const shouldInsertToRoot = Math.random() < 1 / (node.rank + 1);

      if (shouldInsertToRoot) {
        this.insertToRoot(createdNode, node);
      } else {
        node.rank = node.rank + 1;

        if (this.compare(node.data, createdNode.data)) {
          if (node.left === null) {
            node.left = this.addCreatedNode(createdNode, node);
          } else {
            recursiveInsertRandomly(node.left);
          }
        } else {
          if (node.right === null) {
            node.right = this.addCreatedNode(createdNode, node);
          } else {
            recursiveInsertRandomly(node.right);
          }
        }
      }
    };

    if (this._head === null) {
      this._head = this.addCreatedNode(createdNode);
    } else {
      recursiveInsertRandomly(this._head);
    }
  }

  /**
   * @inheritDoc
   */
  public insert(value: T): void {
    if (this.has(value)) {
      throw new Error("Node already exists");
    }
    const createdNode = new RandBinarySearchNode(value);
    this.insertRandomly(createdNode);
  }

  /**
   * @inheritDoc
   */
  public delete(value: T): void {
    super.delete(value);
    this._length = this.length();
  }

  public length(): number {
    return this._head?.rank || 0;
  }
}
