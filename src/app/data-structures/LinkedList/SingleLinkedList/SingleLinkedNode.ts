import AbstractLinkedNode from "../AbstractLinkedList/AbstractLinkedNode";

export default class SingleLinkedNode<T> extends AbstractLinkedNode<T> {
  /**
   * @inheritDoc
   */
  public constructor(data: T, next: SingleLinkedNode<T> | null = null) {
    super(data, next);
  }
}
