export default interface ILinkedList<T> {
  length: number;
  isEmpty(): boolean;

  // accession
  peekHead(): T;
  peekTail(): T;
  getByIndex(index: number): T;
  getAsArray(): Array<T>;

  // addition
  push(value: T): void;
  unshift(value: T): void;
  pushFromArray(elements: Array<T>): void;

  // deletion
  pop(): T;
  shift(): T;
  clear(): void;

  reverse(): void;
}
