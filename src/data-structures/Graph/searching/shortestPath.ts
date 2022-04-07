import IGraph from "../../../types/IGraph";
import IGraphIterator from "../../../types/IGraphIterator";
import IGraphIterationStrategy from "../../../types/IGraphIterationStrategy";

/**
 * Find the shortest path between two vertices
 *
 * @param graph - graph instance
 * @param from - start vertex
 * @param to - finish vertex
 * @param strategy - traversal method
 * @throws when one of vertices was not found
 * @returns Array - the shortest path
 */
export const shortestPath = <V>(
  graph: IGraph<V>,
  from: V,
  to: V,
  strategy: IGraphIterationStrategy<V>
): Array<V> => {
  const iterator: IGraphIterator<V> = strategy.createIterator(graph, from);

  /* Validate */
  if (!graph.hasVertex(from) || !graph.hasVertex(to)) {
    throw new Error("Invalid arguments: no such elements");
  }

  /* Find target element */
  while (iterator.hasNext()) {
    const next = iterator.next();

    if (next === to) {
      break;
    }
  }

  const fullPath = iterator.getPath(from, to);
  if (fullPath.length === 2 && !graph.hasEdge(from, to)) {
    throw new Error("There is no path found");
  }

  return fullPath;
};
