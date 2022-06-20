# GraphIteratorDFS

::: tip Depth-first search
\- is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (
selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch
before backtracking.

[wiki/depth-first_search](https://en.wikipedia.org/wiki/Depth-first_search)
:::

### Import

```ts
import {GraphIteratorDFS} from "@raikuxq/alg-ds/algorithms";

const iteratorBfs = new GraphIteratorDFS(graph);
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
import {GraphIteratorDFS} from "@raikuxq/alg-ds/algorithms";

const graph = new Graph<string>();
const iterator = new GraphIteratorDFS(graph);

iterator.initIterator();

while (iterator.hasNext()) {
    const next = iterator.next();

    if (next === to) {
        break;
    }
}

const path = iterator.getPath(from, to);
```
