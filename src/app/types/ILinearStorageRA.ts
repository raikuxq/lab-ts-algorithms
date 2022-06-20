import ILinearStorage from "./ILinearStorage";

/**
 * Interface extends default linear storage with methods that allows read/write operations for all storage elements
 * RA - randomly accessible
 */
export default interface ILinearStorageRA<T> extends ILinearStorage<T> {
  peekFromStart(): T;
  peekByIndex(index: number): T;
  unshift(value: T): void;
  pushFromIndex(value: T, fromIndex: number): void;
  shift(): T;
  deleteFromIndex(fromIndex: number): T;
}
