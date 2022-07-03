import IGraph from "../../../types/IGraph";
import { createGraphFromMatrix } from "../../../data-structures/Graph/_helpers/createGraphFromMatrix";
import { EnumGraphType } from "../../../types/EnumGraphType";
import { presenterAdjacencyMatrix } from "../presenter/presenterAdjacencyMatrix";
import { transposeMatrix } from "../../transpose-matrix";

export const transposeDirectedGraph = <T>(
  sourceGraph: IGraph<T>
): IGraph<T> => {
  const verticesList = sourceGraph.vertices();
  const matrix = presenterAdjacencyMatrix(sourceGraph);
  const transposedMatrix = transposeMatrix(matrix);

  return createGraphFromMatrix(
    transposedMatrix,
    verticesList,
    EnumGraphType.DIRECTED
  );
};
