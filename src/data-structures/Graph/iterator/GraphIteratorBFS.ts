import Queue from "../../Queue/Queue";
import IGraph from "../../../types/IGraph";
import AbstractGraphIterator from "./AbstractGraphIterator";

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
    @inheritDoc
   */
  public initIterator(startVertex: T): void {
    this.queue.push(startVertex);
    this.visited.set(startVertex, true);
  }

  /**
   * @inheritDoc
   */
  public current(): T {
    try {
      return this.queue.peek();
    } catch (e) {
      throw new Error("Current element does not exist");
    }
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
  public next(): T {
    if (!this.hasNext()) {
      throw new Error("Next element does not exist");
    }

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
