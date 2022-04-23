import IGraphIterator from "../../../types/IGraphIterator";
import IGraph from "../../../types/IGraph";

export default abstract class AbstractGraphIterator<T>
  implements IGraphIterator<T> {
  protected readonly graph: IGraph<T>;
  protected readonly visited: Map<T, boolean>;
  protected readonly parents: Map<T, T>;

  /**
   * Creates empty instance
   */
  protected constructor(graph: IGraph<T>) {
    this.graph = graph;
    this.visited = new Map();
    this.parents = new Map();
  }

  protected abstract currentImpl(): T;
  protected abstract nextImpl(): T;
  protected abstract initIteratorImpl(from: T): void;
  protected abstract hasNextImpl(): boolean;

  /**
   * @inheritDoc
   */
  public initIterator(from: T): void {
    if (!this.graph.hasVertex(from)) {
      throw new Error("Start vertex does not exist");
    }
    this.initIteratorImpl(from);
  }

  /**
   * @inheritDoc
   */
  public hasNext(): boolean {
    return this.hasNextImpl();
  }

  /**
   * @inheritDoc
   */
  public next(): T {
    try {
      if (!this.hasNext()) {
        throw new Error();
      }

      return this.nextImpl();
    } catch (e) {
      throw new Error("Next element does not exist");
    }
  }

  /**
   * @inheritDoc
   */
  public current(): T {
    try {
      const current = this.currentImpl();

      if (current === null) {
        throw new Error();
      }
      return current;
    } catch (e) {
      throw new Error("Current element does not exist");
    }
  }

  /**
   * @inheritDoc
   */
  public getPath(from: T, to: T): Array<T> {
    const path: Array<T> = new Array<T>();
    const isLinkedDirectly = this.graph.hasEdge(from, to);
    let currentVertex = this.parents.get(to);

    if (isLinkedDirectly) {
      return [from, to];
    } else {
      while (currentVertex) {
        if (currentVertex === from) {
          break;
        }

        path.push(currentVertex);
        currentVertex = this.parents.get(currentVertex);
      }

      if (path.length === 0) {
        throw new Error("There is no path found");
      }

      return [from, ...path.reverse(), to];
    }
  }
}
