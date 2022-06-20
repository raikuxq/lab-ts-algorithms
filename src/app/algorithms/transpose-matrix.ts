import { TypeArrayMatrix } from "../types/TypeArrayMatrix";
import IllegalArgumentException from "../exceptions/base/IllegalArgumentException";
import { checkIsArrayMatrix } from "../utils";

/**
 * Will flips a matrix over its diagonal
 */
export const transposeMatrix = (matrix: TypeArrayMatrix): TypeArrayMatrix => {
  if (!checkIsArrayMatrix(matrix)) {
    throw new IllegalArgumentException("Given array is not a matrix");
  }

  return matrix.reduce((acc, current, currentIndex) => {
    acc[currentIndex] = matrix.map((rowArr) => rowArr[currentIndex]);
    return acc;
  }, new Array(matrix.length));
};
