import { swapArrayItems } from "../../utils";

/**
 * Insertion sorting algorithm
 *
 * @description
 * Time complexity: Best O(n); Avg O(n \^ 2); Worst O(n \^ 2);
 * @description
 * Memory complexity: Worst case: O(1)
 */
export const insertionSort = (arr: Array<number>): Array<number> => {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      swapArrayItems(arr, j + 1, j);
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
};
