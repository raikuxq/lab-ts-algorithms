import DoubleLinkedNode from "./DoubleLinkedNode";

export default class DoubleLinkedList<T> {
  private _head: DoubleLinkedNode<T> | null;
  private _tail: DoubleLinkedNode<T> | null;
  private _length: number;

  public constructor();

  public get length(): number;
  public isEmpty(): boolean;

  public peekHead(): T | null;
  public peekTail(): T | null;

  public push(value: T): void;
  public unshift(value: T): void;

  public deleteNodesByValue(value: T): void;
  public shift(): T | null;
  public pop(): T | null;

  public getAsArray(): Array<T | null>;
}
