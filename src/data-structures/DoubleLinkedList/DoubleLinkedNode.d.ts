export default class DoubleLinkedNode<T> {
  protected _prev: DoubleLinkedNode<T> | null;
  protected _next: DoubleLinkedNode<T> | null;
  protected _data: T;

  public constructor(
    data: T,
    next: DoubleLinkedNode<T> | null,
    prev: DoubleLinkedNode<T> | null
  );

  public get data(): T;
  public set data(value: T);
  public get prev(): DoubleLinkedNode<T> | null;
  public set prev(value: DoubleLinkedNode<T> | null);
  public get next(): DoubleLinkedNode<T> | null;
  public set next(value: DoubleLinkedNode<T> | null);
}
