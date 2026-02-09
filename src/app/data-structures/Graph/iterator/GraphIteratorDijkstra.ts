import IGraph from "src/app/types/IGraph";
import AbstractGraphIterator from "src/app/data-structures/Graph/iterator/AbstractGraphIterator";
import IllegalStateException from "src/app/exceptions/base/IllegalStateException";
import PriorityQueue from "src/app/data-structures/PriorityQueue/PriorityQueue";

/**
 * Dijkstra method graph traversal using a Priority Queue.
 */
export default class GraphIteratorDijkstra<T> extends AbstractGraphIterator<T> {
  private readonly costs: Map<T, number>;
  private readonly queue: PriorityQueue<T>;

  /**
   * @inheritDoc
   */
  public constructor(graph: IGraph<T>) {
    super(graph);
    this.costs = new Map();
    this.queue = new PriorityQueue<T>();
  }

  /**
   * @inheritDoc
   */
  public initIteratorImpl(startVertex: T): void {
    this.costs.set(startVertex, 0);
    this.queue.enqueue(startVertex, 0);
  }

  /**
   * @inheritDoc
   */
  public hasNextImpl(): boolean {
    this.refreshQueue();
    return !this.queue.isEmpty();
  }

  /**
   * @inheritDoc
   */
  public currentImpl(): T {
    this.refreshQueue();
    if (this.queue.isEmpty()) {
      throw new IllegalStateException("No more vertices found");
    }
    return this.queue.peek();
  }

  /**
   * @inheritDoc
   */
  public nextImpl(): T {
    this.refreshQueue();

    if (this.queue.isEmpty()) {
      throw new IllegalStateException("No more vertices found");
    }

    const current = this.queue.dequeue();
    this.visited.set(current, true);

    const neighbors = this.graph.getVertexNeighbors(current);
    const currentCost = this.costs.get(current) ?? 0;

    for (const neighbor of neighbors) {
      if (this.visited.get(neighbor)) continue;

      const edgeWeight = this.graph.getEdgeWeight(current, neighbor);
      const newCost = currentCost + edgeWeight;
      const oldCost = this.costs.get(neighbor) ?? Infinity;

      if (newCost < oldCost) {
        this.costs.set(neighbor, newCost);
        this.parents.set(neighbor, current);
        this.queue.enqueue(neighbor, newCost);
      }
    }

    return current;
  }

  /**
   * Removes stale entries from the queue top.
   */
  private refreshQueue(): void {
    while (!this.queue.isEmpty() && this.visited.get(this.queue.peek())) {
      this.queue.dequeue();
    }
  }
}
