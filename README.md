Common algorithms and data structures

Written in TypeScript, tested with Jest

# Getting started

Clone this repository and install dependencies by using `yarn` command

+ `yarn test` - run all tests via jest  

+ `yarn dev` - run in dev mode via nodemon (src/index.ts is an entrypoint)

+ `yarn build` - compile ts sources into js files

+ `yarn start` - build and run in production mode

+ `yarn lint` - lint check via eslint

+ `yarn lint:fix` - fix source files via eslint



# Navigation

## Uncategorized algorithms
+ [memoization](src/utils.ts)
+ [matrix-transpose](src/utils.ts)
+ [binary-search](src/algorithms/binary-search.ts) [[ unit tests ](test/binary-search.test.ts)]
+ [factorial](src/algorithms/factorial.ts) [[ unit tests ](test/factorial.test.ts)]
+ [fibonacci](src/algorithms/fibonacci.ts) [[ unit tests ](test/fibonacci.test.ts)]

## Sorting algorithms
+ [bubble-sort](src/algorithms/sorts/bubble-sort.ts) [[ unit tests ](test/sorts.test.ts)]
+ [selection-sort](src/algorithms/sorts/select-sort.ts) [[ unit tests ](test/sorts.test.ts)]
+ [insertion-sort](src/algorithms/sorts/insertion-sort.ts) [[ unit tests ](test/sorts.test.ts)]
+ [merge-sort](src/algorithms/sorts/merge-sort.ts) [[ unit tests ](test/sorts.test.ts)]
+ [quick-sort](src/algorithms/sorts/quick-sort.ts) [[ unit tests ](test/sorts.test.ts)]



## Common of data structures

#### Interfaces
+ [IIterable](src/types/IIterable.ts)
  + Allows to create an iterator instance
+ [IBiDirectIterable](src/types/IBiDirectIterable.ts)
  + Allows to create a bi-direct iterator instance
  + Extends [IIterable](src/types/IIterable.ts) interface
+ [IIterator](src/types/IIterator.ts)
  + Allows only next navigation
+ [IBiDirectIterator](src/types/IBiDirectIterator.ts)
  + Allows both next and prev navigation
  + Extends [IIterator](src/types/IIterator.ts) interface


## Linear data structures

#### Interfaces
+ [ILinearStorage](src/types/ILinearStorage.ts)
  + Contains common methods of linear data structures
+ [ILinearStorageRA](src/types/ILinearStorageRA.ts) 
  + Allows random access (from end, from start, by index)
  + Extends [ILinearStorage](src/types/ILinearStorage.ts) interface
+ [IConvertableToArray](src/types/IConvertableToArray.ts)
  + Contain methods for converting from/into array


### Linked List
#### Interfaces
+ [ILinkedList](src/types/ILinkedList.ts)
  + Contains basic linked lists operations
  + Extends [ILinearStorageRA](src/types/ILinearStorageRA.ts) interface
  + Extends [IConvertableToArray](src/types/IConvertableToArray.ts) interface
#### Implementation
+ [AbstractLinkedList](src/data-structures/LinkedList/AbstractLinkedList.ts)
  + Common logic for both single and double linked lists
  + Implements [ILinearStorageRA](src/types/ILinearStorageRA.ts) interface
+ [SingleLinkedList](src/data-structures/LinkedList/SingleLinkedList/SingleLinkedList.ts) 
  + Extends abstract linked list with implementation of one-way linking
  + Implements [IIterable](src/types/IIterable.ts) interface
+ [DoubleLinkedList](src/data-structures/LinkedList/DoubleLinkedList/DoubleLinkedList.ts)
  + Extends abstract linked list with implementation of two-way linking
  + Implements [IBiDirectIterable](src/types/IBiDirectIterable.ts) interface
#### Tests
  + [ Unit tests ](test/linked-list.test.ts)


### Looped Array
#### Interfaces
+ [IArrayFacade](src/types/IArrayFacade.ts)
  + Contains basic array operations
  + Extends [ILinearStorageRA](src/types/ILinearStorageRA.ts) interface
  + Extends [IConvertableToArray](src/types/IConvertableToArray.ts) interface
#### Implementation
+ [LoopedArray](src/data-structures/LoopedArray/LoopedArray.ts) 
  + Overwrites data on capacity overflow
#### Tests
+ [ Unit tests ](test/looped-array.test.ts)


### Stack
+ [Stack](src/data-structures/Stack/Stack.ts) [[ tests ](test/stack.test.ts)]
  + LIFO data structure
  + Implements [ILinearStorage](src/types/ILinearStorage.ts) interface


### Queue
+ [Queue](src/data-structures/Queue/Queue.ts) [[ tests ](test/queue.test.ts)]
  + FIFO data structure
  + Implements [ILinearStorage](src/types/ILinearStorage.ts) interface
  


## Non-linear data structures

### Graph
#### Interfaces
+ [IGraph](src/types/IGraph.ts)
  + Contains basic graph operations  
+ [IGraphIterator](src/types/IGraphIterator.ts)
  + Extends default iterator with init and getPath methods
+ [IGraphIterationStrategy](src/types/IGraphIterationStrategy.ts)
  + Iteration strategies which is used in shortest-path, has-path 
#### Implementation
+ [GraphEdge](src/data-structures/Graph/GraphEdge.ts)
  + Contains from/to links and edge weight
+ [AbstractGraph](src/data-structures/Graph/AbstractGraph.ts)
  + Common logic for both directed and undirected graphs
+ [DirectedGraph](src/data-structures/Graph/DirectedGraph.ts) 
  + In case of directed graph A->B and B->A edges are not the same
+ [UndirectedGraph](src/data-structures/Graph/UndirectedGraph.ts) 
  + In case of undirected graph A->B and B->A are equal
#### Tests
  + [ Unit tests ](test/graph.test.ts)


#### Graph Iterators

+ [BreadthFirstSearchIterator](src/data-structures/Graph/iterator/GraphIteratorBFS.ts)
  + Traversal method for unweighted graphs, built on queue
+ [DepthFirstSearchIterator](src/data-structures/Graph/iterator/GraphIteratorDFS.ts)
  + Traversal method for unweighted graphs, built on stack 
+ [DijkstraMethodIterator](src/data-structures/Graph/iterator/GraphIteratorDijkstra.ts)
  + Traversal method for weighted graphs, built on finding the minimal cost


#### Graph Presenter
+ [presenter-adjacency-lists](src/data-structures/Graph/presenter/presenterAdjacencyLists.ts)  [[ tests ](test/graph.presenter.lists.test.ts)]
  + Representation of graph as an adjacency list (using Map)
+ [presenter-adjacency-matrix](src/data-structures/Graph/presenter/presenterAdjacencyMatrix.ts)  [[ tests ](test/graph.presenter.matrix.test.ts)]
  + Representation of graph as an adjacency matrix (using Array N*N)


#### Graph Searching
+ [has-path (BFS/DFS)](src/data-structures/Graph/searching/hasPath.ts)  [[ tests ](test/graph.has-path.test.ts)]
    + Search for the existence of a path between two vertices
+ [shortest-path (BFS/Dijkstra)](src/data-structures/Graph/searching/shortestPath.ts)  [[ tests ](test/graph.shortest-path.test.ts)]
  + Search for one of several shortest paths between two vertices

#### Graph Creators
+ [create-graph-from-matrix](src/helpers/createGraphFromMatrix.ts)  [[ tests ](test/graph.create-from-matrix.test.ts)]
  + Convert a matrix N*N into a graph instance


#### Graph Transposing
+ [transpose-directed-graph](src/data-structures/Graph/transposing/transposeDirectedGraph.ts)  [ [ tests ](test/graph.transpose.test.ts)]
  + Transpose a directed graph (undirected graphs are symmetrical already)
