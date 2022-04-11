import IGraph from "../../../types/IGraph";
import IGraphIterationStrategy from "../../../types/IGraphIterationStrategy";
import IGraphIterator from "../../../types/IGraphIterator";
import GraphIteratorDijkstra from "../iterator/GraphIteratorDijkstra";

export default class DijkstraIterationStrategy<T>
  implements IGraphIterationStrategy<T> {
  public createIterator(graph: IGraph<T>, startVertex: T): IGraphIterator<T> {
    return new GraphIteratorDijkstra(graph, startVertex);
  }
}
