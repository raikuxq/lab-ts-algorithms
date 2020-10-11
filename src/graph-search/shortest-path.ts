import IGraph from "../data-structures/Graph/interface/IGraph";
import IGraphIterator from "../data-structures/Graph/iterator/interface/IGraphIterator";
import IGraphIterationStrategy from "../data-structures/Graph/strategy/interface/IGraphIterationStrategy";

export default function shortestPath<V>(
  graph: IGraph<V>,
  from: V,
  to: V,
  strategy: IGraphIterationStrategy<V>
): Array<V> {
  const iterator: IGraphIterator<V> = strategy.createIterator(graph, from);

  /**
   * Validate
   */
  if (!graph.hasVertex(from) || !graph.hasVertex(to)) {
    throw new Error("Invalid arguments: no such elements");
  }

  /**
   * Find target element
   */
  while (iterator.hasNext()) {
    const next = iterator.next();

    if (next === to) {
      break;
    }
  }

  return iterator.getPath(from, to);
}