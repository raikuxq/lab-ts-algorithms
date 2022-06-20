# create-graph-from-matrix

Creates a graph from N*N adjacency matrix that contains 1 in case of edge exists or 0 in case it does not

### Import

```ts
import {createGraphFromMatrix} from "@raikuxq/alg-ds/algorithms";

createGraphFromMatrix(matrix, fieldsList, type);
```

### Params:

| Name       | Type            | Required | Default | Description                    |
|------------|-----------------|----------|---------|--------------------------------|
| matrix     | `ArrayMatrix`   | +        |         | Adjacency matrix N*N           |
| fieldsList | `Array<T>`      | +        |         | Ordered list of all vertices   |
| type       | `EnumGraphType` | +        |         | `'Undirected'` or `'Directed'` |

### Returns: `IGraph<T>`

### Example usage

```ts
import {createGraphFromMatrix} from "@raikuxq/alg-ds/algorithms";
import {DirectedGraph} from "@raikuxq/alg-ds/data-structures";
import {EnumGraphType} from "@raikuxq/alg-ds/types"

/**
 * Directed graph:
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
    EnumGraphType.Directed
);
```
