import IGraph from "../../../types/IGraph";
import { EnumGraphType } from "../../../types/EnumGraphType";
import { createGraph } from "../../../helpers/createGraph";
import { randomizeNumberInRange } from "../../../utils";
import { EnumRandomGenerationFormat } from "../../../types/EnumRandomGenerationFormat";

const getRandomVertex = (): string => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

const getPossibleEdgesCount = (
  type: EnumGraphType,
  verticesCount: number
): number => {
  let possibleEdgesCount = verticesCount * (verticesCount - 1);

  switch (type) {
    case EnumGraphType.Directed: {
      break;
    }
    case EnumGraphType.Undirected: {
      possibleEdgesCount = Math.floor(possibleEdgesCount / 2);
      break;
    }
    default: {
      throw new Error("Wrong random generation format");
    }
  }

  return possibleEdgesCount;
};

const fillGraphRandomly = (
  graph: IGraph<string>,
  format: EnumRandomGenerationFormat,
  verticesCount: number
): void => {
  switch (format) {
    case EnumRandomGenerationFormat.Hash: {
      for (let i = 0; i < verticesCount; i++) {
        graph.addVertex(getRandomVertex());
      }
      break;
    }
    case EnumRandomGenerationFormat.Numbers: {
      for (let i = 0; i < verticesCount; i++) {
        graph.addVertex((i + 1).toString());
      }
      break;
    }
    default: {
      throw new Error("Wrong random generation format");
    }
  }
};

export const generateRandomGraph = (
  verticesCount: number,
  edgesCount: number,
  type: EnumGraphType = EnumGraphType.Undirected,
  format: EnumRandomGenerationFormat = EnumRandomGenerationFormat.Numbers
): IGraph<string> => {
  const graph = createGraph<string>(type);
  const possibleEdgesCount = getPossibleEdgesCount(type, verticesCount);

  if (edgesCount <= 0 || edgesCount > possibleEdgesCount) {
    throw new Error(
      `Edges count must be in range between 0 and ${possibleEdgesCount}`
    );
  }

  fillGraphRandomly(graph, format, verticesCount);
  const addedVertices = graph.vertices();
  let addedEdgesCount = 0;

  while (addedEdgesCount < edgesCount) {
    const randomizeIndex = () => {
      return randomizeNumberInRange(0, addedVertices.length);
    };
    const randomVertexFrom = addedVertices[randomizeIndex()];
    const randomVertexTo = addedVertices[randomizeIndex()];

    const isEdgeAlreadyExists = graph.hasEdge(randomVertexFrom, randomVertexTo);
    const isTheSameVertex = randomVertexFrom === randomVertexTo;

    if (!isTheSameVertex && !isEdgeAlreadyExists) {
      graph.addEdge(randomVertexFrom, randomVertexTo);
      addedEdgesCount++;
    }
  }

  return graph;
};
