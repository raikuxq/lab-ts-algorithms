/**
 * Merge two sorted arrays into one array
 * @param arr
 * @param leftIndex - Describes start index of left half
 * @param midIndex - Describes end index of left half
 * @param rightIndex - Describes end index of right half (right half starts at midIndex + 1)
 */
function merge(
  arr: Array<number>,
  leftIndex: number,
  midIndex: number,
  rightIndex: number
) {
  const container = arr.slice(leftIndex, rightIndex + 1);

  let resultArrIndex = leftIndex;
  let leftHalfIndex = leftIndex;
  let rightHalfIndex = midIndex + 1;

  /** While both halves of array are not ended */
  while (leftHalfIndex <= midIndex && rightHalfIndex <= rightIndex) {
    const leftHalfElement = container[leftHalfIndex - leftIndex];
    const rightHalfElement = container[rightHalfIndex - leftIndex];

    if (leftHalfElement < rightHalfElement) {
      arr[resultArrIndex] = leftHalfElement;
      leftHalfIndex++;
    } else {
      arr[resultArrIndex] = rightHalfElement;
      rightHalfIndex++;
    }
    resultArrIndex++;
  }

  /** If one of halves is ended, the remaining one will just be pushed to result */
  while (leftHalfIndex <= midIndex) {
    arr[resultArrIndex] = container[leftHalfIndex - leftIndex];
    resultArrIndex++;
    leftHalfIndex++;
  }
  while (rightHalfIndex <= rightIndex) {
    arr[resultArrIndex] = container[rightHalfIndex - leftIndex];
    resultArrIndex++;
    rightHalfIndex++;
  }
}

/**
 * Divide array into 2 halves and merge them
 *
 * @param arr - Array to sort
 * @param leftIndex - Describes start index of part to sort
 * @param rightIndex - Describes end index of part to sort
 */
function sortRange(arr: Array<number>, leftIndex: number, rightIndex: number) {
  if (rightIndex > leftIndex) {
    const midIndex = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);

    sortRange(arr, leftIndex, midIndex);
    sortRange(arr, midIndex + 1, rightIndex);

    merge(arr, leftIndex, midIndex, rightIndex);
  }
}

/**
 * Merge sorting algorithm implementation
 * @description Big O: N*Log(N)
 *
 * @param arr - Array to sort
 */
export default function mergeSort(arr: Array<number>): Array<number> {
  sortRange(arr, 0, arr.length - 1);

  return arr;
}
