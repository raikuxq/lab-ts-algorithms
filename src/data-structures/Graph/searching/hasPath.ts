import IGraph from "../../../types/IGraph";
import IGraphIterator from "../../../types/IGraphIterator";
import IGraphIterationStrategy from "../../../types/IGraphIterationStrategy";

/**
 * Check if graph has a path between two vertices
 *
 * @param graph - graph instance
 * @param from - start vertex
 * @param to - finish vertex
 * @param strategy - traversal method
 * @throws when one of vertices was not found
 * @returns boolean
 */
export const hasPath = <V>(
  graph: IGraph<V>,
  from: V,
  to: V,
  strategy: IGraphIterationStrategy<V>
): boolean => {
  /* Validate */
  if (!graph.hasVertex(from)) {
    throw new Error("Start vertex was not found");
  }
  if (!graph.hasVertex(to)) {
    throw new Error("End vertex was not found");
  }

  const iterator: IGraphIterator<V> = strategy.createIterator(graph, from);

  /* Find target element */
  while (iterator.hasNext()) {
    const next = iterator.next();

    if (next === to) {
      return true;
    }
  }

  return false;
};
