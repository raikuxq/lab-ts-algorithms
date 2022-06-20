# bubble-sort

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
import {bubbleSort} from "@raikuxq/alg-ds/algorithms";

bubbleSort(array);
```

### Params:

| Name  | Type            | Required | Default | Description      |
|-------|-----------------|----------|---------|------------------|
| array | `Array<number>` | +        |         | array is mutable |

### Returns: `number`

### Example usage

```ts
import {bubbleSort} from "@raikuxq/alg-ds/algorithms";

bubbleSort([-1, 3, -2, 1, 2, 0, -3]); // [-3, -2, -1, 0, 1, 2, 3]
```
