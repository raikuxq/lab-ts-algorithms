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

  const arrSmaller: Array<number> = arr.filter((item, index) => {
    const isLower = item <= basisElement;
    const isBasis = index === middleIndex;

    return isLower && !isBasis;
  });
  const arrBigger: Array<number> = arr.filter((item, index) => {
    const isHigher = item > basisElement;

    return isHigher;
  });

  return [...quickSort(arrSmaller), basisElement, ...quickSort(arrBigger)];
}
