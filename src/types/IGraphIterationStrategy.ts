import IGraph from "./IGraph";
import IGraphIterator from "./IGraphIterator";

export default interface IGraphIterationStrategy<V> {
  createIterator(graph: IGraph<V>, startVertex: V): IGraphIterator<V>;
}
