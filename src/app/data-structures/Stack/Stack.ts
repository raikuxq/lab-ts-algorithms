import ILinearStorage from "src/app/types/ILinearStorage";
import CollectionIsEmptyException from "src/app/exceptions/CollectionIsEmptyException";
import CollectionIsFullException from "src/app/exceptions/CollectionIsFullException";

export default class Stack<T> implements ILinearStorage<T>, Iterable<T> {
  private readonly _items: T[] = [];
  private readonly _capacity: number | undefined;

  public constructor(capacity?: number) {
    this._capacity = capacity;
  }

  public length(): number {
    return this._items.length;
  }

  public isEmpty(): boolean {
    return this._items.length === 0;
  }

  public isFull(): boolean {
    return (
      this._capacity !== undefined && this._items.length === this._capacity
    );
  }

  public peek(): T {
    if (this.isEmpty()) {
      throw new CollectionIsEmptyException("Cannot peek when list is empty");
    }
    return this._items[this._items.length - 1];
  }

  public push(item: T): void {
    if (this.isFull()) {
      throw new CollectionIsFullException("Stack is full");
    }
    this._items.push(item);
  }

  public pop(): T {
    if (this.isEmpty()) {
      throw new CollectionIsEmptyException("Cannot pop when stack is empty");
    }
    return this._items.pop()!;
  }

  public has(item: T): boolean {
    return this._items.includes(item);
  }

  public clear(): void {
    this._items.length = 0;
  }

  public reverse(): void {
    this._items.reverse();
  }

  public *[Symbol.iterator](): Iterator<T> {
    yield* this._items;
  }
}
