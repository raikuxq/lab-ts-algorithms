# Common algorithms and data structures

Written in Node + TypeScript, tests in Jest.

## Basic
+ [Binary search](src/base/binary-search.ts) [[\_Test\_](src/base/__test/binary-search.test.ts)]
+ [Factorial (+ memoized version)](src/base/factorial.ts) [[\_Test\_](src/base/__test/factorial.test.ts)]
+ [Fibonacci (+ memoized version)](src/base/fibonacci.ts) [[\_Test\_](src/base/__test/fibonacci.test.ts)]

## Sorts
+ [Bubble sort](src/sorts/bubble-sort.ts) [[\_Test\_](src/sorts/__test/sorts.test.ts)]
+ [Selection sort](src/sorts/select-sort.ts) [[\_Test\_](src/sorts/__test/sorts.test.ts)]
+ [Insertion sort](src/sorts/insertion-sort.ts) [[\_Test\_](src/sorts/__test/sorts.test.ts)]
+ [Merge sort](src/sorts/merge-sort.ts) [[\_Test\_](src/sorts/__test/sorts.test.ts)]
+ [Quick sort](src/sorts/quick-sort.ts) [[\_Test\_](src/sorts/__test/sorts.test.ts)]

## Data structures
### [Stack](src/data-structures/Stack/Stack.ts) [[\_Test\_](src/data-structures/Stack/__test__/stack.test.ts)]
### [Queue](src/data-structures/Queue/Queue.ts) [[\_Test\_](src/data-structures/Queue/__test__/queue.test.ts)]
### [Hash table](src/data-structures/HashTable/HashTable.ts) [[\_Test\_](src/data-structures/HashTable/__test__/hash-table.test.ts)]

### [Linked list](src/data-structures/LinkedList)
+ Interfaces
  + [ILinkedList](src/data-structures/LinkedList/ILinkedList.ts)
+ Implementation
  + [Abstract linked list](src/data-structures/LinkedList/AbstractLinkedList.ts)
  + [Single linked list](src/data-structures/LinkedList/SingleLinkedList/SingleLinkedList.ts) [[\_Test\_](src/data-structures/LinkedList/__test__/linked-list.test.ts)]
  + [Double linked list](src/data-structures/LinkedList/DoubleLinkedList/DoubleLinkedList.ts) [[\_Test\_](src/data-structures/LinkedList/__test__/linked-list.test.ts)]

### [Graph](src/data-structures/Graph)
+ Interfaces
    + [IGraph](src/data-structures/Graph/IGraph.ts)
    + [IGraphIterator](src/data-structures/Graph/IGraphIterator.ts)
    + [IGraphIterationstrategy](src/data-structures/Graph/IGraphIterationStrategy.ts)
+ Implementation
    + [Abstract graph](src/data-structures/Graph/graph/AbstractGraph.ts)
    + [Directed graph](src/data-structures/Graph/graph/DirectedGraph.ts) [[\_Test\_](src/data-structures/Graph/__test__/graph.test.ts)]
    + [Undirected graph](src/data-structures/Graph/graph/UndirectedGraph.ts) [[\_Test\_](src/data-structures/Graph/__test__/graph.test.ts)]
+ Iterators
    + [Breadth first search Iterator](src/data-structures/Graph/iterator/GraphIteratorBFS.ts)
    + [Depth first search Iterator](src/data-structures/Graph/iterator/GraphIteratorDFS.ts)
    + [Dijkstra method Iterator](src/data-structures/Graph/iterator/GraphIteratorDijkstra.ts)
+ Searching
    + [Has path (BFS/DFS)](src/data-structures/Graph/searching/hasPath.ts) [[\_Test\_](src/data-structures/Graph/__test__/graph-has-path.test.ts)]
    + [Shortest path (BFS/DFS/Dijkstra)](src/data-structures/Graph/searching/shortestPath.ts) [[\_Test\_](src/data-structures/Graph/__test__/graph-shortest-path.test.ts)]
+ [Presenter](src/data-structures/Graph/presenter/GraphPresenter.ts) [[\_Test\_](src/data-structures/Graph/__test__/graph-presenter.test.ts)]
