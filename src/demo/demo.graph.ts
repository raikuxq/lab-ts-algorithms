import IGraph from "../types/IGraph";
import { createGraph } from "../helpers/createGraph";
import { EnumGraphType } from "../types/EnumGraphType";
import { generateRandomGraph } from "../data-structures/Graph/demo/generateRandomGraph";

export const demoUndirectedGraph = (): void => {
  console.log("\nEmpty undirected graph created");
  const graph: IGraph<string> = createGraph(EnumGraphType.Undirected);

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
  console.log(graph.getEdgeWeightByVertices("Bob", "Elon"));
  console.log("\nEdge weight between Elon and Kate: ");
  console.log(graph.getEdgeWeightByVertices("Elon", "Bob"));
  console.log("==========================================");

  graph.addEdge("Kate", "Elon", 12);
  console.log("\nAdding edge between Kate and Elon: ");
  console.log("\nHas edge between Kate и Elon: ");
  console.log(graph.hasEdge("Kate", "Elon"));
  console.log("\nHas edge between Elon и Kate: ");
  console.log(graph.hasEdge("Elon", "Kate"));
  console.log("\nEdge weight between Kate и Elon: ");
  console.log(graph.getEdgeWeightByVertices("Kate", "Elon"));
  console.log("\nEdge weight between Elon and Kate: ");
  console.log(graph.getEdgeWeightByVertices("Elon", "Kate"));
  console.log("==========================================");

  graph.addEdge("Kate", "Mary", 8);
  console.log("\nAdding edge between Kate and Mary: ");
  console.log("\nHas edge between Kate и Mary: ");
  console.log(graph.hasEdge("Kate", "Mary"));
  console.log("\nHas edge between Mary и Kate: ");
  console.log(graph.hasEdge("Mary", "Kate"));
  console.log("\nEdge weight between Kate и Mary: ");
  console.log(graph.getEdgeWeightByVertices("Kate", "Mary"));
  console.log("\nEdge weight between Mary and Kate: ");
  console.log(graph.getEdgeWeightByVertices("Mary", "Kate"));
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
  console.log(graph.getEdgeWeightByVertices("Bob", "Elon"));
  console.log("\nEdge weight between Elon and Kate: ");
  console.log(graph.getEdgeWeightByVertices("Elon", "Bob"));
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
};

export const demoDirectedGraph = (): void => {
  console.log("\nEmpty directed graph created");
  const graph: IGraph<string> = createGraph(EnumGraphType.Directed);

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
  console.log(graph.getEdgeWeightByVertices("Bob", "Elon"));
  console.log("==========================================");

  graph.addEdge("Kate", "Elon", 12);
  console.log("\nAdding edge between Kate and Elon: ");
  console.log("\nHas edge between Kate и Elon: ");
  console.log(graph.hasEdge("Kate", "Elon"));
  console.log("\nHas edge between Elon и Kate: ");
  console.log(graph.hasEdge("Elon", "Kate"));
  console.log("\nEdge weight between Kate и Elon: ");
  console.log(graph.getEdgeWeightByVertices("Kate", "Elon"));
  console.log("==========================================");

  graph.addEdge("Kate", "Mary", 8);
  console.log("\nAdding edge between Kate and Mary: ");
  console.log("\nHas edge between Kate и Mary: ");
  console.log(graph.hasEdge("Kate", "Mary"));
  console.log("\nHas edge between Mary и Kate: ");
  console.log(graph.hasEdge("Mary", "Kate"));
  console.log("\nEdge weight between Kate и Mary: ");
  console.log(graph.getEdgeWeightByVertices("Kate", "Mary"));
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
  console.log(graph.getEdgeWeightByVertices("Elon", "Bob"));
  console.log("\nEdge weight between Bob and Elon: ");
  console.log(graph.getEdgeWeightByVertices("Bob", "Elon"));
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
};

export const demoGraphGenerated = (): void => {
  const verticesCount = 3;
  const graphUndirected: IGraph<string> = generateRandomGraph(
    verticesCount,
    EnumGraphType.Undirected
  );
  console.log(
    `\nRandomly created undirected graph with N = ${verticesCount}: `
  );
  console.log(graphUndirected);

  const graphDirected: IGraph<string> = generateRandomGraph(
    verticesCount,
    EnumGraphType.Directed
  );
  console.log(`\nRandomly created directed graph with N = ${verticesCount}: `);
  console.log(graphDirected);
};
