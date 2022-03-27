import { EnumLinkedListType } from "../types/EnumLinkedListType";
import ILinearStorageAccessible from "../types/ILinearStorageAccessible";
import DoubleLinkedList from "../data-structures/LinkedList/DoubleLinkedList/DoubleLinkedList";
import SingleLinkedList from "../data-structures/LinkedList/SingleLinkedList/SingleLinkedList";

export const createLinkedList = <T>(
  type: EnumLinkedListType,
  capacity?: number
): ILinearStorageAccessible<T> => {
  let linkedList: ILinearStorageAccessible<T>;

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
