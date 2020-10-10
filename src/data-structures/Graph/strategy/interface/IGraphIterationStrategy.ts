import IGraph from "../../interface/IGraph";
import IGraphIterator from "../../iterator/interface/IGraphIterator";

export default interface IGraphIterationStrategy<V> {
  createIterator(graph: IGraph<V>, startVertex: V): IGraphIterator<V>;
}
