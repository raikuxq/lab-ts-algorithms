# shortest-path

Find the shortest path between two vertices

::: tip The shortest path problem
\- is the problem of finding a path between two vertices (or nodes) in a graph such that the sum of the weights of its
constituent edges is minimized.

[wiki/shortest_path_problem](https://en.wikipedia.org/wiki/Shortest_path_problem)
:::

### Import

```ts
import {shortestPath} from "@raikuxq/alg-ds/algorithms";

shortestPath(graph, from, to, strategy);
```

### Params:

| Name     | Type                         | Required | Default | Description   |
|----------|------------------------------|----------|---------|---------------|
| graph    | `IGraph<T>`                  | +        |         | Given graph   |
| from     | `T`                          | +        |         | Start of path |
| to       | `T`                          | +        |         | End of path   |
| strategy | `IGraphIterationStrategy<T>` | +        |         | BFS/Dijkstra  |

### Returns: `Array<T>`

### Throws:

- when start vertex does not exist
- when end vertex does not exist
- when there is no path at all between two vertices

### Example usage in weighted graph (Dijkstra)

```ts
import {shortestPath} from "@raikuxq/alg-ds/algorithms";
import {Graph} from "@raikuxq/alg-ds/data-structures";
import {DijkstraIterationStrategy} from "@raikuxq/alg-ds/algorithms";

const graph = new Graph<string>();
const strategy = new DijkstraIterationStrategy();

graph
    .addVertex("Mike")
    .addVertex("Bob")
    .addVertex("Lisa")
    .addVertex("Aaron")
    .addVertex("James")
    .addVertex("Anna")
    .addEdge("Mike", "Bob", 5)
    .addEdge("Mike", "Lisa", 3)
    .addEdge("Lisa", "Aaron", 3)
    .addEdge("Lisa", "James", 3)
    .addEdge("James", "Aaron", 3)
    .addEdge("James", "Anna", 6)
    .addEdge("Bob", "Anna", 15);

/**
 * Bob -> Mike (5) -> Anna (15) = 20
 * Mike -> Lisa (3) -> James (3) -> Anna (6) = 12
 */
shortestPath(graph, 'A', 'B', strategy); // ["Mika", "Lisa", "James", "Anna"]

```

### Example usage in unweighted graph (BFS)

```ts
import {shortestPath} from "@raikuxq/alg-ds/algorithms";
import {Graph} from "@raikuxq/alg-ds/data-structures";
import {BFSIterationStrategy} from "@raikuxq/alg-ds/algorithms";

const graph = new Graph<string>();
const strategy = new BFSIterationStrategy();

graph
    .addVertex("Mike")
    .addVertex("Bob")
    .addVertex("Lisa")
    .addVertex("Aaron")
    .addVertex("James")
    .addVertex("Anna")
    .addEdge("Mike", "Bob")
    .addEdge("Mike", "Aaron")
    .addEdge("Mike", "Lisa")
    .addEdge("Lisa", "James")
    .addEdge("Lisa", "Aaron")
    .addEdge("James", "Aaron")
    .addEdge("James", "Anna")
    .addEdge("Aaron", "Anna");

/**
 * Mike -> Aaron -> Lisa -> James -> Anna
 * Mike -> Aaron -> Anna
 * Mike -> Lisa -> James -> Anna
 */

shortestPath(graph, "Mike", "Anna", strategy); //["Mike", "Aaron", "Anna"])
```
