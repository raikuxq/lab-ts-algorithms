import IGraph from "../../../types/IGraph";
import { EnumGraphType } from "../../../types/EnumGraphType";
import { TypeArrayMatrix } from "../../../types/TypeArrayMatrix";
import { createGraph } from "./createGraph";
import { EDGE_EXISTS_STATE } from "../../../constants";
import IllegalArgumentException from "../../../exceptions/base/IllegalArgumentException";
import { checkIsArrayMatrix } from "../../../utils";

/**
 * Creates a graph from N*N matrix that contains 1 in case of edge exists or 0 in case it does not
 */
export const createGraphFromMatrix = <T>(
  matrix: TypeArrayMatrix,
  fieldsList: Array<T>,
  type: EnumGraphType
): IGraph<T> => {
  if (!checkIsArrayMatrix(matrix)) {
    throw new IllegalArgumentException("Given array is not a matrix");
  }

  const graph: IGraph<T> = createGraph(type);
  fieldsList.forEach((fieldName) => {
    graph.addVertex(fieldName);
  });

  matrix.forEach((row: Array<number>, rowIndex: number) => {
    row.forEach((col: number, colIndex: number) => {
      const rowColState = matrix[rowIndex][colIndex];
      const colRowState = matrix[colIndex][rowIndex];

      if (type === EnumGraphType.UNDIRECTED) {
        if (
          rowColState === EDGE_EXISTS_STATE &&
          colRowState === EDGE_EXISTS_STATE
        ) {
          graph.addEdge(fieldsList[rowIndex], fieldsList[colIndex]);
        }
      }

      if (type === EnumGraphType.DIRECTED) {
        if (rowColState === EDGE_EXISTS_STATE) {
          graph.addEdge(fieldsList[rowIndex], fieldsList[colIndex]);
        }
        if (colRowState === EDGE_EXISTS_STATE) {
          graph.addEdge(fieldsList[colIndex], fieldsList[rowIndex]);
        }
      }
    });
  });

  return graph;
};
