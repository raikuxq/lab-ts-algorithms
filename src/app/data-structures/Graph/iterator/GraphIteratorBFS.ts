import Queue from "src/app/data-structures/Queue/Queue";
import IGraph from "src/app/types/IGraph";
import AbstractGraphIterator from "src/app/data-structures/Graph/iterator/AbstractGraphIterator";

/**
 * Breadth first graph traversal
 */
export default class GraphIteratorBFS<T> extends AbstractGraphIterator<T> {
  private readonly queue: Queue<T>;

  /**
   * @inheritDoc
   */
  public constructor(graph: IGraph<T>) {
    super(graph);
    this.queue = new Queue();
  }

  /**
   * @inheritDoc
   */
  protected currentImpl(): T {
    return this.queue.peek();
  }

  /**
    @inheritDoc
   */
  public initIteratorImpl(startVertex: T): void {
    this.queue.push(startVertex);
    this.visited.set(startVertex, true);
  }

  /**
   * @inheritDoc
   */
  public hasNextImpl(): boolean {
    return !this.queue.isEmpty();
  }

  /**
   * @inheritDoc
   */
  protected nextImpl(): T {
    const next = this.queue.pop();
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
}
