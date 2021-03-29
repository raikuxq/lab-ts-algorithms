export default function mergeSort(arr: Array<number>): Array<number> {
  /**
   * Merge two filtered arrays into one array
   */
  function merge(
    arr: Array<number>,
    leftIndex: number,
    midIndex: number,
    rightIndex: number
  ) {
    const container = arr.slice(leftIndex, rightIndex + 1);

    let leftHalfIndex = leftIndex;
    let rightHalfIndex = midIndex + 1;

    let resultArrIndex = leftIndex;

    /**
     * While both halves of array are not ended
     */
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

    /**
     * If one of halves is ended, the remaining one will just be pushed to result
     */
    while (leftHalfIndex <= midIndex) {
      arr[resultArrIndex] = container[leftHalfIndex - leftIndex];
      resultArrIndex++;
      leftHalfIndex++;
    }
    while (rightHalfIndex <= midIndex) {
      arr[resultArrIndex] = container[rightHalfIndex - leftIndex];
      resultArrIndex++;
      rightHalfIndex++;
    }
  }

  /**
   * Divide array into 2 halves and merge them
   */
  function sortRange(
    arr: Array<number>,
    leftIndex = 0,
    rightIndex = arr.length - 1
  ) {
    if (rightIndex > leftIndex) {
      const midIndex = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);

      sortRange(arr, leftIndex, midIndex);
      sortRange(arr, midIndex + 1, rightIndex);

      merge(arr, leftIndex, midIndex, rightIndex);
    }
  }

  sortRange(arr);

  return arr;
}
