import { swapArrayItems } from "../utils";

export default function insertionSort(arr: Array<number>): Array<number> {
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
}
