import IHashTable from "../../types/IHashTable";
import { sha256 } from "js-sha256";

/**
 * Data structure with approximated O(1) access to elements
 */
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
   * @returns element data
   */
  public get(prop: string): T {
    const hash = sha256(prop);
    const index = parseInt(hash, 16);

    return this._data[index];
  }

  /**
   * Set property <O(1)>
   * @param prop - property name
   * @param value - data
   */
  public set(prop: string, value: T): void {
    const hash = sha256(prop);
    const index = parseInt(hash, 16);

    this._data[index] = value;
  }

  /**
   * Has value <O(1)>
   * @param prop - property name
   * @returns boolean
   */
  public has(prop: string): boolean {
    const hash = sha256(prop);
    const index = parseInt(hash, 16);

    return Boolean(this._data[index]);
  }
}
