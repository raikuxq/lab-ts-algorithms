import IGraph from "src/app/types/IGraph";
import IGraphIterator from "src/app/types/IGraphIterator";
import { EnumGraphTraversalType } from "src/app/types/EnumGraphTraversalType";
import GraphIteratorBFS from "src/app/data-structures/Graph/iterator/GraphIteratorBFS";
import GraphIteratorDFS from "src/app/data-structures/Graph/iterator/GraphIteratorDFS";
import GraphIteratorDijkstra from "src/app/data-structures/Graph/iterator/GraphIteratorDijkstra";
import IllegalArgumentException from "src/app/exceptions/base/IllegalArgumentException";

/**
 * Creates a graph iterator based on the specified traversal mode.
 */
export const createGraphIterator = <T>(
  graph: IGraph<T>,
  mode: EnumGraphTraversalType,
): IGraphIterator<T> => {
  switch (mode) {
    case EnumGraphTraversalType.BFS:
      return new GraphIteratorBFS<T>(graph);
    case EnumGraphTraversalType.DFS:
      return new GraphIteratorDFS<T>(graph);
    case EnumGraphTraversalType.DIJKSTRA:
      return new GraphIteratorDijkstra<T>(graph);
    default:
      throw new IllegalArgumentException(
        `Unknown traversal mode: ${mode as string}`,
      );
  }
};
