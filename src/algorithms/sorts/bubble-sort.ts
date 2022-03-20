import { swapArrayItems } from "../../utils";

/**
 * Bubble sorting algorithm
 * @param arr - array of numbers
 * @returns arr - sorted array of numbers (array is mutable)
 *
 * @description
 * Time complexity: Best O(n); Avg O(n \^ 2); Worst O(n \^ 2)
 *
 * Memory complexity:
 * Worst case: O(1)
 */
export const bubbleSort = (arr: Array<number>): Array<number> => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapArrayItems(arr, j, j + 1);
      }
    }
  }

  return arr;
};
