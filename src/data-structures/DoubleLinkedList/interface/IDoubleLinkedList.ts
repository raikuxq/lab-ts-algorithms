import ILinkedList from "../../ILinkedList";
import DoubleLinkedNode from "../DoubleLinkedNode";

export type DoubleLinkedListIterator<T> = {
  current(): T;
  next(): T;
  prev(): T;
};

export default interface IDoubleLinkedList<T> extends ILinkedList<T> {
  head: DoubleLinkedNode<T> | null;
  tail: DoubleLinkedNode<T> | null;

  getNodeByIndex(index: number): DoubleLinkedNode<T> | null;
  iterator(fromIndex: number): DoubleLinkedListIterator<T>;
}
