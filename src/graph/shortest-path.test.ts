import IGraph from "../data-structures/IGraph";
import IGraphIterationStrategy from "./strategy/IGraphIterationStrategy";

import Graph from "../data-structures/Graph/Graph";
import BFSIterationStrategy from "./strategy/BFSIterationStrategy";
import DFSIterationStrategy from "./strategy/DFSIterationStrategy";
import DijkstraIterationStrategy from "./strategy/DijkstraIterationStrategy";

import shortestPath from "./shortest-path";

describe.each(['Dijkstra'])(
  'shortest path in weighted graph by %s method',
  (strategyType: string) => {

    let strategy: IGraphIterationStrategy<string>;

    switch (strategyType) {
      case 'Dijkstra': {
        strategy = new DijkstraIterationStrategy();
        break;
      }
      default: {
        throw new Error('Invalid search method');
      }
    }


    test('when graph is undirected', () => {
      const graph: IGraph<string> = new Graph<string>();

      graph
        .addVertex('Mike')
        .addVertex('Bob')
        .addVertex('Lisa')
        .addVertex('Aaron')
        .addVertex('James')
        .addVertex('Anna')
        .addEdge('Mike', 'Bob', 5)
        .addEdge('Mike', 'Lisa', 3)
        .addEdge('Lisa', 'Aaron', 3)
        .addEdge('Lisa', 'James', 3)
        .addEdge('James', 'Aaron', 3)
        .addEdge('James', 'Anna', 6)
        .addEdge('Bob', 'Anna', 15)

      /**
       * Bob -> Mike (5) -> Anna (15) = 20
       * Mike -> Lisa (3) -> James (3) -> Anna (6) = 12
       */

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
        .addEdge('Mike', 'Bob', 5)
        .addEdge('Mike', 'Lisa', 3)
        .addEdge('Lisa', 'Aaron', 3)
        .addEdge('Aaron', 'James', 3)
        .addEdge('James', 'Lisa', 10)
        .addEdge('James', 'Aaron', 10)
        .addEdge('James', 'Anna', 6)
        .addEdge('Bob', 'Anna', 15)

      expect(shortestPath(graph, 'Mike', 'Anna', strategy))
        .toEqual(['Mike', 'Lisa', 'Aaron', 'James', 'Anna']);

      expect(shortestPath(graph, 'Mike', 'Bob', strategy))
        .toEqual(['Mike', 'Bob']);

      expect(() => {
        shortestPath(graph, 'Mike', 'UNEXISTED', strategy)
      }).toThrowError();
    })

  }
)

describe.each(['BFS', 'DFS'])(
  'shortest path in unweighted graph by %s method',
  (strategyType: string) => {

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
