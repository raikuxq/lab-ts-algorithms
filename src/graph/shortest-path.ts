import IGraph from "../data-structures/IGraph";
import IIterator from "../data-structures/IIterator";
import IGraphIterationStrategy from "./strategy/IGraphIterationStrategy";

export default function shortestPath<V>(
  graph: IGraph<V>,
  from: V,
  to: V,
  strategy: IGraphIterationStrategy<V>
): Array<V> {

  const iterator: IIterator<V> = strategy.createIterator(graph, from);
  const parents: Map<V, V> = new Map<V, V>();
  const path: Array<V> = new Array<V>();


  /**
   * Validate
   */
  if (!graph.hasVertex(from) || !graph.hasVertex(to)) {
    throw new Error('Invalid arguments: no such elements')
  }


  /**
   * Find target element and set parents table
   */
  while (iterator.hasNext()) {
    try {
      const current = iterator.current();

      iterator.next((neighbor: V) => {
        parents.set(neighbor, current);
      });

      if (current === to) {
        break;
      }

    } catch (e) {
      throw new Error('Next element does not exist')
    }
  }


  /**
   * Get closest path from parents map
   */
  let currentVertex = parents.get(to);

  while (currentVertex) {
    /**
     * Add to path
     */
    if (currentVertex !== from) {
      path.push(currentVertex);
    }

    /**
     * Iterate next
     */
    currentVertex = parents.get(currentVertex);

    /**
     * Stop
     */
    if (currentVertex === from) {
      break;
    }
  }


  /**
   * Full path
   */
  return [from, ...path.reverse(), to];
}
