import IKeyValueStorage from "../../types/IKeyValueStorage";
import HashTableNode from "./HashTableNode";
import ValueOutOfRangeException from "../../exceptions/ValueOutOfRangeException";
import IsNotFoundException from "../../exceptions/IsNotFoundException";

/**
 * Implementation of open addressing hash table using quadratic probing
 */
export default class HashTable<T> implements IKeyValueStorage<T> {
  /**
   Constants
   */
  private static DEFAULT_MAX_CAPACITY = 100;
  private static MAX_LOAD_FACTOR = 0.5;

  /**
   * State
   */
  private storage: Array<HashTableNode<T>>;
  private maxCapacity: number;
  private storageCapacity = 0;

  /**
   * Given init capacity size will be used
   * @throws when initial capacity value is not larger than 0
   */
  public constructor(initialCapacity: number = HashTable.DEFAULT_MAX_CAPACITY) {
    if (initialCapacity <= 0) {
      throw new ValueOutOfRangeException("Size must be larger than 0");
    }
    this.maxCapacity = initialCapacity;
    this.storage = new Array(this.maxCapacity).fill(null);
  }

  /**
   * Main-hash function
   */
  private hashFn(key: string, number: number): number {
    return (
      (this.innerHashFn(key) + 127 * number + 365 * number * number) %
      this.maxCapacity
    );
  }

  /**
   * Helper-hash function
   */
  private innerHashFn(key: string): number {
    const length: number = key.length;

    if (length === 0) {
      return 0;
    }
    const substring = key.substring(0, length - 1);
    const symbol = key.charCodeAt(length - 1);

    return (127 * this.innerHashFn(substring) + symbol) % this.maxCapacity;
  }

  /**
   * Max capacity will be increased and storage will be overwritten
   */
  private resizeStorage(): Array<HashTableNode<T>> {
    this.maxCapacity *= 2;

    const newArray = new Array(this.maxCapacity).fill(null);

    for (let i = 0; i < this.storage.length; i++) {
      const element = this.storage[i];

      if (element != null) {
        for (let j = 0; j < this.maxCapacity; j++) {
          const newIndex = this.hashFn(element.key, j);

          if (newArray[newIndex] == null) {
            newArray[newIndex] = element;

            break;
          }
        }
      }
    }

    return newArray;
  }

  /**
   * Will find node instance by its key
   * @throws when element does not exist
   */
  private findNode(key: string): HashTableNode<T> {
    for (let i = 0; i < this.maxCapacity; i++) {
      const index = this.hashFn(key, i);
      const node = this.storage[index];

      if (node?.key === key) {
        if (node?.isDeleted) {
          break;
        }
        return node;
      }
    }

    throw new IsNotFoundException("Element does not exist");
  }

  /**
   * Will create new node instance and set in to storage by index
   */
  private addNode(key: string, data: T, index: number): void {
    this.storage[index] = new HashTableNode<T>(key, data);

    this.storageCapacity++;
    const loadFactor = this.storageCapacity / this.maxCapacity;

    if (loadFactor >= HashTable.MAX_LOAD_FACTOR) {
      this.storage = this.resizeStorage();
    }
  }

  /**
   * Will create new node instance and set in to storage by index
   */
  private updateNode(data: T, index: number): void {
    this.storage[index].data = data;
    this.storage[index].isDeleted = false;
  }

  /**
   * Will insert item to hash table
   */
  public set(key: string, data: T): void {
    for (let i = 0; i < this.maxCapacity; i++) {
      const index = this.hashFn(key, i);
      const node = this.storage[index];

      const shouldAddNode = node === null;
      if (shouldAddNode) {
        this.addNode(key, data, index);
        break;
      }

      const shouldUpdateNode = node.key === key;
      if (shouldUpdateNode) {
        this.updateNode(data, index);
        break;
      }
    }
  }

  /**
   * Will update item property isDeleted to false
   * @throws when element does not exist
   */
  public delete(key: string): void {
    for (let i = 0; i < this.maxCapacity; i++) {
      const index = this.hashFn(key, i);

      if (this.storage[index] !== null) {
        this.storage[index].isDeleted = true;
        return;
      }
    }

    throw new IsNotFoundException("Element does not exist");
  }

  /**
   * Will find item in hash table
   * @throws when element does not exist
   */
  public get(key: string): T {
    return this.findNode(key).data;
  }

  /**
   * Check if node with given key exists
   */
  public has(key: string): boolean {
    try {
      return Boolean(this.findNode(key));
    } catch (e) {
      return false;
    }
  }

  /**
   * Added elements count
   */
  public length(): number {
    const actualItems = this.storage.filter((item) => {
      return item !== null && !item.isDeleted;
    });

    return actualItems.length;
  }

  /**
   * Will overwrite storage with array of null elements
   */
  public clear(): void {
    this.storage = new Array(HashTable.DEFAULT_MAX_CAPACITY).fill(null);
  }
}
