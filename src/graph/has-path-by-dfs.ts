import IGraph from "../data-structures/IGraph";
import IStack from "../data-structures/IStack";
import Stack from "../data-structures/Stack/Stack";

export default function hasPathByDFS<V>(graph: IGraph<V>, from: V, to: V): boolean {

  const visited: Map<V, boolean> = new Map<V, boolean>();
  const stack: IStack<V> = new Stack<V>(Infinity);

  stack.push(from);

  while(!stack.isEmpty()) {
    const current = stack.pop();

    /**
     * Element already has visited
     */
    if (visited.get(current)) {
      continue;
    }

    /**
     * Element was found
     */
    if (current === to) {
      return true;
    }

    visited.set(current, true);

    /**
     * Push other elements to stack
     */
    const neighbors = graph.getVertexNeighbors(current);

    neighbors.forEach((neighbor: V) => {
      stack.push(neighbor);
    });
  }

  return false;
}
