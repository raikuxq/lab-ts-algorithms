import IBiDirectIterator from "./IBiDirectIterator";

export default interface IBiDirectIterable<T> {
  iterator(fromIndex?: number): IBiDirectIterator<T>;
}
