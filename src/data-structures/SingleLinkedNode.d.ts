export default class SingleLinkedNode<T> {
  private _data: T;
  private _next: SingleLinkedNode<T> | null;

  public constructor(data: T, next?: SingleLinkedNode<T>);

  public get data(): T;
  public set data(value: T);

  public get next(): SingleLinkedNode<T> | null;
  public set next(next: SingleLinkedNode<T> | null);
}
