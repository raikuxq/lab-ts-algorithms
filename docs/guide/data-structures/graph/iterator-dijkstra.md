# GraphIteratorDijkstra

::: tip Dijkstra
\- Dijkstra's algorithm to find the shortest path between a and b. It picks the unvisited vertex with the lowest
distance, calculates the distance through it to each unvisited neighbor, and updates the neighbor's distance if smaller.

[wiki/dijkstra_algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)
:::

### Import

```ts
import {GraphIteratorDijkstra} from "@raikuxq/alg-ds/algorithms";

const iteratorBfs = new GraphIteratorDijkstra(graph);
```

### Params:

| Name  | Type        | Required | Default | Description |
|-------|-------------|----------|---------|-------------|
| graph | `IGraph<T>` | +        |         | Given graph |

### Returns: `IIterator<T>`

### Iterator methods:

#### `next(): T`

Iterate to next element (depends on iteration strategy)

+ throws when there is no next element (check with `hasNext` instead)

#### `current(): T`

Get current element

+ throws when there is no current element

#### `hasNext(): boolean`

Check is there next element available

### Example usage

```ts
import {Graph} from "@raikuxq/alg-ds/data-structures";
import {GraphIteratorDijkstra} from "@raikuxq/alg-ds/algorithms";

const graph = new Graph<string>();
const iterator = new GraphIteratorDijkstra(graph);

iterator.initIterator();

while (iterator.hasNext()) {
    const next = iterator.next();

    if (next === to) {
        break;
    }
}

const path = iterator.getPath(from, to);
```
