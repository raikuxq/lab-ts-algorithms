export function factorial(x: number): number {
  return x > 1 ? x * factorial(x - 1) : x;
}

export function createMemoizedFactorial(): Function {
  const cache: Map<number, number> = new Map<number, number>();

  return function (x: number): number {
    if (!cache.has(x)) {
      cache.set(x, factorial(x));
    }

    return <number>cache.get(x);
  }
}
