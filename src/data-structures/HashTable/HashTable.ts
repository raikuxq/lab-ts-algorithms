import IHashTable from "../IHashTable";
import {sha256} from 'js-sha256';

export default class HashTable<T> implements IHashTable<T> {

  private readonly _data: Array<T>;

  /**
   * Create empty hash table
   */
  public constructor() {
    this._data = new Array<T>();
  }

  /**
   * Get value by property name <O(1)>
   * @param prop
   */
  public get(prop: string): T {
    const hash = sha256(prop);
    const index = parseInt(hash, 16);

    return this._data[index];
  }

  /**
   * Set property <O(1)>
   * @param prop
   * @param value
   */
  public set(prop: string, value: T) {
    const hash = sha256(prop);
    const index = parseInt(hash, 16);

    this._data[index] = value;
  }
}
