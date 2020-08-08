export default class DoubleLinkedNode<T> {
  private _data: T;
  private _prev: DoubleLinkedNode<T> | null;
  private _next: DoubleLinkedNode<T> | null;

  public constructor(data: T, next?: DoubleLinkedNode<T>, prev?: DoubleLinkedNode<T>);

  public get data(): T;
  public set data(value: T);

  public get next(): DoubleLinkedNode<T> | null;
  public set next(next: DoubleLinkedNode<T> | null);

  public get prev(): DoubleLinkedNode<T> | null;
  public set prev(value: DoubleLinkedNode<T> | null);
}
