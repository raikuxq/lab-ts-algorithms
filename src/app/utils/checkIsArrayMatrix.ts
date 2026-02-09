/**
 * Check if given array is a matrix (all rows have the same length)
 */
export const checkIsArrayMatrix = <T>(array: Array<Array<T>>): boolean => {
  if (array.length === 0) return false;

  const firstRowLength = array[0].length;

  for (let i = 0; i < array.length; i++) {
    if (array[i].length !== firstRowLength) {
      return false;
    }
  }
  return true;
};
