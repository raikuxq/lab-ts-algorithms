import IGraph from "../../IGraph";
import Graph from "../Graph";

describe('Graph', () => {

  test('when graph is empty', () => {
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


  test('vertex addition', () => {
    const graph: IGraph<string> = new Graph<string>();

    graph
      .addVertex('Mike')
      .addVertex('Bob')
      .addVertex('Lisa')

    const vertices = graph.vertices;
    const expectedVertices = ['Mike', 'Bob', 'Lisa'];

    expect(vertices).toEqual(expectedVertices);
  });


  test('vertex deletion', () => {
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

});
