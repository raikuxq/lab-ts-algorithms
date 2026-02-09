import CollectionIsEmptyException from "src/app/exceptions/CollectionIsEmptyException";

/**
 * A Binary Heap implementation supporting custom priority logic
 */
export default class BinaryHeap<T> {
  private readonly _heap: T[] = [];
  private readonly _comparator: (a: T, b: T) => number;

  /**
   * @param comparator Function to determine element priority
   */
  public constructor(comparator?: (a: T, b: T) => number) {
    this._comparator = comparator || this.defaultComparator;
  }

  /** Current number of elements in the heap */
  public get size(): number {
    return this._heap.length;
  }

  /** Returns true if the heap contains no elements */
  public isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * Retrieves the root element without removing it
   * @throws {CollectionIsEmptyException} If the heap is empty.
   */
  public peek(): T {
    if (this.isEmpty()) {
      throw new CollectionIsEmptyException("Cannot peek when heap is empty");
    }
    return this._heap[0];
  }

  /**
   * Adds a new value and restores heap properties
   */
  public insert(value: T): void {
    this._heap.push(value);
    this.bubbleUp();
  }

  /**
   * Removes and returns the root element (minimum based on comparator)
   * @throws {CollectionIsEmptyException} If the heap is empty.
   */
  public extractMin(): T {
    if (this.isEmpty()) {
      throw new CollectionIsEmptyException("Cannot extract from an empty heap");
    }
    const min = this._heap[0];
    const last = this._heap.pop()!;

    if (!this.isEmpty()) {
      this._heap[0] = last;
      this.bubbleDown();
    }

    return min;
  }

  /** Default comparison for primitive types */
  private defaultComparator(a: T, b: T): number {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  private parentIndex(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  private leftChildIndex(i: number): number {
    return 2 * i + 1;
  }

  private rightChildIndex(i: number): number {
    return 2 * i + 2;
  }

  private swap(i: number, j: number): void {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  /** Moves an element up until heap properties are restored */
  private bubbleUp(): void {
    let index = this.size - 1;
    let parent = this.parentIndex(index);

    while (
      index > 0 &&
      this._comparator(this._heap[index], this._heap[parent]) < 0
    ) {
      this.swap(index, parent);
      index = parent;
      parent = this.parentIndex(index);
    }
  }

  /** Moves an element down until heap properties are restored */
  private bubbleDown(): void {
    let index = 0;
    while (true) {
      const left = this.leftChildIndex(index);
      const right = this.rightChildIndex(index);
      let smallest = index;

      if (
        left < this.size &&
        this._comparator(this._heap[left], this._heap[smallest]) < 0
      ) {
        smallest = left;
      }
      if (
        right < this.size &&
        this._comparator(this._heap[right], this._heap[smallest]) < 0
      ) {
        smallest = right;
      }

      if (smallest !== index) {
        this.swap(index, smallest);
        index = smallest;
      } else {
        break;
      }
    }
  }

  /** Returns an iterator over the underlying array */
  public *[Symbol.iterator](): IterableIterator<T> {
    yield* this._heap;
  }
}
