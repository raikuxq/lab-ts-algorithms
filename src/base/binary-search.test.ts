import binarySearch from "./binary-search";

describe('Binary search', () => {

  test('find in positive 100 elements', () => {
    const arr: Array<number> = [];

    for (let i: number = 0; i < 100; i++) arr.push(i + 1);

    const index = binarySearch(arr, 97);

    expect(index).toBe(96);
  });

  test('find in negative 100 elements', () => {
    const arr: Array<number> = [];

    for (let i: number = 0; i < 100; i++) arr.push(-100 + i - 1);

    const foundElement = binarySearch(arr, -97);

    expect(foundElement).toBe(4);
  });

});
