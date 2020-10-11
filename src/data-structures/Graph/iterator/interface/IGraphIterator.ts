import IIterator from "../../../IIterator";

export default interface IGraphIterator<T> extends IIterator<T> {
  /**
   * Get path which passed by iterator between two vertices
   * @param from
   * @param to
   */
  getPath(from: T, to: T): Array<T>;
}
