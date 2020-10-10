import IGraph from "../interface/IGraph";
import IGraphIterationStrategy from "./interface/IGraphIterationStrategy";
import GraphIteratorDijkstra from "../iterator/GraphIteratorDijkstra";
import IGraphIterator from "../iterator/interface/IGraphIterator";

export default class DijkstraIterationStrategy<V>
  implements IGraphIterationStrategy<V> {
  public createIterator(graph: IGraph<V>, startVertex: V): IGraphIterator<V> {
    return new GraphIteratorDijkstra(graph, startVertex);
  }
}
