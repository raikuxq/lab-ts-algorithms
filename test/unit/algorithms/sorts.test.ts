import { quickSort } from "../../../src/algorithms/sorts/quick-sort";
import { mergeSort } from "../../../src/algorithms/sorts/merge-sort";
import { selectSort } from "../../../src/algorithms/sorts/select-sort";
import { bubbleSort } from "../../../src/algorithms/sorts/bubble-sort";
import { insertionSort } from "../../../src/algorithms/sorts/insertion-sort";
import { randomizeArray } from "../../../src/demo/performance/sort-compare";
import { EnumSortType } from "../../../src/types/EnumSortType";

const createSortFunction = (
  sortType: string
): ((arr: Array<number>) => Array<number>) => {
  switch (sortType) {
    case EnumSortType.Quick:
      return quickSort;
    case EnumSortType.Merge:
      return mergeSort;
    case EnumSortType.Selection:
      return selectSort;
    case EnumSortType.Bubble:
      return bubbleSort;
    case EnumSortType.Insertion:
      return insertionSort;
    default:
      throw new Error("Invalid sort type");
  }
};

describe.each([
  EnumSortType.Merge,
  EnumSortType.Quick,
  EnumSortType.Bubble,
  EnumSortType.Insertion,
  EnumSortType.Selection,
])("%s sort", (sortStrategyType: EnumSortType) => {
  const sort = createSortFunction(sortStrategyType);

  test("should correct sort with random numbers", () => {
    const notSortedArr: Array<number> = randomizeArray(100, 500);

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
    const sortedArr = [-5, 0, 5];

    expect(sort(sortedArr)).toEqual(sortedArr);
  });

  test("should correct sort an array with repeated numbers", () => {
    const notSortedArr = [7, 2, 1, 2, 7];
    const sortedArr = [1, 2, 2, 7, 7];

    expect(sort(notSortedArr)).toEqual(sortedArr);
  });

  test("should correct sort an array with float numbers", () => {
    const notSortedArr = [2.5, -2.5, 0, 5.5, -5.5];
    const sortedArr = [-5.5, -2.5, 0, 2.5, 5.5];

    expect(sort(notSortedArr)).toEqual(sortedArr);
  });
});
