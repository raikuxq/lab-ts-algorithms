export default interface IHeap<T> extends Iterable<T> {
  readonly size: number;
  isEmpty(): boolean;

  peek(): T;
  insert(value: T): void;
  extractMin(): T;
}
