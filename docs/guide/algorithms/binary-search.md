# binary-search

::: tip Binary search algorithm
\- is a search algorithm that finds the position of a target value within a sorted array.

[wiki/binary_search_algorithm](https://en.wikipedia.org/wiki/Binary_search_algorithm)
:::

::: tip Time complexity
O(log(n))
:::

### Import

```ts
import {binarySearch} from "@raikuxq/alg-ds/algorithms";

binarySearch(elements, searchElement);
```

### Params:

| Name          | Type            | Required | Default | Description |
|---------------|-----------------|----------|---------|-------------|
| elements      | `Array<number>` | +        |         |             |
| searchElement | `number`        | +        |         |             |

### Returns: `number | null` - index of found element

### Example usage

```ts
import {binarySearch} from "@raikuxq/alg-ds/algorithms";

const arr = new Array(10).fill(undefined).map((item, index) => index + 1);

const foundElementIndex = binarySearch(arr, 5); // 4 (index is 4)
```
