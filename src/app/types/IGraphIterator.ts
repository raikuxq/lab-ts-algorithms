import IIterator from "./IIterator";

export default interface IGraphIterator<T> extends IIterator<T> {
  /**
   * Get path which passed by iterator between two vertices
   */
  getPath(from: T, to: T): Array<T>;

  /**
   * Initialize iterator by passing start vertex
   */
  initIterator(from: T): void;
}
