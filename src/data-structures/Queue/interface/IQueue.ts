export default interface IQueue<T> {
  isEmpty(): boolean;
  enqueue(item: T): void;
  dequeue(): T | null;
  peek(): T | null;
  clear(): void;
}
