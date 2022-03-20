import { swapArrayItems } from "../../utils";

/**
 * Quick sort algorithm
 * @param arr - array of numbers
 * @returns arr - sorted array of numbers (array is mutable)
 *
 * @description
 * Time complexity: Best O(n * log(n)); Avg O(n * log(n)); Worst O(n  ^2)
 *
 * Memory complexity:
 * Worst case: O(1)
 */
export const quickSort = (arr: Array<number>): Array<number> => {
  const partition = (
    arr: Array<number>,
    leftIndex: number,
    rightIndex: number
  ): number => {
    const pivot = arr[leftIndex];

    let leftWall = leftIndex;
    let rightWall = rightIndex;

    while (leftWall <= rightWall) {
      while (arr[rightWall] > pivot) {
        rightWall--;
      }
      while (arr[leftWall] < pivot) {
        leftWall++;
      }
      if (leftWall <= rightWall) {
        swapArrayItems(arr, leftWall, rightWall);
        rightWall--;
        leftWall++;
      }
    }

    return leftWall;
  };

  const sort = (
    arr: Array<number>,
    leftIndex = 0,
    rightIndex: number = arr.length - 1
  ): Array<number> => {
    if (leftIndex < rightIndex) {
      const pivot = partition(arr, leftIndex, rightIndex);

      sort(arr, leftIndex, pivot - 1);
      sort(arr, pivot, rightIndex);
    }
    return arr;
  };

  return sort(arr);
};
