import IQueue from "../IQueue";
import ILinkedList from "../ILinkedList";
import DoubleLinkedList from "../DoubleLinkedList/DoubleLinkedList";

export default class Queue<T> implements IQueue<T>{

  private readonly _list: ILinkedList<T>;

  public constructor() ;

  public peek(): T | null;
  public add(item: T) : void;
  public pop(): T;
  public isEmpty(): boolean;
}
