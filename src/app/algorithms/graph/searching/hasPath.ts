import IGraph from "../../../types/IGraph";
import IGraphIterator from "../../../types/IGraphIterator";
import IGraphIterationStrategy from "../../../types/IGraphIterationStrategy";
import IsNotFoundException from "../../../exceptions/IsNotFoundException";

/**
 * Check if graph has a path between two vertices
 * @throws {IsNotFoundException} when start vertex was not found
 * @throws {IsNotFoundException} when end vertex was not found
 * @throws {IllegalStateException} when there is no path between two vertices
 */
export const hasPath = <T>(
  graph: IGraph<T>,
  from: T,
  to: T,
  strategy: IGraphIterationStrategy<T>
): boolean => {
  /* Validate */
  if (!graph.hasVertex(from)) {
    throw new IsNotFoundException("Start vertex was not found");
  }
  if (!graph.hasVertex(to)) {
    throw new IsNotFoundException("End vertex was not found");
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
