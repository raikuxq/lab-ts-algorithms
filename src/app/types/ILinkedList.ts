import ILinearStorageRA from "./ILinearStorageRA";
import IConvertableToArray from "./IConvertableToArray";

export default interface ILinkedList<T>
  extends ILinearStorageRA<T>, IConvertableToArray<T>, Iterable<T> {}
