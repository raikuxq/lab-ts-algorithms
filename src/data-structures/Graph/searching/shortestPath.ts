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
 * @throws when start vertex was not found
 * @throws when end vertex was not found
 * @throws when there is no path between two vertices
 * @returns Array - the shortest path
 */
export const shortestPath = <T>(
  graph: IGraph<T>,
  from: T,
  to: T,
  strategy: IGraphIterationStrategy<T>
): Array<T> => {
  /* Validate */
  if (!graph.hasVertex(from)) {
    throw new Error("Start vertex was not found");
  }
  if (!graph.hasVertex(to)) {
    throw new Error("End vertex was not found");
  }

  const iterator: IGraphIterator<T> = strategy.createIterator(graph, from);

  /* Find target element */
  while (iterator.hasNext()) {
    const next = iterator.next();

    if (next === to) {
      break;
    }
  }

  const fullPath: Array<T> = iterator.getPath(from, to);
  if (fullPath.length === 2 && !graph.hasEdge(from, to)) {
    throw new Error("There is no path found");
  }

  return fullPath;
};
