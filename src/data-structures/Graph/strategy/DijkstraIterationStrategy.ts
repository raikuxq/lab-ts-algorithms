import IGraph from "../interface/IGraph";
import IGraphIterationStrategy from "./interface/IGraphIterationStrategy";
import IGraphIterator from "../iterator/interface/IGraphIterator";
import GraphIteratorDijkstra from "../iterator/GraphIteratorDijkstra";

export default class DijkstraIterationStrategy<V>
  implements IGraphIterationStrategy<V> {
  public createIterator(graph: IGraph<V>, startVertex: V): IGraphIterator<V> {
    return new GraphIteratorDijkstra(graph, startVertex);
  }
}
