export default class GraphVertex<V> {
  private readonly _data: V;

  public constructor(data: V) {
    this._data = data;
  }

  public get data(): V {
    return this._data;
  }
}
