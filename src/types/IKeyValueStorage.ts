export default interface IKeyValueStorage<T> {
  set(key: string, value: T): void;
  has(key: string): boolean;
  get(key: string): T;
  delete(key: string): void;
  length(): number;
  clear(): void;
}
