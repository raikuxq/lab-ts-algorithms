import { EnumLinkedListType } from "../types/EnumLinkedListType";
import DoubleLinkedList from "../data-structures/LinkedList/DoubleLinkedList/DoubleLinkedList";
import SingleLinkedList from "../data-structures/LinkedList/SingleLinkedList/SingleLinkedList";
import ILinkedList from "../types/ILinkedList";

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
    default:
      throw new Error("Invalid list type");
  }

  return linkedList;
};
