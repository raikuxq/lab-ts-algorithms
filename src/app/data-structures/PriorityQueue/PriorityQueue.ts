import BinaryHeap from "src/app/data-structures/BinaryHeap/BinaryHeap";

/**
 * Represents an item in the priority queue.
 */
interface PriorityQueueItem<T> {
  value: T;
  priority: number;
}

/**
 * A Priority Queue implementation based on a Min-Binary Heap.
 * Lower priority numbers are dequeued first.
 */
export default class PriorityQueue<T> {
  private readonly _heap: BinaryHeap<PriorityQueueItem<T>>;

  public constructor() {
    /**
     * Min-heap logic: (a < b) returns negative,
     * so smaller priority values stay at the top.
     */
    this._heap = new BinaryHeap((a, b) => a.priority - b.priority);
  }

  /** Number of elements in the queue. */
  public get size(): number {
    return this._heap.size;
  }

  /** Returns true if the queue is empty. */
  public isEmpty(): boolean {
    return this._heap.isEmpty();
  }

  /**
   * Adds an element to the queue with a specific priority.
   * @param value The data to store.
   * @param priority The priority level (lower value = higher priority).
   */
  public enqueue(value: T, priority: number): void {
    this._heap.insert({ value, priority });
  }

  /**
   * Removes and returns the element with the highest priority (lowest priority number).
   * @throws {CollectionIsEmptyException} If the queue is empty.
   */
  public dequeue(): T {
    return this._heap.extractMin().value;
  }

  /**
   * Returns the highest priority element without removing it.
   * @throws {CollectionIsEmptyException} If the queue is empty.
   */
  public peek(): T {
    return this._heap.peek().value;
  }

  /** Clears all elements from the queue. */
  public clear(): void {
    while (!this.isEmpty()) {
      this.dequeue();
    }
  }
}
