import AbstractGraph from "../../AbstractGraph";
import IGraphIterator from "../../iterator/interface/IGraphIterator";

export default interface IGraphIterationStrategy<V> {
  createIterator(graph: AbstractGraph<V>, startVertex: V): IGraphIterator<V>;
}
