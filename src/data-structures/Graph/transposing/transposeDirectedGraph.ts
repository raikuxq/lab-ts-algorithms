import IGraph from "../../../types/IGraph";
import GraphPresenter from "../presenter/GraphPresenter";
import { transposeMatrix } from "../../../utils";
import { createGraphFromMatrix } from "../../../helpers/createGraphFromMatrix";
import { EnumGraphType } from "../../../types/EnumGraphType";

export const transposeDirectedGraph = <T>(
  sourceGraph: IGraph<T>
): IGraph<T> => {
  const graphPresenter = new GraphPresenter(sourceGraph);
  const verticesList = sourceGraph.vertices();
  const matrix = graphPresenter.getAdjacencyMatrix();
  const transposedMatrix = transposeMatrix(matrix);

  return createGraphFromMatrix(
    transposedMatrix,
    verticesList,
    EnumGraphType.Directed
  );
};
