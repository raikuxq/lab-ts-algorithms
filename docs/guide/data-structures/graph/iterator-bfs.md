# GraphIteratorBFS

::: tip Breadth-first search
\- is an algorithm for searching a tree data structure for a node that satisfies a given property. It starts at the tree
root and explores all nodes at the present depth prior to moving on to the nodes at the next depth level.

[wiki/breadth-first_search](https://en.wikipedia.org/wiki/Breadth-first_search)
:::

### Import

```ts
import {GraphIteratorBFS} from "@raikuxq/alg-ds/algorithms";

const iteratorBfs = new GraphIteratorBFS(graph);
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
import {GraphIteratorBFS} from "@raikuxq/alg-ds/algorithms";

const graph = new Graph<string>();
const iterator = new GraphIteratorBFS(graph);

iterator.initIterator();

while (iterator.hasNext()) {
    const next = iterator.next();

    if (next === to) {
        break;
    }
}

const path = iterator.getPath(from, to);
```
