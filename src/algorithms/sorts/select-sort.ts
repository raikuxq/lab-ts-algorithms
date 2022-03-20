import { swapArrayItems, getMinIndexFromIndex } from "../../utils";

/**
 * Selection sorting algorithm
 * @param arr - array of numbers
 * @returns arr - sorted array of numbers (array is mutable)
 *
 * @description
 * Time complexity: Best O(n \^ 2); Avg O(n \^ 2); Worst O(n \^ 2)
 *
 * Memory complexity:
 * Worst case: O(1)
 */
export const selectSort = (arr: Array<number>): Array<number> => {
  for (let index = 0; index < arr.length; index++) {
    const minIndex: number = getMinIndexFromIndex(arr, index);

    swapArrayItems<number>(arr, minIndex, index);
  }

  return arr;
};
