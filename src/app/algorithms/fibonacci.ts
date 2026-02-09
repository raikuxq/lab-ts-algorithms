import { FnToMemoize } from "src/app/types/FnToMemoize";
import { memoize } from "./memoize";

/**
 * Time complexity: O(2^n) - exponential without memoization
 */
export const fibonacci = (n: number): number => {
  return n > 1 ? fibonacci(n - 1) + fibonacci(n - 2) : n;
};

/**
 * Time complexity: O(n) - linear due to caching
 */
export const memoizedFibonacci: FnToMemoize<number, number> = memoize(
  (n: number) => {
    return n > 1 ? memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2) : n;
  },
);
