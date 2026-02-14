import IGraph from "src/app/types/IGraph";
import UndirectedGraph from "src/app/data-structures/Graph/core/UndirectedGraph";

/**
 * Get graph in Graphviz DOT format string
 *
 * @example
 * digraph G {
 *   "A" -> "B" [label="10"];
 *   "B" -> "C" [label="5"];
 * }
 */
export const presenterGraphviz = <T>(
  graph: IGraph<T>,
  graphName: string = "G",
): string => {
  const vertices = graph.vertices();

  const isUndirected = graph instanceof UndirectedGraph;
  const type = isUndirected ? "graph" : "digraph";
  const connector = isUndirected ? "--" : "->";

  const lines: string[] = [];
  lines.push(`${type} ${graphName} {`);

  vertices.forEach((vertex) => {
    lines.push(`  "${vertex}";`);
  });

  const visitedEdges = new Set<string>();

  vertices.forEach((from) => {
    const neighbors = graph.getVertexNeighbors(from);

    neighbors.forEach((to) => {
      if (isUndirected) {
        const edgeKey = [String(from), String(to)].sort().join("_");
        if (visitedEdges.has(edgeKey)) return;
        visitedEdges.add(edgeKey);
      }

      const weight = graph.getEdgeWeight(from, to);
      const label = weight !== 0 ? ` [label="${weight}"]` : "";

      lines.push(`  "${from}" ${connector} "${to}"${label};`);
    });
  });

  lines.push("}");

  return lines.join("\n");
};
