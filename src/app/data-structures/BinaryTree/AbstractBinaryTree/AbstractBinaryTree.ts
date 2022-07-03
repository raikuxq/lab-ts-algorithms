import IBinaryTree from "../../../types/IBinaryTree";
import AbstractBinaryNode from "./AbstractBinaryNode";
import { FnCompareTwo } from "../../../types/FnCompareTwo";
import { EnumTreeTraversalType } from "../../../types/EnumTreeTraversalType";

/**
 *
 */
export default abstract class AbstractBinaryTree<T> implements IBinaryTree<T> {
  /**
   * Function that checks is node A better
   * @default a > b
   * @example 5 > 4
   * @example 'abc' > 'aba'
   */
  protected compare: FnCompareTwo<T> = (a: T, b: T) => a > b;
  protected _head: AbstractBinaryNode<T> | null;
  protected _length: number;

  /**
   *
   * @param fnCompare
   * @protected
   */
  protected constructor(fnCompare?: FnCompareTwo<T>) {
    if (fnCompare) {
      this.compare = fnCompare;
      console.log(this.compare);
    }
    this._head = null;
    this._length = 0;
  }

  /**
   * Returns nodes count in the entire tree
   */
  public length(): number {
    return this._length;
  }

  /**
   * Will create new node and place it according to the type of tree rules
   */
  public abstract insert(value: T): void;

  /**
   * Will check if tree has a node with given data
   */
  public abstract has(value: T): boolean;

  /**
   * Will delete node from the tree and restructure it
   */
  public abstract delete(value: T): void;

  /**
   * Max value of the tree
   */
  public abstract max(): T;

  /**
   * Min value of the tree
   */
  public abstract min(): T;

  /**
   * Returns same class instance with new head node
   */
  public abstract subtree(value: T): IBinaryTree<T>;

  /**
   * Returns the highest branch length in the tree
   */
  public abstract height(): number;

  /**
   * In-order/Pre-order/Post-order traversing of the tree
   */
  public abstract traverse(type: EnumTreeTraversalType): Array<T>;
}
