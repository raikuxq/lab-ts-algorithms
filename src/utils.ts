export const getMinIndex = (arr: Array<number>): number => arr.reduce(
  (acc: number, item: number, index: number): number => {
    return item < arr[acc] ? index : acc;
  }, 0);
