# Has path algorithm

Check if graph has a path between two vertices

### Import

```ts
import {hasPath} from "@raikuxq/alg-ds/algorithms";
```

### API reference

API: [/api/algorithms/graph/has-path](/api/algorithms/graph/has-path)

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
