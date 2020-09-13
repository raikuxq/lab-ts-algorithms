import {factorial, createMemoizedFactorial} from "./factorial";

describe('Factorial', () => {

  const results = {
    5: 120,
    6: 720,
    10: 3628800,
    15:1307674368000,
    20:2432902008176640000,
    25:15511210043330985984000000,
  };

  test('when is not memoized', () => {
    expect(factorial(5)).toBe(results[5]);
    expect(factorial(6)).toBe(results[6]);
    expect(factorial(10)).toBe(results[10]);
    expect(factorial(15)).toBe(results[15]);
    expect(factorial(20)).toBe(results[20]);
    expect(factorial(25)).toBe(results[25]);
  });

  test('when is memoized', () => {
    const memoizedFactorial = createMemoizedFactorial();

    expect(memoizedFactorial(5)).toBe(results[5]);
    expect(memoizedFactorial(6)).toBe(results[6]);
    expect(memoizedFactorial(10)).toBe(results[10]);
    expect(memoizedFactorial(15)).toBe(results[15]);
    expect(memoizedFactorial(20)).toBe(results[20]);
    expect(memoizedFactorial(25)).toBe(results[25]);
  });
});
