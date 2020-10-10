import IQueue from "../IQueue";
import ILinkedList from "../ILinkedList";

export default class Queue<T> implements IQueue<T> {
  private readonly _list: ILinkedList<T>;

  public constructor();

  public peek(): T | null;

  public enqueue(item: T): void;

  public dequeue(): T;

  public isEmpty(): boolean;

  public clear(): void;
}
