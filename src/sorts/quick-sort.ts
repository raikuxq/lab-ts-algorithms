export default function quickSort(arr: Array<number>): Array<number> {
  /**
   * Base case
   */
  if (arr.length <= 1) return arr;

  /**
   * Recursive case
   */
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  const arrLess = arr.filter((item, index) => item < pivot);
  const arrGreater = arr.filter((item) => item > pivot);

  return [...quickSort(arrLess), pivot, ...quickSort(arrGreater)];
}
