export default interface ICollection<T> {
  length(): number;
  isEmpty(): boolean;

  // ACCESS METHODS
  peekHead(): T;
  peekTail(): T;

  // ADDITION METHODS
  unshift(value: T): void;
  push(value: T): void;

  // DELETING METHODS
  pop(): T;
  shift(): T;
  clear(): void;
}
