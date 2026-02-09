import { binarySearch } from "src/app/algorithms/binary-search";

describe("Binary search", () => {
  describe("Success cases", () => {
    it("should find element in 100 positive integers", () => {
      const arr = Array.from({ length: 100 }, (_, i) => i + 1); // [1, 2, ..., 100]
      expect(binarySearch(arr, 97)).toBe(96);
    });

    it("should find element in 100 negative integers", () => {
      const arr = Array.from({ length: 100 }, (_, i) => -100 + i - 1); // [-101, -100, ..., -2]
      expect(binarySearch(arr, -97)).toBe(4);
    });

    it("should find the very first element", () => {
      const arr = [10, 20, 30, 40, 50];
      expect(binarySearch(arr, 10)).toBe(0);
    });

    it("should find the very last element", () => {
      const arr = [10, 20, 30, 40, 50];
      expect(binarySearch(arr, 50)).toBe(4);
    });

    it("should work with a single element array", () => {
      expect(binarySearch([42], 42)).toBe(0);
    });
  });

  describe("Failure cases", () => {
    it("should return null for empty list", () => {
      expect(binarySearch([], 10)).toBeNull();
    });

    it("should return null if element is smaller than any in array", () => {
      const arr = [10, 20, 30];
      expect(binarySearch(arr, 5)).toBeNull();
    });

    it("should return null if element is larger than any in array", () => {
      const arr = [10, 20, 30];
      expect(binarySearch(arr, 40)).toBeNull();
    });

    it("should return null if element is missing but within array range", () => {
      const arr = [10, 20, 30];
      expect(binarySearch(arr, 25)).toBeNull();
    });

    it("should return null for single element array if not found", () => {
      expect(binarySearch([42], 7)).toBeNull();
    });
  });
});
