import RandBinarySearchTree from "../../data-structures/BinaryTree/RandBSTree/RandBinarySearchTree";
import BinarySearchTree from "../../data-structures/BinaryTree/BSTree/BinarySearchTree";
import { EnumTreeTraversalType } from "../../types/EnumTreeTraversalType";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const util = require("util");

const logTree = <T>(tree: BinarySearchTree<T>) => {
  console.log("HEIGHT");
  console.log(tree.height());
  console.log("LENGTH");
  console.log(tree.length());
  console.log("MAX");
  console.log(tree.max());
  console.log("MIN");
  console.log(tree.min());
};

export const bstCompare = (): void => {
  const bstLeaf = new BinarySearchTree<number>();
  const bstRand = new RandBinarySearchTree<number>();

  const arraySrc = Array.from(Array(1000).keys());

  arraySrc.forEach((num, index) => {
    bstLeaf.insert(num);
    bstRand.insert(num);
  });

  console.log(
    "***************************LEAF TREE*****************************"
  );
  logTree(bstLeaf);
  console.log(
    "\n\n\n***************************RAND TREE*****************************"
  );
  logTree(bstRand);
};
