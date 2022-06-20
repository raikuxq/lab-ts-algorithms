import { EnumLinkedListType } from "../../../types/EnumLinkedListType";
import DoubleLinkedList from "../DoubleLinkedList/DoubleLinkedList";
import SingleLinkedList from "../SingleLinkedList/SingleLinkedList";
import ILinkedList from "../../../types/ILinkedList";

export const createLinkedList = <T>(
  type: EnumLinkedListType,
  capacity?: number
): ILinkedList<T> => {
  let linkedList: ILinkedList<T>;

  switch (type) {
    case EnumLinkedListType.DOUBLE:
      linkedList = new DoubleLinkedList(capacity);
      break;
    case EnumLinkedListType.SINGLE:
      linkedList = new SingleLinkedList(capacity);
      break;
  }

  return linkedList;
};
