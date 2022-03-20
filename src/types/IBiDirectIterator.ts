import IIterator from "./IIterator";

export default interface IBiDirectIterator<T> extends IIterator<T> {
  prev(): T;
}
