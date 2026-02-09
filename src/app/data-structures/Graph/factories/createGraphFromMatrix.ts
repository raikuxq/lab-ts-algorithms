import IGraph from "src/app/types/IGraph";
import { EnumGraphType } from "src/app//types/EnumGraphType";
import { TypeArrayMatrix } from "src/app//types/TypeArrayMatrix";
import { createGraph } from "./createGraph";
import { EDGE_EXISTS_STATE } from "src/app/constants";
import IllegalArgumentException from "src/app/exceptions/base/IllegalArgumentException";
import { checkIsArrayMatrix } from "src/app/utils/checkIsArrayMatrix";

/**
 * Creates a graph from N*N matrix that contains 1 in case of edge exists or 0 in case it does not
 */
export const createGraphFromMatrix = <T>(
  matrix: TypeArrayMatrix,
  fieldsList: Array<T>,
  type: EnumGraphType,
): IGraph<T> => {
  const isSquare =
    checkIsArrayMatrix(matrix) && matrix.length === matrix[0]?.length;
  const isMatchingFields = isSquare && matrix.length === fieldsList.length;

  if (!isMatchingFields) {
    throw new IllegalArgumentException("Given array is not a matrix");
  }

  const graph: IGraph<T> = createGraph(type);
  fieldsList.forEach((fieldName) => graph.addVertex(fieldName));

  matrix.forEach((row, rowIndex) => {
    row.forEach((cellValue, colIndex) => {
      if (cellValue === EDGE_EXISTS_STATE) {
        const from = fieldsList[rowIndex];
        const to = fieldsList[colIndex];

        if (type === EnumGraphType.UNDIRECTED) {
          if (!graph.hasEdge(from, to) && !graph.hasEdge(to, from)) {
            graph.addEdge(from, to);
          }
        } else {
          graph.addEdge(from, to);
        }
      }
    });
  });

  return graph;
};
