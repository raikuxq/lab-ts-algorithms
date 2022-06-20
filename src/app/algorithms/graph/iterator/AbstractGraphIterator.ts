import IGraphIterator from "../../../types/IGraphIterator";
import IGraph from "../../../types/IGraph";
import IsNotFoundException from "../../../exceptions/IsNotFoundException";
import IllegalStateException from "../../../exceptions/base/IllegalStateException";

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
      throw new IsNotFoundException("Start vertex does not exist");
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
    if (!this.hasNext()) {
      throw new IllegalStateException("Next element does not exist");
    }

    return this.nextImpl();
  }

  /**
   * @inheritDoc
   */
  public current(): T {
    try {
      return this.currentImpl();
    } catch (e) {
      throw new IllegalStateException("Current element does not exist");
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
        throw new IllegalStateException("There is no path found");
      }

      return [from, ...path.reverse(), to];
    }
  }
}
