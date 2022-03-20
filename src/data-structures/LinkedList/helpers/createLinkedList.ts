import ILinkedList from "../../../types/ILinkedList";
import DoubleLinkedList from "../DoubleLinkedList/DoubleLinkedList";
import SingleLinkedList from "../SingleLinkedList/SingleLinkedList";
import { EnumLinkedListType } from "../../../types/EnumLinkedListType";

export const createLinkedList = <T>(
  type: EnumLinkedListType
): ILinkedList<T> => {
  let linkedList: ILinkedList<T>;

  switch (type) {
    case EnumLinkedListType.DOUBLE:
      linkedList = new DoubleLinkedList();
      break;
    case EnumLinkedListType.SINGLE:
      linkedList = new SingleLinkedList();
      break;
    default:
      throw new Error("Invalid list type");
  }

  return linkedList;
};
