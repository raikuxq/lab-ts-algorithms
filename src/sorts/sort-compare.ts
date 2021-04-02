import { performance } from "perf_hooks";
import mergeSort from "./merge-sort";
import insertionSort from "./insertion-sort";

export const randomArray = (length: number, max: number): Array<number> =>
  new Array(length).fill(0).map(() => Math.round(Math.random() * max));

export type SortFn = (arg: Array<number>) => Array<number>;

export const sortCompare = (sortFn: SortFn, n: number) => {
  const generatedArr = randomArray(n, 1000);
  const perfStart = performance.now();
  sortFn(generatedArr);
  const perfEnd = performance.now();
  console.log(`N: ${n} = ${perfEnd - perfStart}ms`);
};

export const compareAllSortTypes = () => {
  console.log(`MERGE SORT:`);
  sortCompare(mergeSort, 5);
  sortCompare(mergeSort, 50);
  sortCompare(mergeSort, 500);
  sortCompare(mergeSort, 5000);
  sortCompare(mergeSort, 50000);
  sortCompare(mergeSort, 500000);

  console.log(`\n`);
  console.log(`INSERTION SORT:`);
  sortCompare(insertionSort, 5);
  sortCompare(insertionSort, 50);
  sortCompare(insertionSort, 500);
  sortCompare(insertionSort, 5000);
  sortCompare(insertionSort, 50000);
  sortCompare(insertionSort, 500000);
};
