import IGraph from "../data-structures/IGraph";
import Graph from "../data-structures/Graph/Graph";
import hasPathByBFS from "./has-path-by-bfs";

describe('Breadth first search in graph', () => {

  test('when graph is empty', () => {
    const graph: IGraph<string> = new Graph<string>();

    const path = hasPathByBFS(graph, 'Asd', 'Qwe');

    expect(path).toBeFalsy();
  });

  test('when graph is undirected', () => {
    const graph: IGraph<string> = new Graph<string>(true);

    graph
      .addVertex('Mike')
      .addVertex('Bob')
      .addVertex('Lisa')
      .addVertex('Aaron')
      .addVertex('James')
      .addVertex('Anna')
      .addEdge('Mike', 'Bob')
      .addEdge('Mike', 'Lisa')
      .addEdge('Lisa', 'James')
      .addEdge('Lisa', 'Aaron')
      .addEdge('James', 'Aaron')
      .addEdge('James', 'Anna')

    expect(hasPathByBFS(graph, 'Mike', 'Anna')).toBeTruthy();
    expect(hasPathByBFS(graph, 'Mike', 'John')).toBeFalsy();
  })

  test('when graph is directed', () => {
    const graph: IGraph<string> = new Graph<string>(true);

    graph
      .addVertex('Mike')
      .addVertex('Bob')
      .addVertex('Lisa')
      .addVertex('Aaron')
      .addVertex('James')
      .addVertex('Anna')
      .addEdge('Mike', 'Bob')
      .addEdge('Mike', 'Lisa')
      .addEdge('Lisa', 'Aaron')
      .addEdge('James', 'Aaron')
      .addEdge('James', 'Anna')
      .addEdge('Aaron', 'Anna')

    expect(hasPathByBFS(graph, 'Mike', 'Anna')).toBeTruthy();
    expect(hasPathByBFS(graph, 'Mike', 'Aaron')).toBeTruthy();
    expect(hasPathByBFS(graph, 'Lisa', 'Bob')).toBeFalsy();
    expect(hasPathByBFS(graph, 'Lisa', 'James')).toBeFalsy();
  })

});
