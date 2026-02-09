import { TypeArrayMatrix } from "src/app/types/TypeArrayMatrix";
import IllegalArgumentException from "src/app/exceptions/base/IllegalArgumentException";
import { checkIsArrayMatrix } from "src/app/utils/checkIsArrayMatrix";

/**
 * Will flips a matrix over its diagonal
 * @throws {IllegalArgumentException} when array is not a matrix
 */
export const transposeMatrix = (matrix: TypeArrayMatrix): TypeArrayMatrix => {
  if (!checkIsArrayMatrix(matrix)) {
    throw new IllegalArgumentException("Given array is not a matrix");
  }

  const rows = matrix.length;
  const cols = matrix[0]?.length || 0;

  const result: TypeArrayMatrix = [];
  for (let i = 0; i < cols; i++) {
    result[i] = [];
    for (let j = 0; j < rows; j++) {
      result[i][j] = matrix[j][i];
    }
  }

  return result;
};
