/**
 * Will swap two items in array
 * @example swapArrayItems([2,3,5], 1, 2) -> [2,5,3]
 */
export const swapArrayItems = <T>(
  arr: Array<T>,
  leftIndex: number,
  rightIndex: number,
): void => {
  if (leftIndex !== rightIndex) {
    const temp: T = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
  }
};
