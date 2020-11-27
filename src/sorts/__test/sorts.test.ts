import quickSort from "../quick-sort";
import mergeSort from "../merge-sort";
import selectSort from "../select-sort";
import bubbleSort from "../bubble-sort";
import insertionSort from "../insertion-sort";

const createSortFunction = (
  sortType: string
): ((arr: Array<number>) => Array<number>) => {
  switch (sortType) {
    case "Quick":
      return quickSort;
    case "Merge":
      return mergeSort;
    case "Selection":
      return selectSort;
    case "Bubble":
      return bubbleSort;
    case "Insertion":
      return insertionSort;
    default:
      throw new Error("Invalid sort type");
  }
};

const randomArray = (length: number, max: number): Array<number> =>
  new Array(length).fill(0).map(() => Math.round(Math.random() * max));

describe.each(["Quick", "Merge", "Selection", "Bubble", "Insertion"])(
  "%s sort",
  (sortStrategyType: string) => {
    const sort = createSortFunction(sortStrategyType);

    test("should correct sort with random numbers", () => {
      const notSortedArr: Array<number> = randomArray(100, 500);

      const sortedArr = [...notSortedArr].sort((a: number, b: number) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      });

      expect(sort(notSortedArr)).toEqual(sortedArr);
    });

    test("should correct sort an empty array", () => {
      const emptyArr: Array<number> = [];

      expect(sort(emptyArr)).toEqual(emptyArr);
    });

    test("should correct sort already sorted array", () => {
      const sortedArr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

      expect(sort(sortedArr)).toEqual(sortedArr);
    });

    test("should correct sort an array with repeated numbers", () => {
      const notSortedArr = [8, 7, 6, 4, 3, 1, 6, 2, 2, 4, 5];
      const sortedArr = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8];

      expect(sort(notSortedArr)).toEqual(sortedArr);
    });
  }
);
