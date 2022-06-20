# merge-sort

::: tip Time complexity
Best O(n * log(n))   
Avg O(n * log(n))    
Worst O(n * log(n))    
:::

::: tip Memory complexity
Worst case: O(n)
:::

### Import

```ts
import {mergeSort} from "@raikuxq/alg-ds/algorithms";

mergeSort(array);
```

### Params:

| Name  | Type            | Required | Default | Description      |
|-------|-----------------|----------|---------|------------------|
| array | `Array<number>` | +        |         | array is mutable |

### Returns: `number`

### Example usage

```ts
import {mergeSort} from "@raikuxq/alg-ds/algorithms";

mergeSort([-1, 3, -2, 1, 2, 0, -3]); // [-3, -2, -1, 0, 1, 2, 3]
```
