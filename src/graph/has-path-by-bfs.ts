import IGraph from "../data-structures/IGraph";
import IQueue from "../data-structures/IQueue";
import Queue from "../data-structures/Queue/Queue";

export default function hasPathByBFS<V>(graph: IGraph<V>, from: V, to: V): boolean {
  const queue: IQueue<V> = new Queue();
  const visited: Map<V, boolean> = new Map<V, boolean>();

  if (!graph.vertices.includes(from) || !graph.vertices.includes(to)) return false;

  queue.enqueue(from);

  while (!queue.isEmpty()) {
    const current = queue.dequeue();

    if (current) {
      /**
       * Element was found
       */
      if (current === to) {
        return true;
      }
      /**
       * Add element neighbors to queue
       */
      else {
        visited.set(current, true);
        graph.getVertexNeighbors(current).forEach((vertex) => {
          if (!visited.get(vertex)) {
            queue.enqueue(vertex);
          }
        })
      }
    }

  }

  return false;
}
