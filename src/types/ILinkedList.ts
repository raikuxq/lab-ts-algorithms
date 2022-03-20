export default interface ILinkedList<T> {
  length(): number;
  isEmpty(): boolean;

  /* access methods */
  peekHead(): T;
  peekTail(): T;
  getByIndex(index: number): T;
  getAsArray(): Array<T>;
  /* access methods ends */

  /* addition methods */
  unshift(value: T): void;
  push(value: T): void;
  pushFromIndex(value: T, fromIndex: number): void;
  pushFromArray(elements: Array<T>): void;
  /* addition methods ends */

  /* deleting methods */
  deleteFromIndex(fromIndex: number): T;
  pop(): T;
  shift(): T;
  clear(): void;
  /* deleting methods ends */

  /* changing structure methods */
  reverse(): void;
  /* changing structure methods ends */
}
