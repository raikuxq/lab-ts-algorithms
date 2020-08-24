export default interface IQueue<T> {
  isEmpty(): boolean;
  add(item: T): void;
  peek(): T | null;
  pop(): T;
}
