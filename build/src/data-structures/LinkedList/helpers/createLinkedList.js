"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLinkedList = void 0;
var DoubleLinkedList_1 = __importDefault(require("../DoubleLinkedList/DoubleLinkedList"));
var SingleLinkedList_1 = __importDefault(require("../SingleLinkedList/SingleLinkedList"));
var EnumLinkedListType_1 = require("../../../types/EnumLinkedListType");
exports.createLinkedList = function (type) {
    var linkedList;
    switch (type) {
        case EnumLinkedListType_1.EnumLinkedListType.DOUBLE:
            linkedList = new DoubleLinkedList_1.default();
            break;
        case EnumLinkedListType_1.EnumLinkedListType.SINGLE:
            linkedList = new SingleLinkedList_1.default();
            break;
        default:
            throw new Error("Invalid list type");
    }
    return linkedList;
};
