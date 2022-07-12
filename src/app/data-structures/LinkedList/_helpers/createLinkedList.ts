import { EnumLinkedListType } from "../../../types/EnumLinkedListType";
import DoubleLinkedList from "../DoubleLinkedList/DoubleLinkedList";
import SingleLinkedList from "../SingleLinkedList/SingleLinkedList";
import IterableDoubleLinkedList from "../DoubleLinkedList/IterableDoubleLinkedList";
import IterableSingleLinkedList from "../SingleLinkedList/IterableSingleLinkedList";
import ILinkedList from "../../../types/ILinkedList";

export const createLinkedList = <T>(
  type: EnumLinkedListType,
  isIterable = false,
  capacity?: number
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
