import { performance } from "perf_hooks";
import mergeSort from "../sorts/merge-sort";
import insertionSort from "../sorts/insertion-sort";
import bubbleSort from "../sorts/bubble-sort";
import quickSort from "../sorts/quick-sort";
import selectSort from "../sorts/select-sort";

export type SortFn = (arg: Array<number>) => Array<number>;

export const randomizeArray = (length: number, max: number): Array<number> =>
  new Array(length).fill(0).map(() => Math.round(Math.random() * max));

export const sortCompare = (sortFn: SortFn, n: number): void => {
  const generatedArr = randomizeArray(n, 1000);
  const perfStart = performance.now();
  sortFn(generatedArr);
  const perfEnd = performance.now();
  console.log(`N: ${n} = ${perfEnd - perfStart}ms`);
};

export const sortCompareRunner = (sortFn: SortFn): void => {
  sortCompare(sortFn, 5);
  sortCompare(sortFn, 50);
  sortCompare(sortFn, 500);
  sortCompare(sortFn, 5000);
  sortCompare(sortFn, 50000);
};

export const compareAllSortTypes = (): void => {
  console.log(`MERGE SORT:`);
  sortCompareRunner(mergeSort);

  console.log(`QUICK SORT:`);
  sortCompareRunner(quickSort);

  console.log(`SELECTION SORT:`);
  sortCompareRunner(selectSort);

  console.log(`BUBBLE SORT:`);
  sortCompareRunner(bubbleSort);

  console.log(`INSERTION SORT:`);
  sortCompareRunner(insertionSort);
};
