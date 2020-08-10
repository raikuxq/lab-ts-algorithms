import SingleLinkedNode from "./SingleLinkedNode";
import ISingleLinkedList, {SingleLinkedListIterator} from "./ISingleLinkedList";

export default class SingleLinkedList<T> implements ISingleLinkedList<T> {

  private _head: SingleLinkedNode<T> | null;
  private _tail: SingleLinkedNode<T> | null;
  private _length: number;

  private insertNodeBetweenHeadAndTail(node: SingleLinkedNode<T>);

  public constructor();

  public getNodeByIndex(index: number): SingleLinkedNode<T>;
  public get head(): SingleLinkedNode<T> | null;
  public get tail(): SingleLinkedNode<T> | null;
  public get length(): number;

  public isEmpty(): boolean;

  public peekHead(): T;
  public peekTail(): T ;
  public getAsArray(): Array<T>;
  public getByIndex(index: number): T;

  public push(value: T): void;
  public unshift(value: T): void;
  public pushFromArray(elements: Array<T>): void;

  public pop(): T;
  public shift(): T;

  public iterator(fromIndex: number): SingleLinkedListIterator<T>;
}
