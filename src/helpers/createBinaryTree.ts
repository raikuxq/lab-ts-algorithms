import { EnumBinarySearchTreeType } from "../types/EnumBinarySearchTreeType";
import BinarySearchTree from "../data-structures/BinaryTree/BSTree/BinarySearchTree";
import RandBinarySearchTree from "../data-structures/BinaryTree/RandBSTree/RandBinarySearchTree";
import IBinaryTree from "../types/IBinaryTree";

/**
 * Returns binary tree by type
 */
export const createBinaryTree = <T>(
  type: EnumBinarySearchTreeType
): IBinaryTree<T> => {
  let binaryTree: IBinaryTree<T>;

  switch (type) {
    case EnumBinarySearchTreeType.BST:
      binaryTree = new BinarySearchTree();
      break;
    case EnumBinarySearchTreeType.RANDOMIZED_BST:
      binaryTree = new RandBinarySearchTree();
      break;
  }

  return binaryTree;
};
