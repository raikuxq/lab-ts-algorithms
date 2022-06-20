# has-path

Check if graph has a path between two vertices

### Import

```ts
import {hasPath} from "@raikuxq/alg-ds/algorithms";

hasPath(graph, from, to, strategy);
```

### Params:

| Name     | Type                         | Required | Default | Description      |
|----------|------------------------------|----------|---------|------------------|
| graph    | `IGraph<T>`                  | +        |         | Given graph      |
| from     | `T`                          | +        |         | Start of path    |
| to       | `T`                          | +        |         | End of path      |
| strategy | `IGraphIterationStrategy<T>` | +        |         | BFS/DFS/Dijkstra |

### Returns: `Boolean`

### Throws:

- when start vertex does not exist
- when end vertex does not exist

### Example usage

```ts
import {hasPath} from "@raikuxq/alg-ds/algorithms";
import {Graph} from "@raikuxq/alg-ds/data-structures";
import {BFSIterationStrategy} from "@raikuxq/alg-ds/algorithms";

const graph = new Graph<string>();
graph.addVertex('A').addVertex('B').addEdge('A', 'B');

const strategy = new BFSIterationStrategy();
const graphHasPath = hasPath<string>(graph, 'A', 'B', strategy); // true
```
