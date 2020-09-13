export default interface IIterator<V> {
  next(cb?: Function): V;
  current(): V;
  hasNext(): boolean;
}
