# Create Graph From Matrix

Creates a graph from N*N adjacency matrix

::: tip Adjacency matrix
Is a matrix that contains 1 in case of edge exists or 0 in case it does not
:::

### Import

```ts
import {createGraphFromMatrix} from "@raikuxq/alg-ds/algorithms";
```

### API reference

API: [/api/algorithms/graph/create-graph-from-matrix](/api/algorithms/graph/create-graph-from-matrix)

### Example usage

```ts
import {createGraphFromMatrix} from "@raikuxq/alg-ds/algorithms";
import {DirectedGraph} from "@raikuxq/alg-ds/data-structures";
import {EnumGraphType} from "@raikuxq/alg-ds/types"

/**
 * DIRECTED graph:
 * - Bob [Maria]
 * - Maria [Bob, John]
 * - John []
 *
 * Its matrix:
 *       |  Bob  | Maria |  John |
 * Bob   |   0   |   1   |   0   |
 * Maria |   1   |   0   |   1   |
 * John  |   0   |   0   |   0   |
 */

const fieldsList: Array<string> = ["Bob", "Maria", "John"];

const matrix: ArrayMatrix = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
];
const graph: IGraph<string> = createGraphFromMatrix<string>(
    matrix,
    fieldsList,
    EnumGraphType.DIRECTED
);
```
