import IGraph from "../../../types/IGraph";
import { EnumGraphType } from "../../../types/EnumGraphType";
import { createGraph } from "./createGraph";
import { randomizeNumberInRange } from "../../../utils";
import { EnumRandomGenerationFormat } from "../../../types/EnumRandomGenerationFormat";
import ValueOutOfRangeException from "../../../exceptions/ValueOutOfRangeException";

const getRandomVertex = (): string => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

const getPossibleEdgesCount = (
  type: EnumGraphType,
  verticesCount: number
): number => {
  let possibleEdgesCount = verticesCount * (verticesCount - 1);

  switch (type) {
    case EnumGraphType.DIRECTED: {
      break;
    }
    case EnumGraphType.UNDIRECTED: {
      possibleEdgesCount = Math.floor(possibleEdgesCount / 2);
      break;
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
    case EnumRandomGenerationFormat.HASH: {
      for (let i = 0; i < verticesCount; i++) {
        graph.addVertex(getRandomVertex());
      }
      break;
    }
    case EnumRandomGenerationFormat.NUMBERS: {
      for (let i = 0; i < verticesCount; i++) {
        graph.addVertex((i + 1).toString());
      }
      break;
    }
  }
};

export const generateRandomGraph = (
  verticesCount: number,
  edgesCount: number,
  type: EnumGraphType = EnumGraphType.UNDIRECTED,
  format: EnumRandomGenerationFormat = EnumRandomGenerationFormat.NUMBERS
): IGraph<string> => {
  const graph = createGraph<string>(type);
  const possibleEdgesCount = getPossibleEdgesCount(type, verticesCount);

  if (edgesCount <= 0 || edgesCount > possibleEdgesCount) {
    throw new ValueOutOfRangeException(
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
