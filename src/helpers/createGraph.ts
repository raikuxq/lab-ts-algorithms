import IGraph from "../types/IGraph";
import DirectedGraph from "../data-structures/Graph/DirectedGraph";
import UndirectedGraph from "../data-structures/Graph/UndirectedGraph";
import { EnumGraphType } from "../types/EnumGraphType";

/**
 * Returns graph by type
 * @param type
 * @returns graph empty instance
 */
export const createGraph = <T>(type: EnumGraphType): IGraph<T> => {
  let graph: IGraph<T>;

  switch (type) {
    case EnumGraphType.Directed:
      graph = new DirectedGraph();
      break;
    case EnumGraphType.Undirected:
      graph = new UndirectedGraph();
      break;
    default:
      throw new Error("Invalid graph type");
  }

  return graph;
};
