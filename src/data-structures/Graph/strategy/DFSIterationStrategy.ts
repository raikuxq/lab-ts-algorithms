import IGraph from "../../../types/IGraph";
import IGraphIterationStrategy from "../../../types/IGraphIterationStrategy";
import IGraphIterator from "../../../types/IGraphIterator";
import GraphIteratorDFS from "../iterator/GraphIteratorDFS";

export default class DFSIterationStrategy<T>
  implements IGraphIterationStrategy<T> {
  public createIterator(graph: IGraph<T>, startVertex: T): IGraphIterator<T> {
    return new GraphIteratorDFS(graph, startVertex);
  }
}
