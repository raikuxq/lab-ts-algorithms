import { FnSort } from "../../types/FnSort";
import { mergeSort } from "../../algorithms/sorts/merge-sort";
import { insertionSort } from "../../algorithms/sorts/insertion-sort";
import { bubbleSort } from "../../algorithms/sorts/bubble-sort";
import { quickSort } from "../../algorithms/sorts/quick-sort";
import { selectSort } from "../../algorithms/sorts/select-sort";
import { perf } from "../../utils";

export const randomizeArray = (length: number, max: number): Array<number> =>
  new Array(length).fill(0).map(() => Math.round(Math.random() * max));

export const sortCompare = (
  sortFn: FnSort,
  n: number,
  callsNumber: number
): void => {
  let totalTime = 0;

  for (let i = 0; i < callsNumber; i++) {
    const generatedArr = randomizeArray(n, 1000);
    const perfResult = perf(() => {
      sortFn(generatedArr);
    });
    totalTime += perfResult;
  }

  const averageTime = totalTime / callsNumber;

  console.log(`N: ${n} = ${averageTime}ms`);
};

export const sortCompareRunner = (
  sortFn: FnSort,
  callsNumber: number
): void => {
  sortCompare(sortFn, 5, callsNumber);
  sortCompare(sortFn, 50, callsNumber);
  sortCompare(sortFn, 500, callsNumber);
  sortCompare(sortFn, 5000, callsNumber);
  sortCompare(sortFn, 50000, callsNumber);
};

export const compareAllSortTypes = (): void => {
  const callsNumber = 10;

  console.log(`MERGE SORT:`);
  sortCompareRunner(mergeSort, callsNumber);

  console.log(`QUICK SORT:`);
  sortCompareRunner(quickSort, callsNumber);

  console.log(`SELECTION SORT:`);
  sortCompareRunner(selectSort, callsNumber);

  console.log(`BUBBLE SORT:`);
  sortCompareRunner(bubbleSort, callsNumber);

  console.log(`INSERTION SORT:`);
  sortCompareRunner(insertionSort, callsNumber);
};
