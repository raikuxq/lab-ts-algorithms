# IGraph\<T>

::: tip Graph
In mathematics, and more specifically in graph theory, a graph is a structure amounting to a set of objects in which
some pairs of the objects are in some sense "related". The objects correspond to mathematical abstractions called
vertices (also called nodes or points) and each of the related pairs of vertices is called an edge (also called link or
line)
:::

::: tip Directed graph
A directed graph or digraph is a graph in which edges have orientations.
:::

::: tip Weighted graph
A weighted graph or a network is a graph in which a number (the weight) is assigned to each edge. Such weights might
represent for example costs, lengths or capacities, depending on the problem at hand.
:::

## Import

```ts
import {UndirectedGraph, DirectedGraph} from "@raikuxq/alg-ds/value-structures";

const graphUndirected = new UndirectedGraph();
const graphDirected = new DirectedGraph();
```

## Implements interfaces

### `IGraph`

```ts
const graphUndirected: IGraph = new UndirectedGraph();
const graphDirected: IGraph = new DirectedGraph();
```

## Methods

### `constructor(): IGraph<T>`

Creates empty instance

### `weight(): number`

Sum of all edges in graph

### `vertices(): Array<T>`

Only vertices itself without edges and weight info

### `verticesCount(): number`

Count of vertices

### `edgesCount(): number`

Count of all edges (it's different in directed and undirected graphs)

### `addVertex(value: T): IGraph<T>`

Create new graph node
| Name | Type | Required | Default | Description |
|-------|------|----------|---------|--------------|
| value | `T`    | + | - | |

### `removeVertex(value: T): IGraph<T>`

Remove vertex and all related edges
| Name | Type | Required | Default | Description |
|-------|------|----------|---------|--------------|
| value | `T`    | + | - | |

### `hasVertex(value: T): boolean`

Check if graph has given vertex
| Name | Type | Required | Default | Description |
|-------|------|----------|---------|--------------|
| value | `T`    | + | - | |

### `getVertexNeighbors(value: T): Array<T>`

Get neighbor vertices of given vertex

### `addEdge(from: T, to: T, weight?: number): IGraph<T>`

Add new edge between two given vertices
| Name | Type | Required | Default | Description |
|-------|------|----------|---------|--------------|
| from | `T`    | + | - | Start vertex |
| to | `T`    | + | - | End vertex |
| weight | `number`    | - | 0 | Edge weight |

::: tip Difference between directed and undirected graphs
In case of undirected graph, edges A->B and B->A are the same  
Instead, in case of directed graph, they are not equal
:::

::: tip When edge already exists
In case of already existed edge, its weight just will be updated
:::

### `removeEdge(from: T, to: T): IGraph<T>`

Remove edge between two given vertices
| Name | Type | Required | Default | Description |
|-------|------|----------|---------|--------------|
| from | `T`    | + | - | Start vertex |
| to | `T`    | + | - | End vertex |

### `hasEdge(from: T, to: T): boolean`

Check if graph has edge between two given vertices
| Name | Type | Required | Default | Description |
|-------|------|----------|---------|--------------|
| from | `T`    | + | - | Start vertex |
| to | `T`    | + | - | End vertex |

### `getEdgeWeight(from: T, to: T): number`

Get weight of edge between two given vertices
| Name | Type | Required | Default | Description |
|-------|------|----------|---------|--------------|
| from | `T`    | + | - | Start vertex |
| to | `T`    | + | - | End vertex |

## Example usage

```ts
import {UndirectedGraph} from "@raikuxq/alg-ds/value-structures";

const graph = new UndirectedGraph<string>();

graph
    .addVertex("Mike")
    .addVertex("Bob")
    .addVertex("Lisa")
    .addEdge("Mike", "Bob", 5)
    .addEdge("Bob", "Lisa", 10);

graph.hasVertex("Mike"); // true
graph.hasEdge("Mike", "Bob"); // true
graph.hasEdge("Mike", "Lisa"); // false
graph.getEdgeWeight("Mike", "Bob"); // 5

graph.removeVertex("Bob", "Lisa");
graph.hasEdge("Bob", "Lisa"); // false
```
