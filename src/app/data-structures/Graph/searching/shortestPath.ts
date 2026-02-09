import IGraph from "src/app/types/IGraph";
import IGraphIterator from "src/app/types/IGraphIterator";
import IsNotFoundException from "src/app/exceptions/IsNotFoundException";
import { EnumGraphTraversalType } from "src/app/types/EnumGraphTraversalType";
import { createGraphIterator } from "src/app/data-structures/Graph/iterator/createGraphIterator";

/**
 * Find the shortest path between two vertices
 * @throws {IsNotFoundException} when start vertex was not found
 * @throws {IsNotFoundException} when end vertex was not found
 * @throws {IllegalStateException} when there is no path between two vertices
 */
export const shortestPath = <T>({
  graph,
  traversalType,
  from,
  to,
}: {
  graph: IGraph<T>;
  from: T;
  to: T;
  traversalType: EnumGraphTraversalType;
}): Array<T> => {
  /* Validate */
  if (!graph.hasVertex(from)) {
    throw new IsNotFoundException("Start vertex was not found");
  }
  if (!graph.hasVertex(to)) {
    throw new IsNotFoundException("End vertex was not found");
  }

  const iterator: IGraphIterator<T> = createGraphIterator(graph, traversalType);
  iterator.initIterator(from);

  /* Find target element */
  while (iterator.hasNext()) {
    const next = iterator.next();

    if (next === to) {
      break;
    }
  }

  return iterator.getPath(from, to);
};
