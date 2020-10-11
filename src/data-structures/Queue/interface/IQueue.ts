export default interface IQueue<T> {
  isEmpty(): boolean;
  enqueue(item: T): void;
  dequeue(): T;
  peek(): T;
  clear(): void;
}
