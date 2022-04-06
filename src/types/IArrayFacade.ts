import ILinearStorageRA from "./ILinearStorageRA";
import IConvertableToArray from "./IConvertableToArray";

export default interface IArrayFacade<T>
  extends ILinearStorageRA<T>,
    IConvertableToArray<T> {}
