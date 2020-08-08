import factorial from "../src/divide-and-conquer/factorial";

test('Factorial: should calc factorial correctly', () => {
  expect(factorial(5)).toBe(120);
  expect(factorial(6)).toBe(720);
  expect(factorial(10)).toBe(3628800);
  expect(factorial(15)).toBe(1307674368000);
});
