# Common algorithms and data structures

Written in TypeScript, tested with Jest.

## Algorithms


### Basic
+ [binary-search](src/algorithms/binary-search.ts) [[ test ](src/algorithms/__test/binary-search.test.ts)]
+ [factorial (+ memoized version)](src/algorithms/factorial.ts) [[ test ](src/algorithms/__test/factorial.test.ts)]
+ [fibonacci (+ memoized version)](src/algorithms/fibonacci.ts) [[ test ](src/algorithms/__test/fibonacci.test.ts)]


### Sorts
+ [bubble-sort](src/algorithms/sorts/bubble-sort.ts) [[ test ](src/algorithms/sorts/__test/sorts.test.ts)]
+ [selection-sort](src/algorithms/sorts/select-sort.ts) [[ test ](src/algorithms/sorts/__test/sorts.test.ts)]
+ [insertion-sort](src/algorithms/sorts/insertion-sort.ts) [[ test ](src/algorithms/sorts/__test/sorts.test.ts)]
+ [merge-sort](src/algorithms/sorts/merge-sort.ts) [[ test ](src/algorithms/sorts/__test/sorts.test.ts)]
+ [quick-sort](src/algorithms/sorts/quick-sort.ts) [[ test ](src/algorithms/sorts/__test/sorts.test.ts)]




## Data structures


### Linked List
+ Interfaces
  + [ILinkedList](src/types/ILinkedList.ts)
+ Implementation
  + [AbstractLinkedNode](src/data-structures/LinkedList/AbstractLinkedNode.ts)
  + [SingleLinkedNode](src/data-structures/LinkedList/SingleLinkedList/SingleLinkedNode.ts)
  + [DoubleLinkedNode](src/data-structures/LinkedList/DoubleLinkedList/DoubleLinkedNode.ts)
  + [AbstractLinkedList](src/data-structures/LinkedList/AbstractLinkedList.ts)
  + [SingleLinkedList](src/data-structures/LinkedList/SingleLinkedList/SingleLinkedList.ts) [[ test ](src/data-structures/LinkedList/__test__/linked-list.test.ts)]
  + [DoubleLinkedList](src/data-structures/LinkedList/DoubleLinkedList/DoubleLinkedList.ts) [[ test ](src/data-structures/LinkedList/__test__/linked-list.test.ts)]


### Stack
+ Interfaces
  + [IStack](src/types/IStack.ts)
+ Implementation
  + [Stack](src/data-structures/Stack/Stack.ts) [[ test ](src/data-structures/Stack/__test__/stack.test.ts)]


### Queue
+ Interfaces
  + [IQueue](src/types/IQueue.ts)
+ Implementation
  + [Queue](src/data-structures/Queue/Queue.ts) [[ test ](src/data-structures/Queue/__test__/queue.test.ts)]


### Hash Table
+ Interfaces
  + [IHashTable](src/types/IHashTable.ts)
+ Implementation
  + [HashTable](src/data-structures/HashTable/HashTable.ts) [[ test ](src/data-structures/HashTable/__test__/hash-table.test.ts)]


### Graph
+ Interfaces
    + [IGraph](src/types/IGraph.ts)
    + [IGraphIterator](src/types/IGraphIterator.ts)
    + [IGraphIterationStrategy](src/types/IGraphIterationStrategy.ts)
+ Implementation
    + [GraphEdge](src/data-structures/Graph/GraphEdge.ts)
    + [AbstractGraph](src/data-structures/Graph/AbstractGraph.ts)
    + [DirectedGraph](src/data-structures/Graph/DirectedGraph.ts) [[ test ](src/data-structures/Graph/__test__/graph.test.ts)]
    + [UndirectedGraph](src/data-structures/Graph/UndirectedGraph.ts) [[ test ](src/data-structures/Graph/__test__/graph.test.ts)]
+ Iterators
    + [BreadthFirstSearchIterator](src/data-structures/Graph/iterator/GraphIteratorBFS.ts)
    + [DepthFirstSearchIterator](src/data-structures/Graph/iterator/GraphIteratorDFS.ts)
    + [DijkstraMethodIterator](src/data-structures/Graph/iterator/GraphIteratorDijkstra.ts)
+ Presenter
    + [GraphPresenter](src/data-structures/Graph/presenter/GraphPresenter.ts) [[ test ](src/data-structures/Graph/__test__/graph-presenter.test.ts)]
+ Searching
    + [has-path (BFS/DFS)](src/data-structures/Graph/searching/hasPath.ts) [[ test ](src/data-structures/Graph/__test__/graph-has-path.test.ts)]
    + [shortest-path (BFS/DFS/Dijkstra)](src/data-structures/Graph/searching/shortestPath.ts) [[ test ](src/data-structures/Graph/__test__/graph-shortest-path.test.ts)]
