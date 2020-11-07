import AbstractLinkedNode from "../AbstractLinkedNode";

export default class SingleLinkedNode<T> extends AbstractLinkedNode<T> {
  public constructor(data: T, next: SingleLinkedNode<T> | null = null) {
    super(data, next);
  }
}
