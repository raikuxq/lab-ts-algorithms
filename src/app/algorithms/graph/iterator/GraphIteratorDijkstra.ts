import IGraph from "../../../types/IGraph";
import AbstractGraphIterator from "./AbstractGraphIterator";
import IllegalStateException from "../../../exceptions/base/IllegalStateException";

/**
 * Dijkstra method graph traversal
 */
export default class GraphIteratorDijkstra<T> extends AbstractGraphIterator<T> {
  private readonly costs: Map<T, number>;

  /**
   * @inheritDoc
   */
  public constructor(graph: IGraph<T>) {
    super(graph);
    this.costs = new Map();
  }

  /**
   * Get not visited vertex with minimal cost
   */
  private getClosestNotVisited(): T {
    const keys = Array.from(this.costs.keys());
    const priorityList = keys
      .filter((key: T) => !this.visited.get(key))
      .sort((aKey: T, bKey: T) => {
        const aCost = this.costs.get(aKey) || 0;
        const bCost = this.costs.get(bKey) || 0;

        return aCost - bCost;
      });

    if (priorityList[0] === undefined) {
      throw new IllegalStateException("No more vertices found");
    }

    return priorityList[0];
  }

  /**
   * @inheritDoc
   */
  public initIteratorImpl(startVertex: T): void {
    this.visited.set(startVertex, true);
    this.costs.set(startVertex, 0);

    this.graph.getVertexNeighbors(startVertex).forEach((neighbor: T) => {
      const edgeWeight = this.graph.getEdgeWeight(startVertex, neighbor);
      this.costs.set(neighbor, edgeWeight);
      this.parents.set(neighbor, startVertex);
    });
  }

  /**
   * @inheritDoc
   */
  public hasNextImpl(): boolean {
    return !(this.getClosestNotVisited() === null);
  }

  /**
   * @inheritDoc
   */
  public currentImpl(): T {
    return this.getClosestNotVisited();
  }

  /**
   * @inheritDoc
   */
  public nextImpl(): T {
    const next = this.getClosestNotVisited();

    this.visited.set(next, true);
    const nextNeighbors = this.graph.getVertexNeighbors(next);
    const nextCost = this.costs.get(next);

    nextNeighbors.forEach((neighbor: T) => {
      const edgeWeight = this.graph.getEdgeWeight(next, neighbor);
      const currentNeighborCost = this.costs.get(neighbor) || Infinity;
      const newNeighborCost = (nextCost || 0) + edgeWeight;

      if (newNeighborCost < currentNeighborCost) {
        this.costs.set(neighbor, newNeighborCost);
        this.parents.set(neighbor, next);
      }
    });

    return next;
  }
}
