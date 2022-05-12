import {
  fibonacci,
  memoizedFibonacci,
} from "../../../src/algorithms/fibonacci";

describe("Fibonacci", () => {
  const results = new Map<number, number>();
  const resultsBigValues = new Map<number, number>();

  results
    .set(5, 5)
    .set(6, 8)
    .set(10, 55)
    .set(15, 610)
    .set(20, 6765)
    .set(25, 75025);

  resultsBigValues
    .set(40, 102334155)
    .set(45, 1134903170)
    .set(77, 5527939700884757)
    .set(90, 2880067194370816120);

  const resultsKeys = Array.from(results.keys());
  const resultsBigValuesKeys = Array.from(resultsBigValues.keys());

  describe("without memoize", () => {
    test.each(resultsKeys)("with n = %i", (n) => {
      expect(fibonacci(n)).toBe(results.get(n));
    });
  });

  describe("with memoize", () => {
    test.each(resultsKeys)("with n = %i", (n) => {
      expect(memoizedFibonacci(n)).toBe(results.get(n));
    });
    test.each(resultsBigValuesKeys)("with n = %i", (n) => {
      expect(memoizedFibonacci(n)).toBe(resultsBigValues.get(n));
    });
  });
});
