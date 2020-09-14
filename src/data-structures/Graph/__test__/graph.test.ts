import IGraph from "../../IGraph";
import Graph from "../Graph";

describe('Graph', () => {

  test('should throw when is empty', () => {
    const graph: IGraph<string> = new Graph<string>();

    expect(() => {
      graph.addEdge('Asd', 'Qwe')
    }).toThrow()

    expect(() => {
      graph.removeEdge('Asd', 'Qwe')
    }).toThrow()

    expect(() => {
      graph.removeVertex('Asd')
    }).toThrow()
  });


  test('vertices addition', () => {
    const graph: IGraph<string> = new Graph<string>();

    graph
      .addVertex('Mike')
      .addVertex('Bob')
      .addVertex('Lisa')

    const vertices = graph.vertices;
    const expectedVertices = ['Mike', 'Bob', 'Lisa'];

    expect(vertices).toEqual(expectedVertices);
  });


  test('vertices deletion', () => {
    const graph: IGraph<string> = new Graph<string>();

    graph
      .addVertex('Mike')
      .addVertex('Bob')
      .addVertex('Lisa')
      .removeVertex('Mike')
      .removeVertex('Lisa')

    const vertices = graph.vertices;
    const expectedVertices = ['Bob'];

    expect(vertices).toEqual(expectedVertices);
  });


  test('edges addition', () => {
    const graph: IGraph<string> = new Graph<string>();

    graph
      .addVertex('Mike')
      .addVertex('Bob')
      .addVertex('Lisa')
      .addEdge('Mike', 'Bob')
      .addEdge('Bob', 'Lisa')
      .addEdge('Mike', 'Lisa')

    expect(graph.edgesCount).toBe(3);
  });


  test('edges deletion', () => {
    const graph: IGraph<string> = new Graph<string>();

    graph
      .addVertex('Mike')
      .addVertex('Bob')
      .addVertex('Lisa')
      .addEdge('Mike', 'Bob')
      .addEdge('Bob', 'Lisa')
      .addEdge('Mike', 'Lisa')
      .removeEdge('Mike', 'Lisa')

    expect(graph.edgesCount).toBe(2);
  });


  test('graph weight calculation', () => {
    const graph: IGraph<string> = new Graph<string>();

    graph
      .addVertex('Mike')
      .addVertex('Bob')
      .addVertex('Lisa')
      .addEdge('Mike', 'Bob', 5)
      .addEdge('Bob', 'Lisa', 10)
      .addEdge('Mike', 'Lisa', 20)

    const weight = graph.weight;
    const vertices = graph.vertices;

    const expectedWeight = 35;
    const expectedVertices = ['Mike', 'Bob', 'Lisa'];

    expect(weight).toBe(expectedWeight);
    expect(vertices).toEqual(expectedVertices);
  });



  describe('adjacency matrix', () => {

    test('when graph is empty', () => {
      const graph: IGraph<number> = new Graph<number>();

      const matrix = graph.getAdjacencyMatrix();

      expect(matrix).toEqual([]);
    });

    test('when graph is undirected', () => {
      const graph: IGraph<number> = new Graph<number>();

      graph
        .addVertex(1)
        .addVertex(2)
        .addVertex(3)
        .addVertex(4)
        .addEdge(1, 2)
        .addEdge(1, 3)
        .addEdge(3, 4)

      const matrix = graph.getAdjacencyMatrix();

      expect(matrix).toEqual([
        [0, 1, 1, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 1],
        [0, 0, 1, 0]
      ])
    });

    test('when graph is directed', () => {
      const graph: IGraph<number> = new Graph<number>(true);

      graph
        .addVertex(1)
        .addVertex(2)
        .addVertex(3)
        .addVertex(4)
        .addEdge(1, 2)
        .addEdge(1, 3)
        .addEdge(3, 4)

      const matrix = graph.getAdjacencyMatrix();

      expect(matrix).toEqual([
        [0, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 1],
        [0, 0, 0, 0]
      ])
    });

  });



  describe('adjacency list', () => {

    test('when graph is empty', () => {
      const graph: IGraph<number> = new Graph<number>();

      const emptyMap = new Map<number, number>();
      const map = graph.getAdjacencyList();

      expect(map).toEqual(emptyMap);
    });

    test('when graph is undirected', () => {
      const graph: IGraph<number> = new Graph<number>();

      graph
        .addVertex(1)
        .addVertex(2)
        .addVertex(3)
        .addVertex(4)
        .addEdge(1, 2)
        .addEdge(1, 3)
        .addEdge(3, 4)

      const list = graph.getAdjacencyList();

      const expectedList = new Map<number, Array<number>>();

      expectedList
        .set(1, [2, 3])
        .set(2, [1])
        .set(3, [1, 4])
        .set(4, [3])

      expect(list).toEqual(expectedList)
    });

    test('when graph is undirected', () => {
      const graph: IGraph<number> = new Graph<number>(true);

      graph
        .addVertex(1)
        .addVertex(2)
        .addVertex(3)
        .addVertex(4)
        .addEdge(1, 2)
        .addEdge(1, 3)
        .addEdge(3, 4)

      const list = graph.getAdjacencyList();

      const expectedList = new Map<number, Array<number>>();

      expectedList
        .set(1, [2, 3])
        .set(2, [])
        .set(3, [4])
        .set(4, [])

      expect(list).toEqual(expectedList)
    });

  });



});
