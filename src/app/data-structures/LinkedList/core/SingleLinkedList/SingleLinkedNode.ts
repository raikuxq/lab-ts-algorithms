import AbstractLinkedNode from "src/app/data-structures/LinkedList/core/AbstractLinkedList/AbstractLinkedNode";

export default class SingleLinkedNode<T> extends AbstractLinkedNode<T> {
  /**
   * @inheritDoc
   */
  public constructor(data: T, next: SingleLinkedNode<T> | null = null) {
    super(data, next);
  }
}
