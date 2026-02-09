/**
 * Find element's index in sorted array
 * Time complexity: O(log(n))
 */
export const binarySearch = (
  elements: Array<number>,
  searchElement: number,
): number | null => {
  let leftIndex = 0;
  let rightIndex: number = elements.length - 1;

  while (leftIndex <= rightIndex) {
    const midIndex: number = Math.floor(
      leftIndex + (rightIndex - leftIndex) / 2,
    );
    const midEl: number = elements[midIndex];

    if (searchElement === midEl) {
      return midIndex;
    }

    if (midEl > searchElement) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }

  return null;
};
