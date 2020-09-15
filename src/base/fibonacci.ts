import {memoize} from "../utils";

export function fibonacci(n: number): number {
  return n > 1 ? fibonacci(n - 1) + fibonacci(n - 2) : n;
}

export function createMemoizedFibonacci(): Function {
  return memoize<number, number>(fibonacci);
}
