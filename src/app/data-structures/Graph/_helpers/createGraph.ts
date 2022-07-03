import IGraph from "../../../types/IGraph";
import DirectedGraph from "../DirectedGraph";
import UndirectedGraph from "../UndirectedGraph";
import { EnumGraphType } from "../../../types/EnumGraphType";

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
