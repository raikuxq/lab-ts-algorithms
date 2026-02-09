import { memoize } from "./memoize";
import { FnToMemoize } from "src/app/types/FnToMemoize";

/**
 * Time complexity: O(n)
 */
export const factorial = (x: number): number => {
  if (x < 0) return 0;
  return x > 1 ? x * factorial(x - 1) : 1;
};

/**
 * Time complexity: O(n) for the first call, O(1) for cached calls
 */
export const memoizedFactorial: FnToMemoize<number, number> = memoize(
  (n: number) => {
    if (n < 0) return 0;
    return n > 1 ? n * memoizedFactorial(n - 1) : 1;
  },
);
