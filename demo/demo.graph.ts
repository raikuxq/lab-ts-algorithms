import IGraph from "src/app/types/IGraph";
import { EnumGraphType } from "src/app/types/EnumGraphType";
import { generateRandomGraph } from "src/app/data-structures/Graph/utils/generateRandomGraph";
import { shortestPath } from "src/app/data-structures/Graph/searching/shortestPath";
import { EnumGraphTraversalType } from "src/app/types/EnumGraphTraversalType";
import UndirectedGraph from "src/app/data-structures/Graph/core/UndirectedGraph";
import DirectedGraph from "src/app/data-structures/Graph/core/DirectedGraph";

export const demoUndirectedGraph = (): UndirectedGraph<string> => {
  console.log("\nEmpty undirected graph created");
  const graph = new UndirectedGraph<string>();

  graph.addVertex("John");
  graph.addVertex("Mary");
  graph.addVertex("Kate");
  console.log("\nJohn, Mary and Kate was added to graph");
  console.log("Vertices count:");
  console.log(graph.verticesCount());
  console.log("Vertices list:");
  console.log(graph.vertices());

  console.log("\nChecking is graph hasVertex John: ");
  console.log(graph.hasVertex("John"));

  graph.removeVertex("John");
  console.log("\nDeleting vertex John... ");
  console.log("\nChecking is graph hasVertex John: ");
  console.log(graph.hasVertex("John"));
  console.log(graph);

  graph.addVertex("Bob");
  graph.addVertex("Elon");
  console.log("\nAdding Bob и Elon: ");
  console.log(graph);

  graph.addEdge("Bob", "Elon", 5);
  console.log("\nAdding edge between Bob and Elon: ");
  console.log("\nHas edge between Bob и Elon: ");
  console.log(graph.hasEdge("Bob", "Elon"));
  console.log("\nHas edge between Elon и Bob: ");
  console.log(graph.hasEdge("Elon", "Bob"));
  console.log("\nEdge weight between Bob и Elon: ");
  console.log(graph.getEdgeWeight("Bob", "Elon"));
  console.log("\nEdge weight between Elon and Kate: ");
  console.log(graph.getEdgeWeight("Elon", "Bob"));
  console.log("==========================================");

  graph.addEdge("Kate", "Elon", 12);
  console.log("\nAdding edge between Kate and Elon: ");
  console.log("\nHas edge between Kate и Elon: ");
  console.log(graph.hasEdge("Kate", "Elon"));
  console.log("\nHas edge between Elon и Kate: ");
  console.log(graph.hasEdge("Elon", "Kate"));
  console.log("\nEdge weight between Kate и Elon: ");
  console.log(graph.getEdgeWeight("Kate", "Elon"));
  console.log("\nEdge weight between Elon and Kate: ");
  console.log(graph.getEdgeWeight("Elon", "Kate"));
  console.log("==========================================");

  graph.addEdge("Kate", "Mary", 8);
  console.log("\nAdding edge between Kate and Mary: ");
  console.log("\nHas edge between Kate и Mary: ");
  console.log(graph.hasEdge("Kate", "Mary"));
  console.log("\nHas edge between Mary и Kate: ");
  console.log(graph.hasEdge("Mary", "Kate"));
  console.log("\nEdge weight between Kate и Mary: ");
  console.log(graph.getEdgeWeight("Kate", "Mary"));
  console.log("\nEdge weight between Mary and Kate: ");
  console.log(graph.getEdgeWeight("Mary", "Kate"));
  console.log("==========================================");

  console.log("Edges count:");
  console.log(graph.edgesCount());

  console.log("Elon neighbors:");
  console.log(graph.getVertexNeighbors("Elon"));
  console.log("Bob neighbors:");
  console.log(graph.getVertexNeighbors("Bob"));
  console.log("Kate neighbors:");
  console.log(graph.getVertexNeighbors("Kate"));
  console.log("Mary neighbors:");
  console.log(graph.getVertexNeighbors("Mary"));

  console.log("\nGraph weight: ");
  console.log(graph.weight());

  console.log("\nUpdating edge between Elon and Bob: ");
  graph.addEdge("Elon", "Bob", 10);
  console.log("\nEdge weight between Bob и Elon: ");
  console.log(graph.getEdgeWeight("Bob", "Elon"));
  console.log("\nEdge weight between Elon and Kate: ");
  console.log(graph.getEdgeWeight("Elon", "Bob"));
  console.log("==========================================");

  console.log("\nGraph weight after one edge weight was updated: ");
  console.log(graph.weight());

  graph.removeEdge("Bob", "Elon");
  console.log("\nRemove edge between Bob and Elon: ");
  console.log("\nGraph after one edge weight was deleted: ");
  console.log(graph);

  graph.removeVertex("Kate");
  console.log("\nRemove vertex Kate and cascade all related edges: ");
  console.log(graph);

  return graph;
};

export const demoDirectedGraph = (): DirectedGraph<string> => {
  console.log("\nEmpty directed graph created");
  const graph = new DirectedGraph<string>();

  graph.addVertex("John");
  graph.addVertex("Mary");
  graph.addVertex("Kate");
  console.log("\nJohn, Mary and Kate was added to graph");
  console.log("Vertices count:");
  console.log(graph.verticesCount());
  console.log("Vertices list:");
  console.log(graph.vertices());

  console.log("\nChecking is graph hasVertex John: ");
  console.log(graph.hasVertex("John"));

  graph.removeVertex("John");
  console.log("\nDeleting vertex John... ");
  console.log("\nChecking is graph hasVertex John: ");
  console.log(graph.hasVertex("John"));
  console.log(graph);

  graph.addVertex("Bob");
  graph.addVertex("Elon");
  console.log("\nAdding Bob и Elon: ");
  console.log(graph);

  graph.addEdge("Bob", "Elon", 5);
  console.log("\nAdding edge between Bob and Elon: ");
  console.log("\nHas edge between Bob и Elon: ");
  console.log(graph.hasEdge("Bob", "Elon"));
  console.log("\nHas edge between Elon и Bob: ");
  console.log(graph.hasEdge("Elon", "Bob"));
  console.log("\nEdge weight between Bob и Elon: ");
  console.log(graph.getEdgeWeight("Bob", "Elon"));
  console.log("==========================================");

  graph.addEdge("Kate", "Elon", 12);
  console.log("\nAdding edge between Kate and Elon: ");
  console.log("\nHas edge between Kate и Elon: ");
  console.log(graph.hasEdge("Kate", "Elon"));
  console.log("\nHas edge between Elon и Kate: ");
  console.log(graph.hasEdge("Elon", "Kate"));
  console.log("\nEdge weight between Kate и Elon: ");
  console.log(graph.getEdgeWeight("Kate", "Elon"));
  console.log("==========================================");

  graph.addEdge("Kate", "Mary", 8);
  console.log("\nAdding edge between Kate and Mary: ");
  console.log("\nHas edge between Kate и Mary: ");
  console.log(graph.hasEdge("Kate", "Mary"));
  console.log("\nHas edge between Mary и Kate: ");
  console.log(graph.hasEdge("Mary", "Kate"));
  console.log("\nEdge weight between Kate и Mary: ");
  console.log(graph.getEdgeWeight("Kate", "Mary"));
  console.log("==========================================");

  console.log("Edges count:");
  console.log(graph.edgesCount());

  console.log("Elon neighbors:");
  console.log(graph.getVertexNeighbors("Elon"));
  console.log("Bob neighbors:");
  console.log(graph.getVertexNeighbors("Bob"));
  console.log("Kate neighbors:");
  console.log(graph.getVertexNeighbors("Kate"));
  console.log("Mary neighbors:");
  console.log(graph.getVertexNeighbors("Mary"));

  console.log("\nGraph weight: ");
  console.log(graph.weight());

  console.log("\nAdding edge between Elon and Bob: ");
  graph.addEdge("Elon", "Bob", 10);
  console.log("\nEdge weight between Elon и Bob: ");
  console.log(graph.getEdgeWeight("Elon", "Bob"));
  console.log("\nEdge weight between Bob and Elon: ");
  console.log(graph.getEdgeWeight("Bob", "Elon"));
  console.log("==========================================");
  console.log(graph);

  console.log("\nGraph weight after one edge weight was updated: ");
  console.log(graph.weight());

  graph.removeEdge("Bob", "Elon");
  console.log("\nRemove edge between Bob and Elon: ");
  console.log("\nGraph after one edge weight was deleted: ");
  console.log(graph);

  graph.removeVertex("Kate");
  console.log("\nRemove vertex Kate and cascade all related edges: ");
  console.log(graph);

  return graph;
};

export const demoGraphGeneratedByType = (
  type: EnumGraphType,
  verticesCount: number,
  edgesCount: number,
): void => {
  const traversalType = EnumGraphTraversalType.BFS;
  const graph: IGraph<string> = generateRandomGraph(
    verticesCount,
    edgesCount,
    type,
  );
  console.log(
    `\nGenerated ${type.toLocaleLowerCase()} graph (N = ${verticesCount}, K = ${edgesCount}): \n`,
  );
  console.log(graph);

  console.log(`\nFinding shortest path via BFS: \n`);
  graph.vertices().forEach((vertexFrom: string) => {
    graph.vertices().forEach((vertexTo: string) => {
      const getPath = () => {
        try {
          return shortestPath<string>({
            graph,
            from: vertexFrom,
            to: vertexTo,
            traversalType,
          });
        } catch (e) {
          return `[-- ${e} --]`;
        }
      };

      if (vertexFrom !== vertexTo) {
        console.log(`\nShortest path from ${vertexFrom} to ${vertexTo} is:`);
        console.log(getPath());
      }
    });
  });
};

export const demoGraphGenerated = (): void => {
  const verticesCount = 6;
  const edgesCount = 6;
  demoGraphGeneratedByType(EnumGraphType.DIRECTED, verticesCount, edgesCount);
  demoGraphGeneratedByType(EnumGraphType.UNDIRECTED, verticesCount, edgesCount);
};

export const demoRichDirectedGraph = (): DirectedGraph<string> => {
  const graph = new DirectedGraph<string>();

  const cities = [
    "Moscow",
    "London",
    "Paris",
    "Berlin",
    "Tokyo",
    "New York",
    "Dubai",
    "Singapore",
    "Rome",
    "Istanbul",
  ];
  cities.forEach((city) => graph.addVertex(city));

  graph.addEdge("Moscow", "Dubai", 300);
  graph.addEdge("Moscow", "Istanbul", 150);
  graph.addEdge("Moscow", "Berlin", 400);

  graph.addEdge("Dubai", "Singapore", 500);
  graph.addEdge("Dubai", "Tokyo", 800);

  graph.addEdge("Istanbul", "Rome", 200);
  graph.addEdge("Istanbul", "Paris", 350);

  graph.addEdge("Berlin", "London", 100);
  graph.addEdge("Berlin", "Paris", 120);

  graph.addEdge("Paris", "London", 80);
  graph.addEdge("Paris", "New York", 600);
  graph.addEdge("Paris", "Rome", 150);

  graph.addEdge("Rome", "Istanbul", 180);
  graph.addEdge("London", "New York", 550);

  graph.addEdge("Singapore", "Tokyo", 400);
  graph.addEdge("Tokyo", "New York", 1100);

  graph.addEdge("New York", "London", 550);
  graph.addEdge("Singapore", "Dubai", 520);

  return graph;
};

export const demoRichUndirectedGraph = (): UndirectedGraph<string> => {
  const graph = new UndirectedGraph<string>();

  const zones = [
    "Entrance",
    "Reception",
    "Open Space",
    "Meeting Room",
    "Kitchen",
    "Server Room",
    "CEO Office",
    "Rest Zone",
    "Storage",
    "Workshop",
  ];
  zones.forEach((zone) => graph.addVertex(zone));

  graph.addEdge("Entrance", "Reception", 5);
  graph.addEdge("Reception", "Open Space", 15);
  graph.addEdge("Reception", "Meeting Room", 10);

  graph.addEdge("Open Space", "Kitchen", 20);
  graph.addEdge("Open Space", "Rest Zone", 12);
  graph.addEdge("Open Space", "Server Room", 25);

  graph.addEdge("Meeting Room", "CEO Office", 8);
  graph.addEdge("Meeting Room", "Open Space", 18);

  graph.addEdge("Kitchen", "Rest Zone", 5);
  graph.addEdge("Kitchen", "Workshop", 30);

  graph.addEdge("Server Room", "Storage", 10);
  graph.addEdge("Server Room", "CEO Office", 15);

  graph.addEdge("Rest Zone", "Workshop", 22);
  graph.addEdge("Storage", "Workshop", 14);

  graph.addEdge("CEO Office", "Entrance", 40);
  return graph;
};
