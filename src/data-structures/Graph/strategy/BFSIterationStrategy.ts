import IGraphIterationStrategy from "../../../types/IGraphIterationStrategy";
import IGraphIterator from "../../../types/IGraphIterator";
import IGraph from "../../../types/IGraph";
import GraphIteratorBFS from "../iterator/GraphIteratorBFS";

export default class BFSIterationStrategy<T>
  implements IGraphIterationStrategy<T> {
  public createIterator(graph: IGraph<T>, startVertex: T): IGraphIterator<T> {
    return new GraphIteratorBFS<T>(graph, startVertex);
  }
}
