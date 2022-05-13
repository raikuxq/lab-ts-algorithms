import { ArrayMatrix } from "../types/ArrayMatrix";

/**
 * Will flips a matrix over its diagonal
 */
export const transposeMatrix = (matrix: ArrayMatrix): ArrayMatrix => {
  /** Validation */
  matrix.forEach((subArray) => {
    const checkIsSameLength = subArray.length === matrix.length;
    if (!checkIsSameLength) {
      throw new Error("Given array is not a matrix");
    }
  });

  return matrix.reduce((acc, current, currentIndex) => {
    acc[currentIndex] = matrix.map((rowArr) => rowArr[currentIndex]);
    return acc;
  }, new Array(matrix.length));
};
