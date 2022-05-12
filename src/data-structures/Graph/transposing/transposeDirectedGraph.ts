import IGraph from "../../../types/IGraph";
import { createGraphFromMatrix } from "../../../helpers/createGraphFromMatrix";
import { EnumGraphType } from "../../../types/EnumGraphType";
import { presenterAdjacencyMatrix } from "../presenter/presenterAdjacencyMatrix";
import { transposeMatrix } from "../../../algorithms/transpose-matrix";

export const transposeDirectedGraph = <T>(
  sourceGraph: IGraph<T>
): IGraph<T> => {
  const verticesList = sourceGraph.vertices();
  const matrix = presenterAdjacencyMatrix(sourceGraph);
  const transposedMatrix = transposeMatrix(matrix);

  return createGraphFromMatrix(
    transposedMatrix,
    verticesList,
    EnumGraphType.Directed
  );
};
