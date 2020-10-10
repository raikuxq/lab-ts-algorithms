import IIterator from "../../data-structures/IIterator";

export default interface IGraphIterator<T> extends IIterator<T> {
  getPath(from: T, to: T): Array<T>;
}
