import { fibonacci, memoizedFibonacci } from "src/app/algorithms/fibonacci";

describe("Fibonacci", () => {
  const results = new Map<number, number>();
  const resultsBigValues = new Map<number, number>();

  results
    .set(0, 0)
    .set(1, 1)
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
    .set(90, 2.880067194370816e18);

  const resultsKeys = Array.from(results.keys());
  const resultsBigValuesKeys = Array.from(resultsBigValues.keys());

  describe("without memoize (Recursive O(2^n))", () => {
    test.each(resultsKeys)("should return %p for n = %i", (n) => {
      expect(fibonacci(n)).toBe(results.get(n));
    });
  });

  describe("with memoize (Linear O(n))", () => {
    test.each(resultsKeys)("safe range: n = %i", (n) => {
      expect(memoizedFibonacci(n)).toBe(results.get(n));
    });

    test.each(resultsBigValuesKeys)("large values range: n = %i", (n) => {
      const expected = resultsBigValues.get(n)!;
      const received = memoizedFibonacci(n);

      if (n > 70) {
        const relativeError = Math.abs(received - expected) / expected;
        expect(relativeError).toBeLessThan(1e-15);
      } else {
        expect(received).toBe(expected);
      }
    });

    it("should handle edge case n = 0", () => {
      expect(memoizedFibonacci(0)).toBe(0);
    });
  });
});
