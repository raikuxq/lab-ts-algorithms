import IGraph from "../../data-structures/IGraph";
import IGraphIterationStrategy from "./IGraphIterationStrategy";
import GraphIteratorDijkstra from "../iterator/GraphIteratorDijkstra";
import IGraphIterator from "../iterator/IGraphIterator";

export default class DijkstraIterationStrategy<V>
  implements IGraphIterationStrategy<V> {
  public createIterator(graph: IGraph<V>, startVertex: V): IGraphIterator<V> {
    return new GraphIteratorDijkstra(graph, startVertex);
  }
}
