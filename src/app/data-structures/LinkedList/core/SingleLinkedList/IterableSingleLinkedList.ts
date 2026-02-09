import IIterator from "src/app/types/IIterator";
import IIterable from "src/app/types/IIterable";
import SingleLinkedNode from "src/app/data-structures/LinkedList/core/SingleLinkedList/SingleLinkedNode";
import IsNotFoundException from "src/app/exceptions/IsNotFoundException";
import SingleLinkedList from "src/app/data-structures/LinkedList/core/SingleLinkedList/SingleLinkedList";

/**
 * @inheritDoc
 */
export default class IterableSingleLinkedList<T>
  extends SingleLinkedList<T>
  implements IIterable<T>
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
  public iterator(fromIndex = 0): IIterator<T> {
    const head = this._head;
    let activeNode: SingleLinkedNode<T> = this.getNodeByIndex(fromIndex);

    const iterator: IIterator<T> = {
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
       * @throws {IsNotFoundException} when next element does not exist
       */
      next: (): T => {
        if (!iterator.hasNext()) {
          throw new IsNotFoundException("Next element does not exist");
        }
        activeNode = activeNode.next!;
        return activeNode.data;
      },
    };

    return iterator;
  }
}
