Common algorithms and data structures.

Written in TypeScript, tested with Jest.

# Getting started

Clone this repository and install dependencies by using `yarn` command.

+ `yarn test` - run all tests via jest  

+ `yarn dev` - run in dev mode via nodemon (src/index.ts is an entrypoint)

+ `yarn build` - compile ts sources into js files

+ `yarn start` - build and run in production mode

+ `yarn lint` - lint check via eslint

+ `yarn lint:fix` - fix source files via eslint



# Navigation
+ [Algorithms](#algorithms)
  + [Sorting algorithms](#sorting-algorithms)
+ [Iterators](#iterators)
+ [Linear data structures](#linear-data-structures)
  + [Linked list](#linked-list)
  + [Looped array](#looped-array)
  + [Stack](#stack)
  + [Queue](#queue)
+ [Non-linear data structures](#non-linear-data-structures)
  + [Graph](#graph)
  + [Binary tree](#binary-trees)


# Algorithms

## Uncategorized algorithms
[memoize](src/algorithms/memoize.ts) — Memoization util function.

[binary-search](src/algorithms/binary-search.ts) [[ tests ](test/unit/algorithms/binary-search.test.ts)] — Binary searching algorithm. Time: O(log(n)).

[factorial](src/algorithms/factorial.ts) [[ tests ](test/unit/algorithms/factorial.test.ts)] — Recursive O(n!) and memoized O(n) factorial implementation.

[fibonacci](src/algorithms/fibonacci.ts) [[ tests ](test/unit/algorithms/fibonacci.test.ts)] — Recursive O(n!) and memoized O(n) factorial implementation.

[transpose-matrix](src/algorithms/transpose-matrix.ts) [[ tests ](test/unit/algorithms/transpose-matrix.test.ts)]  — Transpose N*N matrix util function.


## Sorting algorithms
[bubble-sort](src/algorithms/sorts/bubble-sort.ts) [[ tests ](test/unit/algorithms/sorts.test.ts)] — Time: O(n^2) worst, O(n^2) avg, O(n) best. Memory: O(1) worst.

[selection-sort](src/algorithms/sorts/select-sort.ts) [[ tests ](test/unit/algorithms/sorts.test.ts)] — Time: O(n^2) worst, O(n^2) avg, O(n^2) best. Memory: O(1) worst. 

[insertion-sort](src/algorithms/sorts/insertion-sort.ts) [[ tests ](test/unit/algorithms/sorts.test.ts)] — Time: O(n^2) worst, O(n^2) avg, O(n) best. Memory: O(1) worst. 

[merge-sort](src/algorithms/sorts/merge-sort.ts) [[ tests ](test/unit/algorithms/sorts.test.ts)] — Time: O(n*log(n)) worst, O(n*log(n)) avg, O(n*log(n)) best. Memory: O(n) worst. 

[quick-sort](src/algorithms/sorts/quick-sort.ts) [[ tests ](test/unit/algorithms/sorts.test.ts)] — Time: O(n^2) worst, O(n*log(n)) avg, O(n*log(n)) best. Memory: O(1) worst. 




# Iterators

### Interfaces
[IIterable](src/types/IIterable.ts) — Allows to create an iterator instance.

[IBiDirectIterable](src/types/IBiDirectIterable.ts) — Allows to create a bi-direct iterator instance. 
Extends [IIterable](src/types/IIterable.ts) interface.

[IIterator](src/types/IIterator.ts) — Allows only next navigation.

[IBiDirectIterator](src/types/IBiDirectIterator.ts) — Allows both next and prev navigation. 
Extends [IIterator](src/types/IIterator.ts) interface.


# Linear data structures

### Interfaces
[ILinearStorage](src/types/ILinearStorage.ts) — Contains common methods of linear data structures.

[ILinearStorageRA](src/types/ILinearStorageRA.ts) — Allows random access (from end, from start, by index). 
Extends [ILinearStorage](src/types/ILinearStorage.ts) interface.

[IConvertableToArray](src/types/IConvertableToArray.ts) — Contain methods for converting from/into array.


## Linked List

### Interfaces
[ILinkedList](src/types/ILinkedList.ts) — Contains basic linked lists operations.
Extends [ILinearStorageRA](src/types/ILinearStorageRA.ts) and [IConvertableToArray](src/types/IConvertableToArray.ts) interface.

### Implementation
[AbstractLinkedList](src/data-structures/LinkedList/AbstractLinkedList.ts) — Common logic for both single and double linked lists.
Implements [ILinearStorageRA](src/types/ILinearStorageRA.ts) interface.

[SingleLinkedList](src/data-structures/LinkedList/SingleLinkedList/SingleLinkedList.ts) 
[ [ tests ] ](test/unit/data-structures/linked-list/linked-list.test.ts)
— Extends abstract linked list with implementation of one-way linking. 
Implements [IIterable](src/types/IIterable.ts) interface.

[DoubleLinkedList](src/data-structures/LinkedList/DoubleLinkedList/DoubleLinkedList.ts) 
[ [ tests ] ](test/unit/data-structures/linked-list/linked-list.test.ts)
— Extends abstract linked list with implementation of two-way linking.
Implements [IBiDirectIterable](src/types/IBiDirectIterable.ts) interface.


## Looped Array

### Interfaces
[IArrayFacade](src/types/IArrayFacade.ts) — Contains basic array operations. 
Extends [ILinearStorageRA](src/types/ILinearStorageRA.ts) interface. 
Extends [IConvertableToArray](src/types/IConvertableToArray.ts) interface.

### Implementation
[LoopedArray](src/data-structures/LoopedArray/LoopedArray.ts)[ [ tests ]](test/unit/data-structures/looped-array/looped-array.test.ts)
— Overwrites data on capacity overflow.

## Stack

### Implementation
[Stack](src/data-structures/Stack/Stack.ts) [[ tests ](test/unit/data-structures/stack/stack.test.ts)] 
— LIFO data structure. Implements [ILinearStorage](src/types/ILinearStorage.ts) interface.

## Queue

### Implementation
[Queue](src/data-structures/Queue/Queue.ts) [[ tests ](test/unit/data-structures/queue/queue.test.ts)] 
— FIFO data structure. Implements [ILinearStorage](src/types/ILinearStorage.ts) interface.
  


# Non linear data structures

## Graph
### Interfaces
[IGraph](src/types/IGraph.ts) — Contains basic graph operations.

[IGraphIterator](src/types/IGraphIterator.ts) — Extends default iterator with init and getPath methods.

[IGraphIterationStrategy](src/types/IGraphIterationStrategy.ts) — Iteration strategies which are used in shortest-path, has-path.

### Implementation
[GraphEdge](src/data-structures/Graph/GraphEdge.ts) — Contains from/to links and edge weight.

[AbstractGraph](src/data-structures/Graph/AbstractGraph.ts) — Common logic for both directed and undirected graphs.


[DirectedGraph](src/data-structures/Graph/DirectedGraph.ts) [ [ tests ] ](test/unit/data-structures/graph/graph.test.ts) 
— In case of directed graph A->B and B->A edges are not the same.

[UndirectedGraph](src/data-structures/Graph/UndirectedGraph.ts) [ [ tests ] ](test/unit/data-structures/graph/graph.test.ts) 
— In case of undirected graph A->B and B->A are equal.


### Graph Iterators

[BreadthFirstSearchIterator](src/data-structures/Graph/iterator/GraphIteratorBFS.ts) 
— Traversal method for unweighted graphs, built on queue.

[DepthFirstSearchIterator](src/data-structures/Graph/iterator/GraphIteratorDFS.ts)
— Traversal method for unweighted graphs, built on stack.

[DijkstraMethodIterator](src/data-structures/Graph/iterator/GraphIteratorDijkstra.ts)
— Traversal method for weighted graphs, built on finding the minimal cost.


### Graph Presenter
[presenter-adjacency-lists](src/data-structures/Graph/presenter/presenterAdjacencyLists.ts)  [[ tests ](test/unit/data-structures/graph/graph.presenter.lists.test.ts)] 
— Representation of graph as an adjacency list (using Map).

[presenter-adjacency-matrix](src/data-structures/Graph/presenter/presenterAdjacencyMatrix.ts)  [[ tests ](test/unit/data-structures/graph/graph.presenter.matrix.test.ts)]
— Representation of graph as an adjacency matrix (using Array N*N).


### Graph Searching
[has-path (BFS/DFS)](src/data-structures/Graph/searching/hasPath.ts)  [[ tests ](test/unit/data-structures/graph/graph.has-path.test.ts)] 
— Search for the existence of a path between two vertices.

[shortest-path (BFS/Dijkstra)](src/data-structures/Graph/searching/shortestPath.ts)  [[ tests ](test/unit/data-structures/graph/graph.shortest-path.test.ts)] 
— Search for one of several shortest paths between two vertices.

### Graph Creators
[create-graph-from-matrix](src/helpers/createGraphFromMatrix.ts)  [[ tests ](test/unit/data-structures/graph/graph.create-from-matrix.test.ts)] 
— Convert a matrix N*N into a graph instance.


### Graph Transposing
[transpose-directed-graph](src/data-structures/Graph/transposing/transposeDirectedGraph.ts)  [ [ tests ](test/unit/data-structures/graph/graph.transpose.test.ts)]
— Transpose a directed graph (undirected graphs are symmetrical already).



## Binary trees
[IBinaryTree](src/types/IBinaryTree.ts) — Contains basic binary tree operations.

### Implementation

[AbstractBinaryNode](src/data-structures/BinaryTree/AbstractBinaryTree/AbstractBinaryNode.ts) — Contains left/right/parent links and node data.

[AbstractBinaryTree](src/data-structures/BinaryTree/AbstractBinaryTree/AbstractBinaryTree.ts) — Common logic for all types of binary trees.

  
[BinarySearchNode](src/data-structures/BinaryTree/BSTree/BinarySearchNode.ts) — Same as abstract binary node.

[BinarySearchTree](src/data-structures/BinaryTree/BSTree/BinarySearchTree.ts) — Implementation of unbalanced binary search tree. 
Each node in left subtree is smaller and each node in right subtree is larger than the node data. 
Extends [AbstractSearchTree](src/data-structures/BinaryTree/AbstractBinaryTree/AbstractBinaryTree.ts).



[RandBinarySearchNode](src/data-structures/BinaryTree/RandBSTree/RandBinarySearchNode.ts) — Have a rank attribute. 
Extends [BinarySearchNode](src/data-structures/BinaryTree/BSTree/BinarySearchNode.ts).

[RandBinarySearchTree](src/data-structures/BinaryTree/RandBSTree/RandBinarySearchTree.ts) 
— Implementation of randomized binary search tree, which gives expected log(N) height. 
Insertion have a 1/N+1 probability of inserting into root. 
Extends [BinarySearchTree](src/data-structures/BinaryTree/BSTree/BinarySearchTree.ts).
