import { EnumGraphType } from "../src/types/EnumGraphType";
import { createGraphFromMatrix } from "../src/helpers/createGraphFromMatrix";
import { ArrayMatrix } from "../src/types/ArrayMatrix";
import IGraph from "../src/types/IGraph";

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

    const matrix: ArrayMatrix = [
      [0, 1, 0],
      [1, 0, 1],
      [0, 0, 0],
    ];
    const graph: IGraph<string> = createGraphFromMatrix<string>(
      matrix,
      fieldsList,
      EnumGraphType.Directed
    );

    test("should contain all vertices", () => {
      expect(graph.vertices()).toEqual(fieldsList);
    });

    test("should contain all edges", () => {
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

    const matrix: ArrayMatrix = [
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
    ];
    const graph: IGraph<string> = createGraphFromMatrix<string>(
      matrix,
      fieldsList,
      EnumGraphType.Undirected
    );

    test("should contain all vertices", () => {
      expect(graph.vertices()).toEqual(fieldsList);
    });

    test("should contain all edges", () => {
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
});
