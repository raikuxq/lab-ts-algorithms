import IGraph from "../IGraph";
import IGraphIterationStrategy from "../IGraphIterationStrategy";
import IGraphIterator from "../IGraphIterator";
import GraphIteratorDijkstra from "../iterator/GraphIteratorDijkstra";

export default class DijkstraIterationStrategy<V>
  implements IGraphIterationStrategy<V> {
  public createIterator(graph: IGraph<V>, startVertex: V): IGraphIterator<V> {
    return new GraphIteratorDijkstra(graph, startVertex);
  }
}
