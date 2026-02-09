import IGraph from "src/app/types/IGraph";
import { createGraphFromMatrix } from "src/app/data-structures/Graph/factories/createGraphFromMatrix";
import { EnumGraphType } from "src/app/types/EnumGraphType";
import { presenterAdjacencyMatrix } from "src/app/data-structures/Graph/presenter/presenterAdjacencyMatrix";
import { transposeMatrix } from "src/app/algorithms/transpose-matrix";

export const transposeDirectedGraph = <T>(
  sourceGraph: IGraph<T>,
): IGraph<T> => {
  const verticesList = sourceGraph.vertices();
  const matrix = presenterAdjacencyMatrix(sourceGraph);
  const transposedMatrix = transposeMatrix(matrix);

  return createGraphFromMatrix(
    transposedMatrix,
    verticesList,
    EnumGraphType.DIRECTED,
  );
};
