export default interface ILinkedList<T> {
  length: number;
  isEmpty(): boolean;
  peekHead(): T;
  peekTail(): T;
  getByIndex(index: number): T;
  getAsArray(): Array<T>;
  unshift(value: T): void;
  push(value: T): void;
  pushFromArray(elements: Array<T>): void;
  pop(): T;
  shift(): T;
  clear(): void;
  reverse(): void;
}
