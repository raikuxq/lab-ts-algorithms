import ICollection from "./ICollection";

export default interface ILinkedList<T> extends ICollection<T> {
  /* access methods */
  getByIndex(index: number): T;
  getAsArray(): Array<T>;
  /* access methods ends */

  /* addition methods */
  pushFromIndex(value: T, fromIndex: number): void;
  pushFromArray(elements: Array<T>): void;
  /* addition methods ends */

  /* deleting methods */
  deleteFromIndex(fromIndex: number): T;
  /* deleting methods ends */

  /* changing structure methods */
  reverse(): void;
  /* changing structure methods ends */
}
