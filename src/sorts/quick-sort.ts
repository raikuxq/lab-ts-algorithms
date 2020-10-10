import { swapArrayItems } from "../utils";

export default function quickSort(arr: Array<number>): Array<number> {
  function partition(
    arr: Array<number>,
    lowIndex: number,
    highIndex: number
  ): number {
    const pivot = arr[lowIndex];

    let i = lowIndex;
    let j = highIndex;

    while (i <= j) {
      while (arr[j] > pivot) {
        j--;
      }
      while (arr[i] < pivot) {
        i++;
      }
      if (i <= j) {
        swapArrayItems(arr, i, j);
        j--;
        i++;
      }
    }

    return i;
  }

  function sort(
    arr: Array<number>,
    lowIndex = 0,
    highIndex: number = arr.length - 1
  ): Array<number> {
    if (lowIndex < highIndex) {
      const pivot = partition(arr, lowIndex, highIndex);

      sort(arr, lowIndex, pivot - 1);
      sort(arr, pivot, highIndex);
    }
    return arr;
  }

  return sort(arr);
}
