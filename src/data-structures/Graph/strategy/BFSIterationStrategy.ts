import IGraph from "../interface/IGraph";
import IGraphIterationStrategy from "./interface/IGraphIterationStrategy";
import GraphIteratorBFS from "../iterator/GraphIteratorBFS";
import IGraphIterator from "../iterator/interface/IGraphIterator";

export default class BFSIterationStrategy<V>
  implements IGraphIterationStrategy<V> {
  public createIterator(graph: IGraph<V>, startVertex: V): IGraphIterator<V> {
    return new GraphIteratorBFS<V>(graph, startVertex);
  }
}
