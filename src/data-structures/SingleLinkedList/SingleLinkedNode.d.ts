export default class SingleLinkedNode<T> {
  protected _data: T;
  protected _next: SingleLinkedNode<T> | null;

  public constructor(
    data: T,
    next: SingleLinkedNode<T> | null
  );

  public get data(): T;
  public set data(value: T);
  public get next(): SingleLinkedNode<T> | null;
  public set next(value: SingleLinkedNode<T> | null);
}
