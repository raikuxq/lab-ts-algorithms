import { performance } from "perf_hooks";
import { FnSort } from "../types/FnSort";
import { mergeSort } from "../algorithms/sorts/merge-sort";
import { insertionSort } from "../algorithms/sorts/insertion-sort";
import { bubbleSort } from "../algorithms/sorts/bubble-sort";
import { quickSort } from "../algorithms/sorts/quick-sort";
import { selectSort } from "../algorithms/sorts/select-sort";

export const randomizeArray = (length: number, max: number): Array<number> =>
  new Array(length).fill(0).map(() => Math.round(Math.random() * max));

export const sortCompare = (sortFn: FnSort, n: number): void => {
  const generatedArr = randomizeArray(n, 1000);
  const perfStart = performance.now();
  sortFn(generatedArr);
  const perfEnd = performance.now();
  console.log(`N: ${n} = ${perfEnd - perfStart}ms`);
};

export const sortCompareRunner = (sortFn: FnSort): void => {
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
