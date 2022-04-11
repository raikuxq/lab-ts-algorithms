import IGraph from "../../../types/IGraph";
import IGraphIterator from "../../../types/IGraphIterator";

/**
 * Dijkstra method graph traversal
 */
export default class GraphIteratorDijkstra<T> implements IGraphIterator<T> {
  private readonly graph: IGraph<T>;
  private readonly visited: Map<T, boolean>;
  private readonly costs: Map<T, number>;
  private readonly parents: Map<T, T>;

  /**
   * Creates empty instance and does one iteration
   * @param graph - graph instance
   * @param startVertex - vertex where traversal starts
   * @throws when startVertex does not exist
   */
  public constructor(graph: IGraph<T>, startVertex: T) {
    if (!graph.hasVertex(startVertex)) {
      throw new Error("Start vertex does not exist");
    }

    this.graph = graph;
    this.visited = new Map();
    this.costs = new Map();
    this.parents = new Map();
    this.initIterator(startVertex);
  }

  /**
   * Push first node and its neighbors to the costs and parents tables
   * @param startVertex
   * @private
   */
  private initIterator(startVertex: T): void {
    this.visited.set(startVertex, true);
    this.costs.set(startVertex, 0);

    this.graph.getVertexNeighbors(startVertex).forEach((neighbor: T) => {
      const edgeWeight = this.graph.getEdgeWeightByVertices(
        startVertex,
        neighbor
      );
      this.costs.set(neighbor, edgeWeight);
      this.parents.set(neighbor, startVertex);
    });
  }

  /**
   * Get closest (by cost) and not visited node
   * @private
   */
  private getClosestNotVisited(): T | null {
    const keys = Array.from(this.costs.keys());
    const priorityList = keys
      .filter((key: T) => !this.visited.get(key))
      .sort((aKey: T, bKey: T) => {
        const aCost = this.costs.get(aKey) || 0;
        const bCost = this.costs.get(bKey) || 0;

        return aCost - bCost;
      });

    return priorityList[0] || null;
  }

  /**
   * @inheritDoc
   */
  public hasNext(): boolean {
    return Boolean(this.getClosestNotVisited());
  }

  /**
   * @inheritDoc
   */
  public current(): T {
    const current = this.getClosestNotVisited();

    if (!current) {
      throw new Error("Current element does not exist");
    }

    return current;
  }

  /**
   * @inheritDoc
   */
  public next(): T {
    const next = this.getClosestNotVisited();

    if (!next) {
      throw new Error("Next element does not exist");
    }

    this.visited.set(next, true);
    const nextNeighbors = this.graph.getVertexNeighbors(next);
    const nextCost = this.costs.get(next);

    nextNeighbors.forEach((neighbor: T) => {
      const edgeWeight = this.graph.getEdgeWeightByVertices(next, neighbor);
      const currentNeighborCost = this.costs.get(neighbor) || Infinity;
      const newNeighborCost = (nextCost || 0) + edgeWeight;

      if (newNeighborCost < currentNeighborCost) {
        this.costs.set(neighbor, newNeighborCost);
        this.parents.set(neighbor, next);
      }
    });

    return next;
  }

  /**
   * @inheritDoc
   */
  public getPath(from: T, to: T): Array<T> {
    const path: Array<T> = [];

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
