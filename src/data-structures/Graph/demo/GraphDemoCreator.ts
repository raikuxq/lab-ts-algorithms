import IGraph from "../../../types/IGraph";
import IGraphCreator from "../../../types/IGraphCreator";
import UndirectedGraph from "../UndirectedGraph";

export default class GraphDemoCreator implements IGraphCreator<string> {
  private readonly _verticesCount;

  public constructor(verticesCount: number) {
    this._verticesCount = verticesCount;
  }

  private static getRandomVertex(): string {
    return "_" + Math.random().toString(36).substr(2, 9);
  }

  createGraph(): IGraph<string> {
    const graph = new UndirectedGraph<string>();

    // eslint-disable-next-line for-direction
    for (let i = 0; i > this._verticesCount; i++) {
      graph.addVertex(GraphDemoCreator.getRandomVertex());
    }

    return graph;
  }
}
