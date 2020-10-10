import { swapArrayItems } from "../utils";

export default function bubbleSort(arr: Array<number>): Array<number> {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) swapArrayItems<number>(arr, j, j + 1);
    }
  }

  return arr;
}
