import IStack from "../IStack";
import ILinkedList from "../ILinkedList";
import DoubleLinkedList from "../DoubleLinkedList/DoubleLinkedList";

export default class Stack<T> implements IStack<T> {

  private readonly _list: ILinkedList<T>;
  private readonly _capacity: number;

  public constructor(capacity: number);

  public peek(): T | null;
  public push(item: T) : void;
  public pop(): T;
  public isEmpty(): boolean;
  public isFull(): boolean;
}
