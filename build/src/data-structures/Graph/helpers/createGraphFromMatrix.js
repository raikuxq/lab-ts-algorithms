"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGraphFromMatrix = exports.EDGE_EXISTS_STATE = void 0;
var EnumGraphType_1 = require("../../../types/EnumGraphType");
var createGraph_1 = require("./createGraph");
exports.EDGE_EXISTS_STATE = 1;
/**
 * Returns graph by type
 * @param matrix
 * @param fieldsList
 * @param type
 * @returns graph empty instance
 */
exports.createGraphFromMatrix = function (matrix, fieldsList, type) {
    var graph = createGraph_1.createGraph(type);
    fieldsList.forEach(function (fieldName) {
        graph.addVertex(fieldName);
    });
    matrix.forEach(function (row, rowIndex) {
        row.forEach(function (col, colIndex) {
            var rowColState = matrix[rowIndex][colIndex];
            var colRowState = matrix[colIndex][rowIndex];
            if (type === EnumGraphType_1.EnumGraphType.Undirected) {
                if (rowColState === exports.EDGE_EXISTS_STATE &&
                    colRowState === exports.EDGE_EXISTS_STATE) {
                    graph.addEdge(fieldsList[rowIndex], fieldsList[colIndex]);
                }
            }
            if (type === EnumGraphType_1.EnumGraphType.Directed) {
                if (rowColState === exports.EDGE_EXISTS_STATE) {
                    graph.addEdge(fieldsList[rowIndex], fieldsList[colIndex]);
                }
                if (colRowState === exports.EDGE_EXISTS_STATE) {
                    graph.addEdge(fieldsList[colIndex], fieldsList[rowIndex]);
                }
            }
        });
    });
    return graph;
};
