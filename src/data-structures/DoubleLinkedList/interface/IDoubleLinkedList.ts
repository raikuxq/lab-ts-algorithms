import ILinkedList from "../../ILinkedList";
import DoubleLinkedNode from "../DoubleLinkedNode";
import IIterator from "../../IIterator";

export interface DoubleLinkedListIterator<T> extends IIterator<T> {
  prev(): T;
}

export default interface IDoubleLinkedList<T> extends ILinkedList<T> {
  head: DoubleLinkedNode<T> | null;
  tail: DoubleLinkedNode<T> | null;

  getNodeByIndex(index: number): DoubleLinkedNode<T> | null;
  iterator(fromIndex: number): DoubleLinkedListIterator<T>;
}
