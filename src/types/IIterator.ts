export default interface IIterator<T> {
  next(): T;
  current(): T;
  hasNext(): boolean;
}
