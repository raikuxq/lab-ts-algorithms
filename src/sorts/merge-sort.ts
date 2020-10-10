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
    const res = arr.slice(leftIndex, rightIndex + 1);

    let i1 = leftIndex;
    let i2 = midIndex + 1;
    let i = leftIndex;

    while (i1 <= midIndex && i2 <= rightIndex) {
      const v1 = res[i1 - leftIndex];
      const v2 = res[i2 - leftIndex];

      if (v1 < v2) {
        arr[i++] = v1;
        ++i1;
      } else {
        arr[i++] = v2;
        ++i2;
      }
    }

    while (i1 <= midIndex) arr[i++] = res[i1++ - leftIndex];
    while (i2 <= midIndex) arr[i++] = res[i2++ - leftIndex];
  }

  /**
   * Divide array into 2 halves and merge them
   */
  function sortRange(
    arr: Array<number>,
    leftIndex = 0,
    rightIndex: number = arr.length - 1
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
