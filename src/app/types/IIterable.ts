import IIterator from "./IIterator";

export default interface IIterable<T> {
  iterator(fromIndex?: number): IIterator<T>;
}
