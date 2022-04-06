import IGraph from "../../../types/IGraph";
import { EnumGraphType } from "../../../types/EnumGraphType";
import { createGraph } from "../../../helpers/createGraph";

const getRandomVertex = (): string => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

export const generateRandomGraph = (
  verticesCount: number,
  type: EnumGraphType
): IGraph<string> => {
  const graph = createGraph<string>(type);

  // eslint-disable-next-line for-direction
  for (let i = 0; i < verticesCount; i++) {
    graph.addVertex(getRandomVertex());
  }

  const addedVertices = graph.vertices();

  addedVertices.forEach((vertexOuter) => {
    addedVertices.forEach((vertexInner) => {
      if (vertexOuter !== vertexInner) {
        graph.addEdge(vertexOuter, vertexInner);
      }
    });
  });

  return graph;
};
