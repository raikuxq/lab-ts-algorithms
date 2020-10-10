import IGraph from "../../data-structures/IGraph";
import IGraphIterationStrategy from "./IGraphIterationStrategy";
import GraphIteratorBFS from "../iterator/GraphIteratorBFS";
import IGraphIterator from "../iterator/IGraphIterator";

export default class BFSIterationStrategy<V>
  implements IGraphIterationStrategy<V> {
  public createIterator(graph: IGraph<V>, startVertex: V): IGraphIterator<V> {
    return new GraphIteratorBFS<V>(graph, startVertex);
  }
}
