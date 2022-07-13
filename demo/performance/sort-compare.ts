import { FnSort } from "../../src/app/types/FnSort";
import { mergeSort } from "../../src/app/algorithms/sorts/merge-sort";
import { insertionSort } from "../../src/app/algorithms/sorts/insertion-sort";
import { bubbleSort } from "../../src/app/algorithms/sorts/bubble-sort";
import { quickSort } from "../../src/app/algorithms/sorts/quick-sort";
import { selectSort } from "../../src/app/algorithms/sorts/select-sort";
import { randomizeArray } from "../../src/app/utils";
import { perf } from "../../src/app/performance";

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
