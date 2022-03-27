import Queue from "../../Queue/Queue";
import IGraphIterator from "../../../types/IGraphIterator";
import IGraph from "../../../types/IGraph";

/**
 * Breadth first graph traversal
 */
export default class GraphIteratorBFS<V> implements IGraphIterator<V> {
  private readonly graph: IGraph<V>;
  private readonly queue: Queue<V>;
  private readonly visited: Map<V, boolean>;
  private readonly parents: Map<V, V>;

  /**
   * Creates empty instance and does one iteration
   * @param graph - graph instance
   * @param startVertex - vertex where traversal starts
   * @throws when startVertex does not exist
   */
  public constructor(graph: IGraph<V>, startVertex: V) {
    if (!graph.hasVertex(startVertex)) {
      throw new Error("Start vertex does not exist");
    }

    this.graph = graph;
    this.queue = new Queue();
    this.visited = new Map();
    this.parents = new Map();

    this.queue.push(startVertex);
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
    const next = this.queue.pop();

    if (!next) {
      throw new Error("Next element does not exist");
    }

    const nextNeighbors = this.graph.getVertexNeighbors(next);

    nextNeighbors.forEach((neighbor) => {
      const isNotVisited = !this.visited.get(neighbor);

      if (isNotVisited) {
        this.queue.push(neighbor);
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
