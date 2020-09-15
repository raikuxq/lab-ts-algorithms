import {memoize} from "../utils";

export function fibonacci(n: number): number {
  return n > 1 ? fibonacci(n - 1) + fibonacci(n - 2) : n;
}

export const memoizedFibonacci: Function = memoize<number, number>((n: number) => {
  return n > 1 ? memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2) : n;
});
