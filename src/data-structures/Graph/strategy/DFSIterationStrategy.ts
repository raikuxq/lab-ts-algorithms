import AbstractGraph from "../AbstractGraph";
import IGraphIterationStrategy from "./interface/IGraphIterationStrategy";
import IGraphIterator from "../iterator/interface/IGraphIterator";
import GraphIteratorDFS from "../iterator/GraphIteratorDFS";

export default class DFSIterationStrategy<V>
  implements IGraphIterationStrategy<V> {
  public createIterator(
    graph: AbstractGraph<V>,
    startVertex: V
  ): IGraphIterator<V> {
    return new GraphIteratorDFS(graph, startVertex);
  }
}
