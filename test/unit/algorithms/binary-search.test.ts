import { binarySearch } from "../../../src/algorithms/binary-search";

describe("Binary search", () => {
  it("should find in positive 100 elements", () => {
    const arr: Array<number> = [];
    for (let i = 0; i < 100; i++) arr.push(i + 1);
    const foundElement = binarySearch(arr, 97);

    expect(foundElement).toBe(96);
  });

  it("should find in negative 100 elements", () => {
    const arr: Array<number> = [];
    for (let i = 0; i < 100; i++) arr.push(-100 + i - 1);
    const foundElement = binarySearch(arr, -97);

    expect(foundElement).toBe(4);
  });

  it("should return null in empty list", () => {
    const arr: Array<number> = [];

    expect(binarySearch(arr, 10)).toBeNull();
  });
});
