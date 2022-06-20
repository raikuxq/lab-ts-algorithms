import { FnToMemoize } from "../types/FnToMemoize";
import { memoize } from "./memoize";

/**
 * Time complexity: O(n!)
 */
export const fibonacci = (n: number): number => {
  return n > 1 ? fibonacci(n - 1) + fibonacci(n - 2) : n;
};

/**
 * Time complexity: O(n) - due to caching
 */
export const memoizedFibonacci: FnToMemoize<number, number> = memoize(
  (n: number) => {
    return n > 1 ? memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2) : n;
  }
);
