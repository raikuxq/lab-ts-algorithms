import ILinkedList from "../ILinkedList";
import SingleLinkedNode from "./SingleLinkedNode";

export type SingleLinkedListIterator<T> = {
  current(): T;
  next(): T;
}

export default interface ISingleLinkedList<T> extends ILinkedList<T>{
  head: SingleLinkedNode<T> | null;
  tail: SingleLinkedNode<T> | null;

  getNodeByIndex(index: number): SingleLinkedNode<T> | null;
  iterator(fromIndex: number): SingleLinkedListIterator<T>;
}
