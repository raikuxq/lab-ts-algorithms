import IStack from "../IStack";
import ILinkedList from "../ILinkedList";
import DoubleLinkedList from "../DoubleLinkedList/DoubleLinkedList";

export default class Stack<T> implements IStack<T> {
  private readonly _list: ILinkedList<T>;
  private readonly _capacity: number;

  public constructor(capacity: number) {
    this._capacity = capacity;
    this._list = new DoubleLinkedList();
  }

  public push(item: T) {
    if (this.isFull()) throw new Error('Stack is full');

    this._list.push(item);
  }

  public peek(): T {
    if (this.isEmpty()) throw new Error('Stack is empty');

    return this._list.peekHead();
  }

  public pop(): T {
    if (this.isEmpty()) throw new Error('Stack is empty');

    return this._list.pop();
  }

  public isEmpty(): boolean {
    return this._list.length === 0;
  }

  public isFull(): boolean {
    return this._list.length >= this._capacity;
  }
}
