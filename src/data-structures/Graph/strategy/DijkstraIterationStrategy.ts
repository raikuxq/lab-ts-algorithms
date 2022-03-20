import IGraph from "../../../types/IGraph";
import IGraphIterationStrategy from "../../../types/IGraphIterationStrategy";
import IGraphIterator from "../../../types/IGraphIterator";
import GraphIteratorDijkstra from "../iterator/GraphIteratorDijkstra";

export default class DijkstraIterationStrategy<V>
  implements IGraphIterationStrategy<V> {
  public createIterator(graph: IGraph<V>, startVertex: V): IGraphIterator<V> {
    return new GraphIteratorDijkstra(graph, startVertex);
  }
}
