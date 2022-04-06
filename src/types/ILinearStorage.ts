export default interface ILinearStorage<T> {
  peek(): T;
  push(value: T): void;
  pop(): T;
  has(value: T): boolean;
  isEmpty(): boolean;
  isFull(): boolean;
  length(): number;
  clear(): void;
  reverse(): void;
}
