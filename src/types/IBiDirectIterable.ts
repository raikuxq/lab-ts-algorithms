import IBiDirectIterator from "./IBiDirectIterator";
import IIterable from "./IIterable";

export default interface IBiDirectIterable<T> extends IIterable<T> {
  iterator(fromIndex?: number): IBiDirectIterator<T>;
}
