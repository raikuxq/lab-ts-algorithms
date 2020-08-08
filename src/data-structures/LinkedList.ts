export default interface LinkedList<T> {
  length: number;
  isEmpty(): boolean;

  peekHead(): T | null;
  peekTail(): T | null;

  push(value: T): void;
  unshift(value: T): void;

  deleteNodesByValue(value: T): void;
  shift(): T | null;
  pop(): T | null;

  createFromArray(elements: Array<T>): void;
  getAsArray(): Array<T | null>;
};
