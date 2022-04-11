import IGraph from "./IGraph";
import IGraphIterator from "./IGraphIterator";

export default interface IGraphIterationStrategy<T> {
  createIterator(graph: IGraph<T>, startVertex: T): IGraphIterator<T>;
}
