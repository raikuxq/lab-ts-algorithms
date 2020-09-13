import IGraph from "../../data-structures/IGraph";
import IIterator from "../../data-structures/IIterator";
import IStack from "../../data-structures/IStack";
import Stack from "../../data-structures/Stack/Stack";

export default class GraphIteratorDFS<V> implements IIterator<V> {

  private readonly graph: IGraph<V>;
  private readonly stack: IStack<V>;
  private readonly visited: Map<V, boolean>;

  public constructor(graph: IGraph<V>, startVertex: V) {

    if (!graph.hasVertex(startVertex)) {
      throw new Error('Start vertex does not exist');
    }

    this.graph = graph;
    this.stack = new Stack<V>(Infinity);
    this.visited = new Map<V, boolean>();

    this.stack.push(startVertex);
    this.visited.set(startVertex, true);
  }


  public hasNext(): boolean {
    return !this.stack.isEmpty();
  }


  public current(): V {
    const current = this.stack.peek();

    if (!current) {
      throw new Error('Current element does not exist');
    }

    return current;
  }


  public next(cb?: Function): V {

    const next = this.stack.pop();

    if (!next) {
      throw new Error('Next element does not exist');
    }

    const nextNeighbors = this.graph.getVertexNeighbors(next);

    nextNeighbors.forEach((neighbor) => {
      const isNotVisited = !this.visited.get(neighbor);

      if (isNotVisited) {
        this.stack.push(neighbor);
        this.visited.set(neighbor, true);

        if (cb) {
          cb(neighbor);
        }

      }
    })

    return next;
  }
}
