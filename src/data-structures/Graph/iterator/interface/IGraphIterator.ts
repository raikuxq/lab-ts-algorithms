import IIterator from "../../../IIterator";

export default interface IGraphIterator<T> extends IIterator<T> {
  getPath(from: T, to: T): Array<T>;
}
