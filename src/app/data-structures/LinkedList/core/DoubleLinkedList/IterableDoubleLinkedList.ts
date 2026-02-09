import IBiDirectIterator from "src/app/types/IBiDirectIterator";
import IBiDirectIterable from "src/app/types/IBiDirectIterable";
import IsNotFoundException from "src/app/exceptions/IsNotFoundException";
import DoubleLinkedNode from "src/app/data-structures/LinkedList/core/DoubleLinkedList/DoubleLinkedNode";
import DoubleLinkedList from "src/app/data-structures/LinkedList/core/DoubleLinkedList/DoubleLinkedList";

/**
 * @inheritDoc
 */
export default class IterableDoubleLinkedList<T>
  extends DoubleLinkedList<T>
  implements IBiDirectIterable<T>
{
  /**
   * @inheritDoc
   */
  public constructor(capacity?: number) {
    super(capacity);
  }

  /**
   * List iterator
   * @throws {CollectionIsEmptyException} when list is empty
   * @throws {IndexOutOfBoundsException} when given index is out of range
   */
  public iterator(fromIndex = 0): IBiDirectIterator<T> {
    const head = this._head;
    const tail = this._tail;
    let activeNode = this.getNodeByIndex(fromIndex) as DoubleLinkedNode<T>;

    const iterator: IBiDirectIterator<T> = {
      /**
       * @inheritDoc
       */
      current: () => {
        return activeNode.data;
      },
      /**
       * @inheritDoc
       */
      hasNext(): boolean {
        return Boolean(activeNode.next) && activeNode !== head;
      },
      /**
       * @inheritDoc
       */
      hasPrev(): boolean {
        return Boolean(activeNode.prev) && activeNode !== tail;
      },
      /**
       * @inheritDoc
       * @throws {IsNotFoundException} when next element does not exist
       */
      next: (): T => {
        if (!iterator.hasNext()) {
          throw new IsNotFoundException("Next element does not exist");
        }
        activeNode = activeNode.next!;
        return activeNode.data;
      },
      /**
       * @inheritDoc
       * @throws {IsNotFoundException} when prev element does not exists
       */
      prev: (): T => {
        if (!iterator.hasPrev()) {
          throw new IsNotFoundException("Prev element does not exist");
        }
        activeNode = activeNode.prev!;
        return activeNode.data;
      },
    };

    return iterator;
  }
}
