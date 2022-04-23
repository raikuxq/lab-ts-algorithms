import IGraph from "../../../types/IGraph";

/**
 * Get graph adjacency list
 *
 * @example
 *
 * Directed graph:
 * - Bob [Maria]
 * - Maria [Bob, John]
 * - John []
 *
 * @example
 *
 * Undirected graph:
 * - Bob [Maria]
 * - Maria [Bob, John]
 * - John [Maria]
 **/
export const presenterAdjacencyLists = <T>(
  graph: IGraph<T>
): Map<T, Array<T>> => {
  return graph.vertices().reduce((map: Map<T, Array<T>>, vertex: T) => {
    const neighbors = graph.getVertexNeighbors(vertex);
    map.set(vertex, neighbors);

    return map;
  }, new Map());
};
