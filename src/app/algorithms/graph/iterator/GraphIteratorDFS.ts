import Stack from "../../../data-structures/Stack/Stack";
import IGraph from "../../../types/IGraph";
import AbstractGraphIterator from "./AbstractGraphIterator";

/**
 * Deep first graph traversal
 */
export default class GraphIteratorDFS<T> extends AbstractGraphIterator<T> {
  private readonly stack: Stack<T>;

  /**
   * @inheritDoc
   */
  public constructor(graph: IGraph<T>) {
    super(graph);
    this.stack = new Stack();
  }

  /**
   * @inheritDoc
   */
  public hasNextImpl(): boolean {
    return !this.stack.isEmpty();
  }

  /**
   @inheritDoc
   */
  public initIteratorImpl(startVertex: T): void {
    this.stack.push(startVertex);
    this.visited.set(startVertex, true);
  }

  /**
   * @inheritDoc
   */
  public currentImpl(): T {
    return this.stack.peek();
  }

  /**
   * @inheritDoc
   */
  public nextImpl(): T {
    const next = this.stack.pop();
    const nextNeighbors = this.graph.getVertexNeighbors(next);

    nextNeighbors.forEach((neighbor) => {
      const isNotVisited = !this.visited.get(neighbor);

      if (isNotVisited) {
        this.stack.push(neighbor);
        this.visited.set(neighbor, true);
        this.parents.set(neighbor, next);
      }
    });

    return next;
  }
}
