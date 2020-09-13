import IGraph from "../data-structures/IGraph";
import IGraphIterationStrategy from "./strategy/IGraphIterationStrategy";

import Graph from "../data-structures/Graph/Graph";
import BFSIterationStrategy from "./strategy/BFSIterationStrategy";
import DFSIterationStrategy from "./strategy/DFSIterationStrategy";

import shortestPath from "./shortest-path";

describe.each(['BFS', 'DFS'])('search by %s method', (strategyType: string) => {

  let strategy: IGraphIterationStrategy<string>;

  switch (strategyType) {
    case 'BFS': {
      strategy = new BFSIterationStrategy();
      break;
    }
    case 'DFS': {
      strategy = new DFSIterationStrategy();
      break;
    }
    default: {
      throw new Error('Invalid search method');
    }
  }

  test('when graph is empty', () => {
    const graph: IGraph<string> = new Graph<string>();

    expect(() => {
      const path = shortestPath(graph, 'Asd', 'Qwe', strategy);
    }).toThrowError();
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

    expect(shortestPath(graph, 'Mike', 'Anna', strategy))
      .toEqual(['Mike', 'Lisa', 'James', 'Anna']);

    expect(shortestPath(graph, 'Mike', 'Bob', strategy))
      .toEqual(['Mike', 'Bob']);

    expect(() => {
      shortestPath(graph, 'Mike', 'UNEXISTED', strategy)
    }).toThrowError();
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
      .addEdge('Aaron', 'James')
      .addEdge('James', 'Lisa')
      .addEdge('James', 'Aaron')
      .addEdge('James', 'Anna')

    expect(shortestPath(graph, 'Mike', 'Anna', strategy))
      .toEqual(['Mike', 'Lisa', 'Aaron', 'James', 'Anna']);

    expect(shortestPath(graph, 'Mike', 'Bob', strategy))
      .toEqual(['Mike', 'Bob']);

    expect(() => {
      shortestPath(graph, 'Mike', 'UNEXISTED', strategy)
    }).toThrowError();
  })

});
