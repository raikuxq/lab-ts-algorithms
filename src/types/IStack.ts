export default interface IStack<T> {
  peek(): T;
  push(item: T): void;
  pop(): T;
  isEmpty(): boolean;
  isFull(): boolean;
  clear(): void;
}
