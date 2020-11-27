import { swapArrayItems, getMinIndexFromIndex } from "../utils";

export default function selectSort(arr: Array<number>): Array<number> {
  for (let index = 0; index < arr.length; index++) {
    const minIndex: number = getMinIndexFromIndex(arr, index);

    swapArrayItems<number>(arr, minIndex, index);
  }

  return arr;
}
