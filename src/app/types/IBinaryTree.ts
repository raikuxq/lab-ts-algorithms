import { EnumTreeTraversalType } from "./EnumTreeTraversalType";

export default interface IBinaryTree<T> {
  has(value: T): boolean;
  insert(value: T): void;
  delete(value: T): void;
  subtree(value: T): IBinaryTree<T>;
  max(): T;
  min(): T;
  length(): number;
  height(): number;
  traverse(type: EnumTreeTraversalType): Array<T>;
}
