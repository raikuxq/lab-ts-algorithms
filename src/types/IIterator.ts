export default interface IIterator<T> {
  /**
   * Will do one iteration and returns next item value
   */
  next(): T;

  /**
   * Will returns current value
   */
  current(): T;

  /**
   * Check if next element exists
   */
  hasNext(): boolean;
}
