import {fibonacci, createMemoizedFibonacci} from "./fibonacci";

describe('Fibonacci', () => {
  const results = new Map<number, number>();
  results
    .set(5, 5)
    .set(6, 8)
    .set(10, 55)
    .set(15, 610)
    .set(20, 6765)
    .set(25, 75025)

  const resultsKeys = Array.from(results.keys());


  describe('without memoize', () => {
    test.each(resultsKeys)('with n = %i', (n) => {
      expect(fibonacci(n)).toBe(results.get(n));
    });
  });


  describe('with memoize', () => {
    test.each(resultsKeys)('with n = %i', (n) => {
      const memoizedFactorial = createMemoizedFibonacci();

      expect(memoizedFactorial(n)).toBe(results.get(n));
    });
  });

});
