import IGraph from "../../data-structures/IGraph";
import IGraphIterator from "./IGraphIterator";

export default class GraphIteratorDijkstra<V> implements IGraphIterator<V> {

  private readonly graph: IGraph<V>;
  private readonly visited: Map<V, boolean>;
  private readonly costs: Map<V, number>;
  private readonly parents: Map<V, V>;

  public constructor(graph: IGraph<V>, startVertex: V) {
    if (!graph.hasVertex(startVertex)) {
      throw new Error('Start vertex does not exist');
    }

    this.graph = graph;
    this.visited = new Map();
    this.costs = new Map();
    this.parents = new Map();
    this.initIterator(startVertex);
  }

  private initIterator(from: V): void {
    this.visited.set(from, true);
    this.costs.set(from, 0);

    this.graph.getVertexNeighbors(from).forEach((neighbor: V) => {
      const edgeWeight = this.graph.getEdgeWeightByVertices(from, neighbor);
      this.costs.set(neighbor, edgeWeight);
      this.parents.set(neighbor, from);
    })

  }

  private getClosestNotVisited(): V | null {
    const keys = Array.from(this.costs.keys());
    const onlyNotVisitedKeys = keys
      .filter((key: V) => !this.visited.get(key))
      .sort((aKey: V, bKey: V) => {
        const aCost = this.costs.get(aKey) || 0;
        const bCost = this.costs.get(bKey) || 0;

        return aCost - bCost;
      });

    const closestNotVisitedElement = onlyNotVisitedKeys[0] || null;

    return closestNotVisitedElement;
  }


  public hasNext(): boolean {
    return Boolean(this.getClosestNotVisited());
  }


  public current(): V {
    const current = this.getClosestNotVisited();

    if (!current) {
      throw new Error('Current element does not exist');
    }

    return current;
  }


  public next(): V {
    const next = this.getClosestNotVisited();

    if (!next) {
      throw new Error('Next element does not exist');
    }

    this.visited.set(next, true);
    const nextNeighbors = this.graph.getVertexNeighbors(next);
    const nextCost = this.costs.get(next);

    nextNeighbors.forEach((neighbor: V) => {
      const edgeWeight = this.graph.getEdgeWeightByVertices(next, neighbor);
      const currentNeighborCost = this.costs.get(neighbor) || Infinity;
      const newNeighborCost = (nextCost || 0) + edgeWeight;

      if (newNeighborCost < currentNeighborCost) {
        this.costs.set(neighbor, newNeighborCost);
        this.parents.set(neighbor, next);
      }

    })

    return next;
  }


  public getPath(from: V, to: V): Array<V> {
    const path: Array<V> = [];

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
