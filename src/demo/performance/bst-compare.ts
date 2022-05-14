import RandBinarySearchTree from "../../data-structures/BinaryTree/RandBinarySearchTree/RandBinarySearchTree";
import BinarySearchTree from "../../data-structures/BinaryTree/BinarySearchTree/BinarySearchTree";
import { EnumTreeTraversalType } from "../../types/EnumTreeTraversalType";
import IBinaryTree from "../../types/IBinaryTree";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const util = require("util");

const logTree = <T>(tree: IBinaryTree<T>) => {
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
  logTree<number>(bstLeaf);
  console.log(
    "\n\n\n***************************RAND TREE*****************************"
  );
  logTree<number>(bstRand);
};
