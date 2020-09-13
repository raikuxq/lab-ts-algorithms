import IGraph from "../data-structures/IGraph";
import IIterator from "../data-structures/IIterator";
import IGraphIterationStrategy from "./strategy/IGraphIterationStrategy";

export default function hasPath<V>(
  graph: IGraph<V>,
  from: V,
  to: V,
  strategy: IGraphIterationStrategy<V>
): boolean {

  const iterator: IIterator<V> = strategy.createIterator(graph, from);

  while (iterator.hasNext()) {
    const next = iterator.next();

    try {
      if (next === to) return true;
    } catch (e) {
      return false;
    }

  }

  return false;
}
