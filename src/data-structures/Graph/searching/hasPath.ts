import IGraph from "../../../types/IGraph";
import IGraphIterator from "../../../types/IGraphIterator";
import IGraphIterationStrategy from "../../../types/IGraphIterationStrategy";

/**
 * Check if graph has a path between two vertices
 * @throws when start vertex was not found
 * @throws when end vertex was not found
 * @throws when there is no path between two vertices
 */
export const hasPath = <T>(
  graph: IGraph<T>,
  from: T,
  to: T,
  strategy: IGraphIterationStrategy<T>
): boolean => {
  /* Validate */
  if (!graph.hasVertex(from)) {
    throw new Error("Start vertex was not found");
  }
  if (!graph.hasVertex(to)) {
    throw new Error("End vertex was not found");
  }

  const iterator: IGraphIterator<T> = strategy.createIterator(graph);
  iterator.initIterator(from);

  /* Find target element */
  while (iterator.hasNext()) {
    const next = iterator.next();

    if (next === to) {
      return true;
    }
  }

  return false;
};
