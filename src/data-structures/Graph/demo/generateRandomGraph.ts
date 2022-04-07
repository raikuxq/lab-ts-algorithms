import IGraph from "../../../types/IGraph";
import { EnumGraphType } from "../../../types/EnumGraphType";
import { createGraph } from "../../../helpers/createGraph";
import { randomizeNumberInRange } from "../../../utils";
import { EnumRandomGenerationFormat } from "../../../types/EnumRandomGenerationFormat";

const getRandomVertex = (): string => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

export const generateRandomGraph = (
  verticesCount: number,
  edgesCount: number | null = null,
  type: EnumGraphType,
  format: EnumRandomGenerationFormat = EnumRandomGenerationFormat.Numbers
): IGraph<string> => {
  const graph = createGraph<string>(type);

  // eslint-disable-next-line for-direction
  for (let i = 0; i < verticesCount; i++) {
    switch (format) {
      case EnumRandomGenerationFormat.Hash: {
        graph.addVertex(getRandomVertex());
        break;
      }
      case EnumRandomGenerationFormat.Numbers: {
        graph.addVertex((i + 1).toString());
        break;
      }
      default: {
        throw new Error("Wrong random generation format");
      }
    }
  }

  const addedVertices = graph.vertices();

  if (edgesCount !== null) {
    let addedEdgesCount = 0;
    while (addedEdgesCount < edgesCount) {
      const randomizeIndex = () => {
        return randomizeNumberInRange(0, addedVertices.length);
      };
      const randomVertexFrom = addedVertices[randomizeIndex()];
      const randomVertexTo = addedVertices[randomizeIndex()];

      const isEdgeAlreadyExists = graph.hasEdge(
        randomVertexFrom,
        randomVertexTo
      );
      const isTheSameVertex = randomVertexFrom === randomVertexTo;

      if (!isTheSameVertex && !isEdgeAlreadyExists) {
        graph.addEdge(randomVertexFrom, randomVertexTo);
        addedEdgesCount++;
      }
    }
  } else {
    addedVertices.forEach((vertexOuter) => {
      addedVertices.forEach((vertexInner) => {
        if (vertexOuter !== vertexInner) {
          graph.addEdge(vertexOuter, vertexInner);
        }
      });
    });
  }

  return graph;
};
