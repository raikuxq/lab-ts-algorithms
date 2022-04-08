import { FnToMemoize } from "./types/FnToMemoize";
import { ArrayMatrix } from "./types/ArrayMatrix";
import { performance } from "perf_hooks";

export const getMinIndex = (arr: Array<number>): number => {
  return arr.reduce((minIndex, item, index): number => {
    return item < arr[minIndex] ? index : minIndex;
  }, 0);
};

export const getMinIndexFromIndex = (
  arr: Array<number>,
  fromIndex: number
): number => {
  return fromIndex + getMinIndex(arr.slice(fromIndex));
};

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

export const transposeMatrix = (matrix: ArrayMatrix): ArrayMatrix => {
  return matrix.reduce((acc, current, currentIndex) => {
    acc[currentIndex] = matrix.map((rowArr) => rowArr[currentIndex]);
    return acc;
  }, new Array(matrix.length));
};

export const randomizeNumberInRange = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;

export const perf = (fn: () => void, operation: string): void => {
  const perfStart = performance.now();
  fn();
  const perfEnd = performance.now();
  console.log(
    `${operation} = ${Math.round((perfEnd - perfStart) * 100) / 100}ms`
  );
};
