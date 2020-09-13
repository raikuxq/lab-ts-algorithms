import IGraph from "../../data-structures/IGraph";
import IIterator from "../../data-structures/IIterator";
import IGraphIterationStrategy from "./IGraphIterationStrategy";
import GraphIteratorDFS from "../iterator/GraphIteratorDFS";

export default class DFSIterationStrategy<V> implements IGraphIterationStrategy<V>{

  public createIterator(graph: IGraph<V>, startVertex: V): IIterator<V> {
    return new GraphIteratorDFS(graph, startVertex);
  }

}
