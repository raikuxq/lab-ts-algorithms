import {memoize} from "../utils";

export function factorial(x: number): number {
  return x > 1 ? x * factorial(x - 1) : x;
}

export function createMemoizedFactorial(): Function {
  return memoize<number, number>(factorial);
}
