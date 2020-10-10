export default interface IHashTable<T> {
  set(prop: string, value: T): void;
  get(prop: string): T;
  has(prop: string): boolean;
}
