# factorial

::: tip Factorial
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less
than or equal to n.

[wiki/factorial](https://en.wikipedia.org/wiki/Factorial)
:::

::: tip Time complexity
`factorial`: O(n!)  
`memoizedFactorial`: O(n)
:::

### Import

```ts
import {factorial, memoizedFactorial} from "@raikuxq/alg-ds/algorithms";

factorial(x);
memoizedFactorial(x);
```

### Params:

| Name | Type     | Required | Default | Description |
|------|----------|----------|---------|-------------|
| x    | `number` | +        |         |             |

### Returns: `number`

### Example usage

```ts
import {memoizedFactorial} from "@raikuxq/alg-ds/algorithms";

memoizedFactorial(6); // 720
memoizedFactorial(10); // 3628800
```
