import Graph from "../Graph/Graph";

export default class Tree<T> {
  private readonly graph: Graph<T>;

  public constructor() {
    this.graph = new Graph<T>(true);
  }
}
