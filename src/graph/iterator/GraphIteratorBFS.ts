import IGraph from "../../data-structures/IGraph";
import IQueue from "../../data-structures/IQueue";
import IIterator from "../../data-structures/IIterator";
import Queue from "../../data-structures/Queue/Queue";

export default class GraphIteratorBFS<V> implements IIterator<V> {

  private readonly graph: IGraph<V>;
  private readonly queue: IQueue<V>;
  private readonly visited: Map<V, boolean>;

  public constructor(graph: IGraph<V>, startVertex: V) {

    if (!graph.hasVertex(startVertex)) {
      throw new Error('Start vertex does not exist');
    }

    this.graph = graph;
    this.queue = new Queue<V>();
    this.visited = new Map<V, boolean>();

    this.queue.enqueue(startVertex);
    this.visited.set(startVertex, true);
  }


  public hasNext(): boolean {
    return !this.queue.isEmpty();
  }


  public current(): V {
    const current = this.queue.peek();

    if (!current) {
      throw new Error('Current element does not exist');
    }

    return current;
  }


  public next(cb?: Function): V {

    const next = this.queue.dequeue();

    if (!next) {
      throw new Error('Next element does not exist');
    }

    const nextNeighbors = this.graph.getVertexNeighbors(next);

    nextNeighbors.forEach((neighbor) => {
      const isNotVisited = !this.visited.get(neighbor);

      if (isNotVisited) {
        this.queue.enqueue(neighbor);
        this.visited.set(neighbor, true);

        if (cb) {
          cb(neighbor);
        }

      }
    })

    return next;
  }
}
