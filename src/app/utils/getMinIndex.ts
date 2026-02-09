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
  fromIndex: number,
): number => {
  return fromIndex + getMinIndex(arr.slice(fromIndex));
};
