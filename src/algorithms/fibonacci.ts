import { FnToMemoize } from "../types/FnToMemoize";
import { memoize } from "./memoize";

export const fibonacci = (n: number): number => {
  return n > 1 ? fibonacci(n - 1) + fibonacci(n - 2) : n;
};

export const memoizedFibonacci: FnToMemoize<number, number> = memoize(
  (n: number) => {
    return n > 1 ? memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2) : n;
  }
);
