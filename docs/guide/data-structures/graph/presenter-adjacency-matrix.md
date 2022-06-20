# presenter-adjacency-matrix

::: tip Adjacency matrix
\- is a square matrix used to represent a finite graph. The elements of the matrix indicate whether pairs of vertices
are adjacent or not in the graph.

[wiki/adjacency_matrix](https://en.wikipedia.org/wiki/Adjacency_matrix)
:::

### Import

```ts
import {presenterAdjacencyMatrix} from "@raikuxq/alg-ds/algorithms";

presenterAdjacencyMatrix(graph);
```

### Params:

| Name  | Type               | Required | Default | Description |
|-------|--------------------|----------|---------|-------------|
| graph | `DirectedGraph<T>` | +        |         |             |

### Returns: `DirectedGraph<T>`

### Example usage

```ts
import {presenterAdjacencyMatrix} from "@raikuxq/alg-ds/algorithms";
import {DirectedGraph} from "@raikuxq/alg-ds/data-structures";

const graph: IGraph<number> = new UndirectedGraph();

graph
    .addVertex(1)
    .addVertex(2)
    .addVertex(3)
    .addVertex(4)
    .addEdge(1, 2)
    .addEdge(1, 3)
    .addEdge(3, 4);


const matrix = presenterAdjacencyMatrix(graph);

/**
 matrix:
 [
 [0, 1, 1, 0],
 [1, 0, 0, 0],
 [1, 0, 0, 1],
 [0, 0, 1, 0],
 ]
 */
```
