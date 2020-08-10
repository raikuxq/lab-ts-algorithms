import DoubleLinkedNode from "./DoubleLinkedNode";
import IDoubleLinkedList, {DoubleLinkedListIterator} from "./IDoubleLinkedList";

export default class DoubleLinkedList<T> implements IDoubleLinkedList<T> {

  private _head: DoubleLinkedNode<T> | null;
  private _tail: DoubleLinkedNode<T> | null;
  private _length: number;

  private insertNodeBetweenHeadAndTail(node: DoubleLinkedNode<T>);
  private deleteNode(node: DoubleLinkedNode<T> | null): DoubleLinkedNode<T>;

  public constructor();

  public getNodeByIndex(index: number): DoubleLinkedNode<T>;
  public get head(): DoubleLinkedNode<T> | null;
  public get tail(): DoubleLinkedNode<T> | null;
  public get length(): number;

  public isEmpty(): boolean;

  public peekHead(): T;
  public peekTail(): T;

  public getAsArray(): Array<T>;
  public getByIndex(index: number): T;

  public push(value: T): void;
  public unshift(value: T): void;
  public pushFromArray(elements: Array<T>): void;

  public pop(): T;
  public shift(): T;

  public iterator(fromIndex: number): DoubleLinkedListIterator<T>;
}
