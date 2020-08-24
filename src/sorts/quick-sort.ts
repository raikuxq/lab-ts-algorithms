export default function quickSort(arr: Array<number>): Array<number> {
  /**
   * Base case
   */
  if (arr.length <= 1) return arr;

  /**
   * Recursive case
   */
  const middleIndex: number = Math.floor(arr.length / 2);
  const basisElement: number = arr[middleIndex];

  const arrSmaller: Array<number> = arr.filter((i: number) => i <= basisElement);
  const arrBigger: Array<number> = arr.filter((i: number) => i > basisElement);

  return [...quickSort(arrSmaller), basisElement, ...quickSort(arrBigger)];
}
