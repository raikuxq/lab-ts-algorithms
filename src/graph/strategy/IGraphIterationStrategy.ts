import IIterator from "../../data-structures/IIterator";
import IGraph from "../../data-structures/IGraph";

export default interface IGraphIterationStrategy<V> {
  createIterator(graph: IGraph<V>, startVertex: V): IIterator<V>;
}
