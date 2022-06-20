# fibonacci

::: tip Fibonacci number

\- In mathematics, the Fibonacci numbers, commonly denoted Fn , form a sequence, the Fibonacci sequence, in which each
number is the sum of the two preceding ones. The sequence commonly starts from 0 and 1, although some authors omit the
initial terms and start the sequence from 1 and 1 or from 1 and 2.

[wiki/fibonacci_number](https://en.wikipedia.org/wiki/Fibonacci_number)

:::

::: tip Time complexity
`fibonacci`: O(n!)  
`memoizedFibonacci`: O(n)
:::

### Import

```ts
import {fibonacci, memoizedFibonacci} from "@raikuxq/alg-ds/algorithms";

fibonacci(x);
memoizedFibonacci(x);
```

### Params:

| Name | Type     | Required | Default | Description |
|------|----------|----------|---------|-------------|
| x    | `number` | +        |         |             |

### Returns: `number`

### Example usage

```ts
import {memoizedFibonacci} from "@raikuxq/alg-ds/algorithms";

memoizedFibonacci(6); // 8
memoizedFibonacci(10); // 55
```
