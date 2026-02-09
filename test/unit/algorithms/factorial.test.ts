import { factorial, memoizedFactorial } from "src/app/algorithms/factorial";

describe("Factorial", () => {
  const results = new Map<number, number>();
  const resultsBigValues = new Map<number, number>();

  /**
   * Safe integers (within JS Number precision)
   */
  results
    .set(0, 1)
    .set(1, 1)
    .set(5, 120)
    .set(6, 720)
    .set(10, 3628800)
    .set(15, 1307674368000);

  /**
   * Large values where precision starts to drop (above Number.MAX_SAFE_INTEGER)
   * or result is represented in scientific notation
   */
  resultsBigValues
    .set(20, 2432902008176640000)
    .set(25, 1.5511210043330986e25)
    .set(35, 1.0333147966386144e40)
    .set(45, 1.1962222086548019e56)
    .set(77, 1.4518309202828584e113)
    .set(90, 1.4857159644817607e138)
    .set(99, 9.33262154439441e155)
    .set(100, 9.33262154439441e157);

  const resultsKeys = Array.from(results.keys());
  const resultsBigValuesKeys = Array.from(resultsBigValues.keys());

  describe("standard implementation (without memoize)", () => {
    test.each(resultsKeys)("should return %p for n = %i", (n) => {
      expect(factorial(n)).toBe(results.get(n));
    });

    it("should handle edge case 0", () => {
      expect(factorial(0)).toBe(1);
    });
  });

  describe("memoized implementation", () => {
    describe("safe integer range", () => {
      test.each(resultsKeys)("should return %p for n = %i", (n) => {
        expect(memoizedFactorial(n)).toBe(results.get(n));
      });
    });

    describe("large values (scientific notation)", () => {
      test.each(resultsBigValuesKeys)(
        "should return approx %p for n = %i",
        (n) => {
          const expected = resultsBigValues.get(n)!;
          const received = memoizedFactorial(n);

          /**
           * For very large numbers we check relative difference because
           * strict equality can fail due to floating point precision.
           */
          if (n > 20) {
            const relativeError = Math.abs(received - expected) / expected;
            expect(relativeError).toBeLessThan(1e-15);
          } else {
            expect(received).toBe(expected);
          }
        },
      );
    });

    it("should return the same value from cache on second call", () => {
      const n = 10;
      const firstCall = memoizedFactorial(n);
      const secondCall = memoizedFactorial(n);
      expect(firstCall).toBe(secondCall);
    });
  });
});
