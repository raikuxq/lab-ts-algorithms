"use strict";
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var Queue_1 = __importDefault(require("../../Queue/Queue"));
/**
 * Breadth first graph traversal
 */
var GraphIteratorBFS = /** @class */ (function () {
  /**
   * Creates empty instance and does one iteration
   * @param graph - graph instance
   * @param startVertex - vertex where traversal starts
   * @throws when startVertex does not exist
   */
  function GraphIteratorBFS(graph, startVertex) {
    if (!graph.hasVertex(startVertex)) {
      throw new Error("Start vertex does not exist");
    }
    this.graph = graph;
    this.queue = new Queue_1.default();
    this.visited = new Map();
    this.parents = new Map();
    this.queue.push(startVertex);
    this.visited.set(startVertex, true);
  }
  /**
   * @inheritDoc
   */
  GraphIteratorBFS.prototype.hasNext = function () {
    return !this.queue.isEmpty();
  };
  /**
   * @inheritDoc
   */
  GraphIteratorBFS.prototype.current = function () {
    var current = this.queue.peek();
    if (!current) {
      throw new Error("Current element does not exist");
    }
    return current;
  };
  /**
   * @inheritDoc
   */
  GraphIteratorBFS.prototype.next = function () {
    var _this = this;
    var next = this.queue.pop();
    if (!next) {
      throw new Error("Next element does not exist");
    }
    var nextNeighbors = this.graph.getVertexNeighbors(next);
    nextNeighbors.forEach(function (neighbor) {
      var isNotVisited = !_this.visited.get(neighbor);
      if (isNotVisited) {
        _this.queue.push(neighbor);
        _this.visited.set(neighbor, true);
        _this.parents.set(neighbor, next);
      }
    });
    return next;
  };
  /**
   * @inheritDoc
   */
  GraphIteratorBFS.prototype.getPath = function (from, to) {
    var path = [];
    var currentVertex = this.parents.get(to);
    while (currentVertex) {
      if (currentVertex === from) {
        break;
      }
      path.push(currentVertex);
      currentVertex = this.parents.get(currentVertex);
    }
    return __spreadArrays([from], path.reverse(), [to]);
  };
  return GraphIteratorBFS;
})();
exports.default = GraphIteratorBFS;
