import { EnumGraphType } from "src/app/types/EnumGraphType";
import { createGraphFromMatrix } from "src/app/data-structures/Graph/factories/createGraphFromMatrix";
import { TypeArrayMatrix } from "src/app/types/TypeArrayMatrix";
import IGraph from "src/app/types/IGraph";
import IllegalArgumentException from "src/app/exceptions/base/IllegalArgumentException";

describe("in Directed graph", () => {
  /**
   * Get graph adjacency matrix N x N
   *
   * @example
   *
   * Directed graph:
   * - Bob [Maria]
   * - Maria [Bob, John]
   * - John []
   *
   * Its matrix:
   *       |  Bob  | Maria |  John |
   * Bob   |   0   |   1   |   0   |
   * Maria |   1   |   0   |   1   |
   * John  |   0   |   0   |   0   |
   */
  describe("created graph", () => {
    const fieldsList: Array<string> = ["Bob", "Maria", "John"];

    const matrix: TypeArrayMatrix = [
      [0, 1, 0],
      [1, 0, 1],
      [0, 0, 0],
    ];
    const graph: IGraph<string> = createGraphFromMatrix<string>(
      matrix,
      fieldsList,
      EnumGraphType.DIRECTED,
    );

    it("should contain all vertices", () => {
      expect(graph.vertices()).toEqual(fieldsList);
    });

    it("should contain all edges", () => {
      expect(graph.hasEdge("Bob", "Bob")).toBe(false);
      expect(graph.hasEdge("Bob", "Maria")).toBe(true);
      expect(graph.hasEdge("Bob", "John")).toBe(false);

      expect(graph.hasEdge("Maria", "Maria")).toBe(false);
      expect(graph.hasEdge("Maria", "Bob")).toBe(true);
      expect(graph.hasEdge("Maria", "John")).toBe(true);

      expect(graph.hasEdge("John", "John")).toBe(false);
      expect(graph.hasEdge("John", "Bob")).toBe(false);
      expect(graph.hasEdge("John", "Maria")).toBe(false);
    });
  });

  it("should throw when given array is not a matrix", () => {
    const arr = [
      [1, 1, 0],
      [1, 0, 1],
    ];
    const fieldsList: Array<string> = ["Bob", "Maria", "John"];

    expect(() => {
      createGraphFromMatrix(arr, fieldsList, EnumGraphType.DIRECTED);
    }).toThrow(IllegalArgumentException);
  });
});

describe("in Undirected graph", () => {
  /**
   * Get graph adjacency matrix N x N
   *
   * @example
   *
   * Directed graph:
   * - Bob [Maria]
   * - Maria [Bob, John]
   * - John []
   *
   * Its matrix:
   *       |  Bob  | Maria |  John |
   * Bob   |   0   |   1   |   0   |
   * Maria |   1   |   0   |   1   |
   * John  |   0   |   1   |   0   |
   */
  describe("created graph", () => {
    const fieldsList: Array<string> = ["Bob", "Maria", "John"];

    const matrix: TypeArrayMatrix = [
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
    ];
    const graph: IGraph<string> = createGraphFromMatrix<string>(
      matrix,
      fieldsList,
      EnumGraphType.UNDIRECTED,
    );

    it("should contain all vertices", () => {
      expect(graph.vertices()).toEqual(fieldsList);
    });

    it("should contain all edges", () => {
      expect(graph.hasEdge("Bob", "Bob")).toBe(false);
      expect(graph.hasEdge("Bob", "Maria")).toBe(true);
      expect(graph.hasEdge("Bob", "John")).toBe(false);

      expect(graph.hasEdge("Maria", "Maria")).toBe(false);
      expect(graph.hasEdge("Maria", "Bob")).toBe(true);
      expect(graph.hasEdge("Maria", "John")).toBe(true);

      expect(graph.hasEdge("John", "John")).toBe(false);
      expect(graph.hasEdge("John", "Bob")).toBe(false);
      expect(graph.hasEdge("John", "Maria")).toBe(true);
    });
  });

  it("should throw when given array is not a matrix", () => {
    const arr = [
      [1, 1, 0],
      [1, 0, 1],
    ];
    const fieldsList: Array<string> = ["Bob", "Maria", "John"];

    expect(() => {
      createGraphFromMatrix(arr, fieldsList, EnumGraphType.UNDIRECTED);
    }).toThrow(IllegalArgumentException);
  });
});
