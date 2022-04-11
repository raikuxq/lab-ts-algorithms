import IGraph from "../types/IGraph";
import { EnumGraphType } from "../types/EnumGraphType";
import { ArrayMatrix } from "../types/ArrayMatrix";
import { createGraph } from "./createGraph";
import { EDGE_EXISTS_STATE } from "../constants";

/**
 * Creates a graph from N*N matrix that contains 1 in case of edge exists or 0 in case it does not
 * @param matrix
 * @param fieldsList
 * @param type
 * @returns graph filled instance
 */
export const createGraphFromMatrix = <T>(
  matrix: ArrayMatrix,
  fieldsList: Array<T>,
  type: EnumGraphType
): IGraph<T> => {
  const graph: IGraph<T> = createGraph(type);

  fieldsList.forEach((fieldName) => {
    graph.addVertex(fieldName);
  });

  matrix.forEach((row: Array<number>, rowIndex: number) => {
    row.forEach((col: number, colIndex: number) => {
      const rowColState = matrix[rowIndex][colIndex];
      const colRowState = matrix[colIndex][rowIndex];

      if (type === EnumGraphType.Undirected) {
        if (
          rowColState === EDGE_EXISTS_STATE &&
          colRowState === EDGE_EXISTS_STATE
        ) {
          graph.addEdge(fieldsList[rowIndex], fieldsList[colIndex]);
        }
      }

      if (type === EnumGraphType.Directed) {
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
