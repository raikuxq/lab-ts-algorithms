import IGraph from "../../data-structures/IGraph";
import IGraphIterator from "../iterator/IGraphIterator";

export default interface IGraphIterationStrategy<V> {
  createIterator(graph: IGraph<V>, startVertex: V): IGraphIterator<V>;
}
