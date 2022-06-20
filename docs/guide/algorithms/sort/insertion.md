# insertion-sort

::: tip Time complexity
Best O(n)  
Avg O(n^2)  
Worst O(n^2)
:::

::: tip Memory complexity
Worst case: O(1)
:::

### Import

```ts
import {insertionSort} from "@raikuxq/alg-ds/algorithms";

insertionSort(array);
```

### Params:

| Name  | Type            | Required | Default | Description      |
|-------|-----------------|----------|---------|------------------|
| array | `Array<number>` | +        |         | array is mutable |

### Returns: `number`

### Example usage

```ts
import {insertionSort} from "@raikuxq/alg-ds/algorithms";

insertionSort([-1, 3, -2, 1, 2, 0, -3]); // [-3, -2, -1, 0, 1, 2, 3]
```
