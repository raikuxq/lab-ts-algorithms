export default interface IStack<T> {
  isFull(): boolean;
  isEmpty(): boolean;
  push(item: T): void;
  peek(): T;
  pop(): T;
}
