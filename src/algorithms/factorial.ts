import { memoize } from "./memoize";
import { FnToMemoize } from "../types/FnToMemoize";

/**
 * Time complexity: O(n!)
 */
export const factorial = (x: number): number => {
  return x > 1 ? x * factorial(x - 1) : x;
};

/**
 * Time complexity: O(n) - due to caching
 */
export const memoizedFactorial: FnToMemoize<number, number> = memoize(
  (n: number) => {
    return n > 1 ? n * memoizedFactorial(n - 1) : n;
  }
);
