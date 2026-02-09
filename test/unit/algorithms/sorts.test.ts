import { quickSort } from "src/app/algorithms/sorts/quick-sort";
import { mergeSort } from "src/app/algorithms/sorts/merge-sort";
import { selectSort } from "src/app/algorithms/sorts/select-sort";
import { bubbleSort } from "src/app/algorithms/sorts/bubble-sort";
import { insertionSort } from "src/app/algorithms/sorts/insertion-sort";
import { EnumSortType } from "src/app/types/EnumSortType";
import IllegalArgumentException from "src/app/exceptions/base/IllegalArgumentException";
import { randomizeArray } from "src/app/utils/randomizeArray";

const createSortFunction = (
  sortType: string,
): ((arr: Array<number>) => Array<number>) => {
  switch (sortType) {
    case EnumSortType.QUICK:
      return quickSort;
    case EnumSortType.MERGE:
      return mergeSort;
    case EnumSortType.SELECTION:
      return selectSort;
    case EnumSortType.BUBBLE:
      return bubbleSort;
    case EnumSortType.INSERTION:
      return insertionSort;
    default:
      throw new IllegalArgumentException("Wrong sort type");
  }
};
describe.each([
  EnumSortType.MERGE,
  EnumSortType.QUICK,
  EnumSortType.BUBBLE,
  EnumSortType.INSERTION,
  EnumSortType.SELECTION,
])("%s sort", (sortStrategyType: EnumSortType) => {
  const sortFunction = createSortFunction(sortStrategyType);

  const sort = (arr: number[]) => sortFunction([...arr]);

  it("should correctly sort with 1000 random numbers", () => {
    const notSortedArr = randomizeArray(1000, 5000);
    const expected = [...notSortedArr].sort((a, b) => a - b);

    expect(sort(notSortedArr)).toEqual(expected);
  });

  it("should correctly sort an empty array", () => {
    expect(sort([])).toEqual([]);
  });

  it("should correctly sort a single element array", () => {
    expect(sort([42])).toEqual([42]);
  });

  it("should correctly sort already sorted array", () => {
    const sortedArr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
    expect(sort(sortedArr)).toEqual(sortedArr);
  });

  it("should correctly sort reverse sorted array", () => {
    const reverseArr = [5, 4, 3, 2, 1, 0];
    expect(sort(reverseArr)).toEqual([0, 1, 2, 3, 4, 5]);
  });

  it("should correctly sort an array with repeated numbers", () => {
    const notSortedArr = [7, 2, 1, 2, 7, 1, 1];
    const sortedArr = [1, 1, 1, 2, 2, 7, 7];
    expect(sort(notSortedArr)).toEqual(sortedArr);
  });

  it("should correctly sort an array with float numbers", () => {
    const notSortedArr = [2.5, -2.5, 0, 5.5, -5.5];
    const sortedArr = [-5.5, -2.5, 0, 2.5, 5.5];
    expect(sort(notSortedArr)).toEqual(sortedArr);
  });
});
