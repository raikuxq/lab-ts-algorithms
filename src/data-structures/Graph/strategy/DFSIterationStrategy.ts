import IGraph from "../../../types/IGraph";
import IGraphIterationStrategy from "../../../types/IGraphIterationStrategy";
import IGraphIterator from "../../../types/IGraphIterator";
import GraphIteratorDFS from "../iterator/GraphIteratorDFS";

export default class DFSIterationStrategy<V>
  implements IGraphIterationStrategy<V> {
  public createIterator(graph: IGraph<V>, startVertex: V): IGraphIterator<V> {
    return new GraphIteratorDFS(graph, startVertex);
  }
}
