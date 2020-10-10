import IGraph from "../../data-structures/IGraph";
import IGraphIterationStrategy from "./IGraphIterationStrategy";
import GraphIteratorDFS from "../iterator/GraphIteratorDFS";
import IGraphIterator from "../iterator/IGraphIterator";

export default class DFSIterationStrategy<V>
  implements IGraphIterationStrategy<V> {
  public createIterator(graph: IGraph<V>, startVertex: V): IGraphIterator<V> {
    return new GraphIteratorDFS(graph, startVertex);
  }
}
