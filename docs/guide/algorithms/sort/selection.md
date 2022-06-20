# selection-sort

::: tip Time complexity
Best O(n^2)  
Avg O(n^2)  
Worst O(n^2)
:::

::: tip Memory complexity
Worst case: O(1)
:::

### Import

```ts
import {selectionSort} from "@raikuxq/alg-ds/algorithms";

selectionSort(array);
```

### Params:

| Name  | Type            | Required | Default | Description      |
|-------|-----------------|----------|---------|------------------|
| array | `Array<number>` | +        |         | array is mutable |

### Returns: `number`

### Example usage

```ts
import {selectionSort} from "@raikuxq/alg-ds/algorithms";

selectionSort([-1, 3, -2, 1, 2, 0, -3]); // [-3, -2, -1, 0, 1, 2, 3]
```
