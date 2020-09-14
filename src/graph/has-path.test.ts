import IGraph from "../data-structures/IGraph";
import IGraphIterationStrategy from "./strategy/IGraphIterationStrategy";

import Graph from "../data-structures/Graph/Graph";
import BFSIterationStrategy from "./strategy/BFSIterationStrategy";
import DFSIterationStrategy from "./strategy/DFSIterationStrategy";

import hasPath from "./has-path";

describe.each(['BFS', 'DFS'])('has path searching by %s method', (strategyType: string) => {

  let strategy: IGraphIterationStrategy<string>;

  switch (strategyType) {
    case 'BFS': strategy = new BFSIterationStrategy(); break;
    case 'DFS': strategy = new DFSIterationStrategy(); break;
    default: throw new Error('Invalid search method');
  }

  test('when graph is empty', () => {
    const graph: IGraph<string> = new Graph<string>();

    expect(() => {
      const path = hasPath(graph, 'Asd', 'Qwe', strategy);

    }).toThrow('Start vertex does not exist');
  });

  test('when graph is undirected', () => {
    const graph: IGraph<string> = new Graph<string>();

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

    expect(hasPath(graph, 'Mike', 'Anna', strategy)).toBeTruthy();
    expect(hasPath(graph, 'Mike', 'John', strategy)).toBeFalsy();
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

    expect(hasPath(graph, 'Mike', 'Anna', strategy)).toBeTruthy();
    expect(hasPath(graph, 'Mike', 'Aaron', strategy)).toBeTruthy();
    expect(hasPath(graph, 'Lisa', 'Bob', strategy)).toBeFalsy();
    expect(hasPath(graph, 'Lisa', 'James', strategy)).toBeFalsy();
  })

});
