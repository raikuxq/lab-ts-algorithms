import { memoize } from "../utils";
import { FnToMemoize } from "../types/FnToMemoize";

/**
 * Time complexity: O(n!)
 * @param x - number
 * @returns calculated factorial value
 */
export const factorial = (x: number): number => {
  return x > 1 ? x * factorial(x - 1) : x;
};

/**
 * Time complexity: O(n) - due to caching
 * @param x - number
 * @returns calculated factorial value
 */
export const memoizedFactorial: FnToMemoize<number, number> = memoize(
  (n: number) => {
    return n > 1 ? n * memoizedFactorial(n - 1) : n;
  }
);
