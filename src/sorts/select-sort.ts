import {swapArrayItems, getMinIndexFromIndex} from "../utils";

export default function selectSort(arr: Array<number>): Array<number> {

  arr.forEach((item, index) => {
    const minIndex: number = getMinIndexFromIndex(arr, index);

    swapArrayItems<number>(arr, minIndex, index);
  });

  return arr;
}
