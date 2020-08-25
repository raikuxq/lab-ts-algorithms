export const getMinIndex = (arr: Array<number>): number => {
  return arr.reduce((minIndex, item, index): number => {
    return (item < arr[minIndex]) ? index : minIndex;
  }, 0);
}

export const getMinIndexFromIndex = (arr: Array<number>, fromIndex: number): number => {
  return fromIndex + getMinIndex(arr.slice(fromIndex));
}

export const swapArrayItems = <T>(arr: Array<T>, leftIndex: number, rightIndex: number): void => {
  if (leftIndex !== rightIndex) {
    const temp: T = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
  }
}
