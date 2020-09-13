import IGraph from "../../data-structures/IGraph";
import IIterator from "../../data-structures/IIterator";
import IGraphIterationStrategy from "./IGraphIterationStrategy";
import GraphIteratorBFS from "../iterator/GraphIteratorBFS";

export default class BFSIterationStrategy<V> implements IGraphIterationStrategy<V>{

  public createIterator(graph: IGraph<V>, startVertex: V): IIterator<V> {
    return new GraphIteratorBFS<V>(graph, startVertex);
  }

}
