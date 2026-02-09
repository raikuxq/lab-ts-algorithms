import { EnumBinarySearchTreeType } from "src/app/types/EnumBinarySearchTreeType";
import BinarySearchTree from "src/app/data-structures/BinaryTree/core/BinarySearchTree/BinarySearchTree";
import RandBinarySearchTree from "src/app/data-structures/BinaryTree/core/RandBinarySearchTree/RandBinarySearchTree";
import IBinaryTree from "src/app/types/IBinaryTree";

/**
 * Returns binary tree by type
 */
export const createBinaryTree = <T>(
  type: EnumBinarySearchTreeType,
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
