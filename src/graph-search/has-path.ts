import IGraph from "../data-structures/Graph/interface/IGraph";
import IGraphIterationStrategy from "../data-structures/Graph/strategy/interface/IGraphIterationStrategy";
import IGraphIterator from "../data-structures/Graph/iterator/interface/IGraphIterator";

export default function hasPath<V>(
  graph: IGraph<V>,
  from: V,
  to: V,
  strategy: IGraphIterationStrategy<V>
): boolean {
  const iterator: IGraphIterator<V> = strategy.createIterator(graph, from);

  while (iterator.hasNext()) {
    const next = iterator.next();

    if (next === to) {
      return true;
    }
  }

  return false;
}
