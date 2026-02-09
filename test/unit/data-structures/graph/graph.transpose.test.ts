import { createGraph } from "src/app/data-structures/Graph/factories/createGraph";
import { EnumGraphType } from "src/app/types/EnumGraphType";
import { transposeDirectedGraph } from "src/app/data-structures/Graph/transposing/transposeDirectedGraph";

describe("Directed graph transpose", () => {
  const sourceGraph = createGraph<string>(EnumGraphType.DIRECTED);

  /**
   * Source matrix
   *
   * *  V1 V2 V3 V4
   * V1  0  1  0  1
   * V2  0  0  0  0
   * V3  0  0  0  1
   * V4  0  0  0  0
   */
  sourceGraph
    .addVertex("Vertex_1")
    .addVertex("Vertex_2")
    .addVertex("Vertex_3")
    .addVertex("Vertex_4")
    .addEdge("Vertex_1", "Vertex_2")
    .addEdge("Vertex_1", "Vertex_4")
    .addEdge("Vertex_3", "Vertex_4");

  /**
   * Transposed matrix
   *
   * *  V1 V2 V3 V4
   * V1  0  0  0  0
   * V2  1  0  0  0
   * V3  0  0  0  0
   * V4  1  0  1  0
   */
  const transposedGraph = transposeDirectedGraph(sourceGraph);

  it("should have the same vertices as source graph", () => {
    expect(transposedGraph.vertices()).toEqual(sourceGraph.vertices());
  });

  it("should have all reverted edges", () => {
    expect(transposedGraph.hasEdge("Vertex_2", "Vertex_1")).toBe(true);
    expect(transposedGraph.hasEdge("Vertex_4", "Vertex_1")).toBe(true);
    expect(transposedGraph.hasEdge("Vertex_4", "Vertex_3")).toBe(true);
  });

  it("should not have edges from source graph", () => {
    expect(transposedGraph.hasEdge("Vertex_1", "Vertex_2")).toBe(false);
    expect(transposedGraph.hasEdge("Vertex_1", "Vertex_4")).toBe(false);
    expect(transposedGraph.hasEdge("Vertex_3", "Vertex_4")).toBe(false);
  });
});
