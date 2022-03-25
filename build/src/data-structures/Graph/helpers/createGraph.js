"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGraph = void 0;
var DirectedGraph_1 = __importDefault(require("../DirectedGraph"));
var UndirectedGraph_1 = __importDefault(require("../UndirectedGraph"));
var EnumGraphType_1 = require("../../../types/EnumGraphType");
/**
 * Returns graph by type
 * @param type
 * @returns graph empty instance
 */
exports.createGraph = function (type) {
    var graph;
    switch (type) {
        case EnumGraphType_1.EnumGraphType.Directed:
            graph = new DirectedGraph_1.default();
            break;
        case EnumGraphType_1.EnumGraphType.Undirected:
            graph = new UndirectedGraph_1.default();
            break;
        default:
            throw new Error("Invalid graph type");
    }
    return graph;
};
