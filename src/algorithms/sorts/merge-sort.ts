/**
 * Merge two sorted arrays into one array
 */
const merge = (
  arr: Array<number>,
  leftIndex: number,
  midIndex: number,
  rightIndex: number
) => {
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
};

/**
 * Divide array into 2 halves and merge them
 */
const sortRange = (
  arr: Array<number>,
  leftIndex: number,
  rightIndex: number
) => {
  if (rightIndex > leftIndex) {
    const midIndex = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);

    sortRange(arr, leftIndex, midIndex);
    sortRange(arr, midIndex + 1, rightIndex);

    merge(arr, leftIndex, midIndex, rightIndex);
  }
};

/**
 * Merge sorting algorithm
 *
 * @description
 * Time complexity: Best O(n * log(n)); Avg O(n * log(n)); Worst O(n * log(n))
 * @description
 * Memory complexity: Worst case: O(n)
 */
export const mergeSort = (arr: Array<number>): Array<number> => {
  sortRange(arr, 0, arr.length - 1);

  return arr;
};
