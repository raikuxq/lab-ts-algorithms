import { EnumLinkedListType } from "src/app/types/EnumLinkedListType";
import DoubleLinkedList from "src/app/data-structures/LinkedList/core/DoubleLinkedList/DoubleLinkedList";
import SingleLinkedList from "src/app/data-structures/LinkedList/core/SingleLinkedList/SingleLinkedList";
import IterableDoubleLinkedList from "src/app/data-structures/LinkedList/core/DoubleLinkedList/IterableDoubleLinkedList";
import IterableSingleLinkedList from "src/app/data-structures/LinkedList/core/SingleLinkedList/IterableSingleLinkedList";
import ILinkedList from "src/app/types/ILinkedList";

export const createLinkedList = <T>(
  type: EnumLinkedListType,
  isIterable = false,
  capacity?: number,
): ILinkedList<T> => {
  let linkedList: ILinkedList<T>;

  if (isIterable) {
    switch (type) {
      case EnumLinkedListType.DOUBLE:
        linkedList = new IterableDoubleLinkedList(capacity);
        break;
      case EnumLinkedListType.SINGLE:
        linkedList = new IterableSingleLinkedList(capacity);
        break;
    }
  } else {
    switch (type) {
      case EnumLinkedListType.DOUBLE:
        linkedList = new DoubleLinkedList(capacity);
        break;
      case EnumLinkedListType.SINGLE:
        linkedList = new SingleLinkedList(capacity);
        break;
    }
  }

  return linkedList;
};
