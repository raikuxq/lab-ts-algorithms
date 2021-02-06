import IGraph from "../IGraph";
import IGraphIterationStrategy from "../IGraphIterationStrategy";
import IGraphIterator from "../IGraphIterator";
import GraphIteratorDFS from "../iterator/GraphIteratorDFS";

export default class DFSIterationStrategy<V>
  implements IGraphIterationStrategy<V> {
  public createIterator(graph: IGraph<V>, startVertex: V): IGraphIterator<V> {
    return new GraphIteratorDFS(graph, startVertex);
  }
}
