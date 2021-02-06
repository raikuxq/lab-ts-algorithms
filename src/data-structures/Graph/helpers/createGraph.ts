import IGraph from "../IGraph";
import DirectedGraph from "../graph/DirectedGraph";
import UndirectedGraph from "../graph/UndirectedGraph";

const createGraph = <T>(type: string): IGraph<T> => {
  let graph: IGraph<T>;

  switch (type) {
    case "Directed":
      graph = new DirectedGraph();
      break;
    case "Undirected":
      graph = new UndirectedGraph();
      break;
    default:
      throw new Error("Invalid graph type");
  }

  return graph;
};

export default createGraph;
