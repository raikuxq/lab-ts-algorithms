import { performance } from "perf_hooks";

/**
 * Will find min value in the whole array and return its index
 */
export const getMinIndex = (arr: Array<number>): number => {
  return arr.reduce((minIndex, item, index): number => {
    return item < arr[minIndex] ? index : minIndex;
  }, 0);
};

/**
 * Will find min value in range between fromIndex and end of array
 */
export const getMinIndexFromIndex = (
  arr: Array<number>,
  fromIndex: number
): number => {
  return fromIndex + getMinIndex(arr.slice(fromIndex));
};

/**
 * Will swap two items in array
 * @example swapArrayItems([2,3,5], 1, 2) -> [2,5,3]
 */
export const swapArrayItems = <T>(
  arr: Array<T>,
  leftIndex: number,
  rightIndex: number
): void => {
  if (leftIndex !== rightIndex) {
    const temp: T = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
  }
};

/**
 * Get random number in range
 */
export const randomizeNumberInRange = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;

/**
 * Round number to 3 digits after
 */
export const roundNumber = (num: number): number =>
  Math.round(num * 1000) / 1000;

/**
 * Get time execution of function
 */
export const perf = (fn: () => void): number => {
  const perfStart = performance.now();
  fn();
  const perfEnd = performance.now();
  return perfEnd - perfStart;
};

/**
 * Get time execution of function
 */
export const perfAsync = async (fn: () => void): Promise<number> => {
  return Promise.resolve(perf(fn));
};
