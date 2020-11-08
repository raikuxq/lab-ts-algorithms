import AbstractGraph from "../AbstractGraph";
import IGraphIterationStrategy from "./interface/IGraphIterationStrategy";
import IGraphIterator from "../iterator/interface/IGraphIterator";
import GraphIteratorBFS from "../iterator/GraphIteratorBFS";

export default class BFSIterationStrategy<V>
  implements IGraphIterationStrategy<V> {
  public createIterator(
    graph: AbstractGraph<V>,
    startVertex: V
  ): IGraphIterator<V> {
    return new GraphIteratorBFS<V>(graph, startVertex);
  }
}
