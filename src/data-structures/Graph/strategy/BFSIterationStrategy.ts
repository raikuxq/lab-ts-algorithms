import IGraphIterationStrategy from "../../../types/IGraphIterationStrategy";
import IGraphIterator from "../../../types/IGraphIterator";
import IGraph from "../../../types/IGraph";
import GraphIteratorBFS from "../iterator/GraphIteratorBFS";

export default class BFSIterationStrategy<V>
  implements IGraphIterationStrategy<V> {
  public createIterator(graph: IGraph<V>, startVertex: V): IGraphIterator<V> {
    return new GraphIteratorBFS<V>(graph, startVertex);
  }
}
