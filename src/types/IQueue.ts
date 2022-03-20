export default interface IQueue<T> {
  peek(): T;
  enqueue(item: T): void;
  dequeue(): T;
  isEmpty(): boolean;
  isFull(): boolean;
  clear(): void;
}
