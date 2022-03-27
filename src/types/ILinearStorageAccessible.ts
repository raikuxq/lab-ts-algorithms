import ILinearStorage from "./ILinearStorage";

export default interface ILinearStorageAccessible<T> extends ILinearStorage<T> {
  peekFromStart(): T;
  peekByIndex(index: number): T;
  unshift(value: T): void;
  pushFromIndex(value: T, fromIndex: number): void;
  shift(): T;
  deleteFromIndex(fromIndex: number): T;
  pushFromArray(elements: Array<T>): void;
  getAsArray(): Array<T>;
  reverse(): void;
}
