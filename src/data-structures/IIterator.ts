export default interface IIterator<T> {
  /**
   * Iterate to the next step and gets its value
   */
  next(): T;

  /**
   * Get element on current iterator position
   */
  current(): T;

  /**
   * Check is next element exists
   */
  hasNext(): boolean;
}
