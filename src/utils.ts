import { FnToMemoize } from "./types/FnToMemoize";
import { ArrayMatrix } from "./types/ArrayMatrix";
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
 * Wrapper function that storing the results of calls and returning the cached result when the same inputs occur again
 */
export const memoize = <Key, Value>(
  fn: FnToMemoize<Key, Value>
): FnToMemoize<Key, Value> => {
  const cache = new Map<string, Value>();

  return (...args: Array<Key>): Value => {
    const jsonArgs = JSON.stringify(args);

    if (!cache.has(jsonArgs)) {
      const result = fn(...args);
      cache.set(jsonArgs, result);
    }

    return <Value>cache.get(jsonArgs);
  };
};

/**
 * Will flips a matrix over its diagonal
 */
export const transposeMatrix = (matrix: ArrayMatrix): ArrayMatrix => {
  return matrix.reduce((acc, current, currentIndex) => {
    acc[currentIndex] = matrix.map((rowArr) => rowArr[currentIndex]);
    return acc;
  }, new Array(matrix.length));
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
