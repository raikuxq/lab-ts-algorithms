import Stack from "../../Stack/Stack";
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
  public hasNext(): boolean {
    return !this.stack.isEmpty();
  }

  /**
   @inheritDoc
   */
  public initIterator(startVertex: T): void {
    this.stack.push(startVertex);
    this.visited.set(startVertex, true);
  }

  /**
   * @inheritDoc
   */
  public current(): T {
    try {
      return this.stack.peek();
    } catch (e) {
      throw new Error("Current element does not exist");
    }
  }

  /**
   * @inheritDoc
   */
  public next(): T {
    if (!this.hasNext()) {
      throw new Error("Next element does not exist");
    }
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
