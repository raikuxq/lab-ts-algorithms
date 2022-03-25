"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var HashTable_1 = __importDefault(require("../src/data-structures/HashTable/HashTable"));
describe("Hash table", function () {
    test("should support multiple data types", function () {
        var hashTable = new HashTable_1.default();
        hashTable.set("myNumberProp", 5);
        hashTable.set("myStringProp", "string");
        hashTable.set("myArrayProp", [1, 2, 3, 4, 5]);
        expect(hashTable.get("myNumberProp")).toBe(5);
        expect(hashTable.get("myStringProp")).toBe("string");
        expect(hashTable.get("myArrayProp")).toEqual([1, 2, 3, 4, 5]);
    });
    test("should correct update value", function () {
        var hashTable = new HashTable_1.default();
        hashTable.set("myProp", 5);
        hashTable.set("myProp", 10);
        expect(hashTable.get("myProp")).toBe(10);
    });
    test("should correct check on exist", function () {
        var hashTable = new HashTable_1.default();
        expect(hashTable.has("myProp")).toBe(false);
    });
});
