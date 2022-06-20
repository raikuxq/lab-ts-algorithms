# memoize<Key, Value>

Memoization util function

::: tip Memoization
\- is an optimization technique used primarily to speed up computer programs by storing the results of expensive
function calls and returning the cached result when the same inputs occur again

[wiki/memoization](https://en.wikipedia.org/wiki/Memoization)
:::

### Import

```ts
import {memoize} from "@raikuxq/alg-ds/algorithms";

const memoizedFn = memoize(fn);
```

### Params:

| Name | Type          | Required | Default | Description |
|------|---------------|----------|---------|-------------|
| fn   | `FnToMemoize` | +        |         |             |

### Returns: `FnToMemoize`

### Example usage

```ts
const memoizedFactorial: FnToMemoize<number, number> = memoize(
    (n: number) => {
        return n > 1 ? n * memoizedFactorial(n - 1) : n;
    }
);
```
