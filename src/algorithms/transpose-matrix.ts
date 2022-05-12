import { ArrayMatrix } from "../types/ArrayMatrix";

/**
 * Will flips a matrix over its diagonal
 */
export const transposeMatrix = (matrix: ArrayMatrix): ArrayMatrix => {
  return matrix.reduce((acc, current, currentIndex) => {
    acc[currentIndex] = matrix.map((rowArr) => rowArr[currentIndex]);
    return acc;
  }, new Array(matrix.length));
};
