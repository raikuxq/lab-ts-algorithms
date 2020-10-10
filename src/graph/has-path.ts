import IGraph from "../data-structures/IGraph";
import IGraphIterationStrategy from "./strategy/IGraphIterationStrategy";
import IGraphIterator from "./iterator/IGraphIterator";

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
