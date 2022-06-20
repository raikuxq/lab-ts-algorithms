# quick-sort

::: tip Time complexity
Best O(n * log(n))   
Avg O(n * log(n))    
Worst O(n^2)
:::

::: tip Memory complexity
Worst case: O(1)
:::

### Import

```ts
import {quickSort} from "@raikuxq/alg-ds/algorithms";

quickSort(array);
```

### Params:

| Name  | Type            | Required | Default | Description      |
|-------|-----------------|----------|---------|------------------|
| array | `Array<number>` | +        |         | array is mutable |

### Returns: `number`

### Example usage

```ts
import {quickSort} from "@raikuxq/alg-ds/algorithms";

quickSort([-1, 3, -2, 1, 2, 0, -3]); // [-3, -2, -1, 0, 1, 2, 3]
```
