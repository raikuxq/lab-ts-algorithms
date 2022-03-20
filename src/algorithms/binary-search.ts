/**
 * Find element's index in sorted array
 * Time complexity: O(log(n))
 * @param elements - sorted array of numbers
 * @param searchElement - value of element to search
 * @returns element's index or null if it does not exist
 */
export const binarySearch = (
  elements: Array<number>,
  searchElement: number
): number | null => {
  const length: number = elements.length;

  let leftIndex = 0;
  let rightIndex: number = length - 1;

  while (leftIndex <= rightIndex) {
    const midIndex: number = Math.ceil((leftIndex + rightIndex) / 2);
    const midEl: number = elements[midIndex];

    if (searchElement == midEl) {
      return midIndex;
    } else if (midEl > searchElement) {
      rightIndex = midIndex - 1;
    } else if (midEl < searchElement) {
      leftIndex = midIndex + 1;
    }
  }

  return null;
};
