import IHashTable from "../IHashTable";

export default class HashTable<T> implements IHashTable<T> {
  private readonly _data: Array<T>;

  public constructor();

  public get(prop: string): T;
  public set(prop: string, value: T): void;
}
