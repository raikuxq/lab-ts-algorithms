import IGraph from "./IGraph";

export default interface IGraphCreator<T> {
  createGraph(): IGraph<T>;
}
