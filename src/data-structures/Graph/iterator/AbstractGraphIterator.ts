import IGraphIterator from "../../../types/IGraphIterator";
import IGraph from "../../../types/IGraph";

export default abstract class AbstractGraphIterator<T>
  implements IGraphIterator<T> {
  protected readonly graph: IGraph<T>;
  protected readonly visited: Map<T, boolean>;
  protected readonly parents: Map<T, T>;

  /**
   * Creates empty instance and does one iteration
   */
  protected constructor(graph: IGraph<T>) {
    this.graph = graph;
    this.visited = new Map();
    this.parents = new Map();
  }

  /**
   * @inheritDoc
   */
  public abstract initIterator(from: T): void;

  /**
   * @inheritDoc
   */
  public abstract hasNext(): boolean;

  /**
   * @inheritDoc
   */
  public abstract next(): T;

  /**
   * @inheritDoc
   */
  public abstract current(): T;

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
