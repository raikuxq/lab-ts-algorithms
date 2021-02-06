import Stack from "../../Stack/Stack";
import IGraphIterator from "../IGraphIterator";
import IGraph from "../IGraph";

export default class GraphIteratorDFS<V> implements IGraphIterator<V> {
  private readonly graph: IGraph<V>;
  private readonly stack: Stack<V>;
  private readonly visited: Map<V, boolean>;
  private readonly parents: Map<V, V>;

  public constructor(graph: IGraph<V>, startVertex: V) {
    if (!graph.hasVertex(startVertex)) {
      throw new Error("Start vertex does not exist");
    }

    this.graph = graph;
    this.stack = new Stack(Infinity);
    this.visited = new Map();
    this.parents = new Map();

    this.stack.push(startVertex);
    this.visited.set(startVertex, true);
  }

  public hasNext(): boolean {
    return !this.stack.isEmpty();
  }

  /**
   * @inheritDoc
   */
  public current(): V {
    const current = this.stack.peek();

    if (!current) {
      throw new Error("Current element does not exist");
    }

    return current;
  }

  /**
   * @inheritDoc
   */
  public next(): V {
    const next = this.stack.pop();

    if (!next) {
      throw new Error("Next element does not exist");
    }

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
