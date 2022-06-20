# BinarySearchTree\<T>

::: tip Binary search tree
In computer science, a binary search tree (BST), also called an ordered or sorted binary tree, is a rooted binary tree
data structure with the key of each internal node being greater than all the keys in the respective node's left subtree
and less than the ones in its right subtree. The time complexity of operations on the binary search tree is directly
proportional to the height of the tree.

[wiki/binary_search_tree](https://en.wikipedia.org/wiki/Binary_search_tree)
:::

::: tip Randomized binary search tree
In computer science and probability theory, a random binary tree is a binary tree selected at random from some
probability distribution on binary trees.

[wiki/randomized_bst](https://en.wikipedia.org/wiki/Random_binary_tree)
:::

## Import

```ts
import {BinarySearchTree, RandBinarySearchTree} from "@raikuxq/alg-ds/data-structures";

const tree = new BinarySearchTree();
const treeRand = new RandBinarySearchTree();
```

## Implements interfaces

### `IBinaryTree`

```ts
const tree: IBinaryTree = new BinarySearchTree();
```

## Methods

### `constructor(fnCompare?: number): Stack<T>`

Creates empty instance
| Name | Type | Required | Default | Description |
|----------|----------|----------|------------------|------------------------------|
| fnCompare | `FnCompareTwo` | - | `(a: T, b: T) => a > b` | Callback function that will be called for comparing LEFT
and RIGHT nodes |

### `insert(value: T): void`

Add value to top of tree
| Name | Type | Required | Default | Description |
|-------|------|----------|---------|--------------|
| value | `T`    | + | - | |

### `has(value: T): boolean`

Check is tree has given value
| Name | Type | Required | Default | Description |
|-------|------|----------|---------|----------------|
| value | `T`    | + | - | |

### `delete(value: T): void`

Delete value from tree and restructure it

### `subtree(value: T): IBinaryTree<T>`

Copy subtree from given root node
| Name | Type | Required | Default | Description |
|-------|------|----------|---------|----------------|
| value | `T`    | + | - | Root node of copy tree|

### `max(): T`

Find maximum value in the tree

### `min(): T`

Find minimum value in the tree

### `traverse(type: EnumTreeTraversalType): Array<T>`

Convert a tree into array by using given traversing method
| Name | Type | Required | Default | Description |
|-------|------|----------|---------|----------------|
| type | `EnumTreeTraversalType`    | + | - | preorder/inorder/postorder |

### `length(): number`

Get count of nodes in a tree

### `height(): number`

Get max length from all branches in a tree

## Example usage

```ts
import {BinarySearchTree} from "@raikuxq/alg-ds/data-structures";
import {EnumTreeTraversalType} from "@raikuxq/alg-ds/types";

const tree: IBinaryTree<number> = new BinarySearchTree();

tree.insert(5);
tree.insert(12);
tree.insert(7);
tree.insert(20);

tree.max(); // 20
tree.min(); // 5
tree.traverse(EnumTreeTraversalType.InOrder); // [5,7,12,20]

tree.has(20); // true
tree.delete(20);
tree.has(20); // false

```
