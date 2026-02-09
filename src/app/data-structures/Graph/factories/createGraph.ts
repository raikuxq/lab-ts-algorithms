import IGraph from "src/app/types/IGraph";
import DirectedGraph from "src/app/data-structures/Graph/core/DirectedGraph";
import UndirectedGraph from "src/app/data-structures/Graph/core/UndirectedGraph";
import { EnumGraphType } from "src/app/types/EnumGraphType";

/**
 * Returns graph by type
 */
export const createGraph = <T>(type: EnumGraphType): IGraph<T> => {
  let graph: IGraph<T>;

  switch (type) {
    case EnumGraphType.DIRECTED:
      graph = new DirectedGraph();
      break;
    case EnumGraphType.UNDIRECTED:
      graph = new UndirectedGraph();
      break;
  }

  return graph;
};
