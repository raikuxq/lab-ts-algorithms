# transpose-matrix

::: tip Matrix transpose
\- In linear algebra, the transpose of a matrix is an operator which flips a matrix over its diagonal; that is, it
switches the row and column indices of the matrix

[wiki/transpose](https://en.wikipedia.org/wiki/Transpose)
:::

::: tip Time complexity
O(n^2)
:::

### Import

```ts
import {transposeMatrix} from "@raikuxq/alg-ds/algorithms";

transposeMatrix(matrix);
```

### Params:

| Name   | Type          | Required | Default | Description                        |
|--------|---------------|----------|---------|------------------------------------|
| matrix | `ArrayMatrix` | +        |         | Must be matrix N*N, throws instead |

### Returns: `ArrayMatrix`

### Throws:

+ when given array is not a matrix

### Example usage

```ts
import {transposeMatrix} from "@raikuxq/alg-ds/algorithms";

const srcMatrix = [
    [0, 1, 1],
    [0, 0, 1],
    [1, 0, 0],
];

const transposed = transposeMatrix(srcMatrix);
/*
    [0, 0, 1],
    [1, 0, 0],
    [1, 1, 0],
*/
```
