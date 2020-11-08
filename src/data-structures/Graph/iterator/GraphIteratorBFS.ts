import AbstractGraph from "../AbstractGraph";
import Queue from "../../Queue/Queue";
import IGraphIterator from "./interface/IGraphIterator";

export default class GraphIteratorBFS<V> implements IGraphIterator<V> {
  private readonly graph: AbstractGraph<V>;
  private readonly queue: Queue<V>;
  private readonly visited: Map<V, boolean>;
  private readonly parents: Map<V, V>;

  public constructor(graph: AbstractGraph<V>, startVertex: V) {
    if (!graph.hasVertex(startVertex)) {
      throw new Error("Start vertex does not exist");
    }

    this.graph = graph;
    this.queue = new Queue();
    this.visited = new Map();
    this.parents = new Map();

    this.queue.enqueue(startVertex);
    this.visited.set(startVertex, true);
  }

  /**
   * @inheritDoc
   */
  public hasNext(): boolean {
    return !this.queue.isEmpty();
  }

  /**
   * @inheritDoc
   */
  public current(): V {
    const current = this.queue.peek();

    if (!current) {
      throw new Error("Current element does not exist");
    }

    return current;
  }

  /**
   * @inheritDoc
   */
  public next(): V {
    const next = this.queue.dequeue();

    if (!next) {
      throw new Error("Next element does not exist");
    }

    const nextNeighbors = this.graph.getVertexNeighbors(next);

    nextNeighbors.forEach((neighbor) => {
      const isNotVisited = !this.visited.get(neighbor);

      if (isNotVisited) {
        this.queue.enqueue(neighbor);
        this.visited.set(neighbor, true);
        this.parents.set(neighbor, next);
      }
    });

    return next;
  }

  /**
   * @inheritDoc
   */
  public getPath(from: V, to: V): Array<V> {
    const path: Array<V> = new Array<V>();
    let currentVertex = this.parents.get(to);

    while (currentVertex) {
      if (currentVertex === from) {
        break;
      }

      path.push(currentVertex);
      currentVertex = this.parents.get(currentVertex);
    }

    return [from, ...path.reverse(), to];
  }
}
