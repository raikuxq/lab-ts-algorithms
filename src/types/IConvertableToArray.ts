export default interface IConvertableToArray<T> {
  pushFromArray(elements: Array<T>): void;
  getAsArray(): Array<T>;
}
