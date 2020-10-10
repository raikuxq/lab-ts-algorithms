import IGraph from "../interface/IGraph";
import IGraphIterationStrategy from "./interface/IGraphIterationStrategy";
import GraphIteratorDFS from "../iterator/GraphIteratorDFS";
import IGraphIterator from "../iterator/interface/IGraphIterator";

export default class DFSIterationStrategy<V>
  implements IGraphIterationStrategy<V> {
  public createIterator(graph: IGraph<V>, startVertex: V): IGraphIterator<V> {
    return new GraphIteratorDFS(graph, startVertex);
  }
}
