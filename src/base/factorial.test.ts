import {factorial, createMemoizedFactorial} from "./factorial";

describe('Factorial', () => {
  const results = new Map<number, number>();
  results
    .set(5, 120)
    .set(6, 720)
    .set(10, 3628800)
    .set(15, 1307674368000)
    .set(20, 2432902008176640000)
    .set(25, 15511210043330985984000000)

  const resultsKeys = Array.from(results.keys());


  describe('with memoize', () => {
    test.each(resultsKeys)('with n = %i', (n) => {
      expect(factorial(n)).toBe(results.get(n));
    });
  });


  describe('with memoize', () => {
    test.each(resultsKeys)('with n = %i', (n) => {
      const memoizedFactorial = createMemoizedFactorial();

      expect(memoizedFactorial(n)).toBe(results.get(n));
    });
  });


});
