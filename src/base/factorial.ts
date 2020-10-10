import { FnToMemoize, memoize } from "../utils";

export function factorial(x: number): number {
  return x > 1 ? x * factorial(x - 1) : x;
}

export const memoizedFactorial: FnToMemoize<number, number> = memoize(
  (n: number) => {
    return n > 1 ? n * memoizedFactorial(n - 1) : n;
  }
);
