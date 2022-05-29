import { ArrayMatrix } from "../types/ArrayMatrix";
import IllegalArgumentException from "../exceptions/base/IllegalArgumentException";
import { checkIsArrayMatrix } from "../utils";

/**
 * Will flips a matrix over its diagonal
 */
export const transposeMatrix = (matrix: ArrayMatrix): ArrayMatrix => {
  if (!checkIsArrayMatrix(matrix)) {
    throw new IllegalArgumentException("Given array is not a matrix");
  }

  return matrix.reduce((acc, current, currentIndex) => {
    acc[currentIndex] = matrix.map((rowArr) => rowArr[currentIndex]);
    return acc;
  }, new Array(matrix.length));
};
