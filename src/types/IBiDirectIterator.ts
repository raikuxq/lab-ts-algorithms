import IIterator from "./IIterator";

export default interface IBiDirectIterator<T> extends IIterator<T> {
  /**
   * Will do one iteration back and returns prev item value
   */
  prev(): T;
  /**
   * Check if next element exists
   */
  hasPrev(): boolean;
}
