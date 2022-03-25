"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var js_sha256_1 = require("js-sha256");
/**
 * Data structure with approximated O(1) access to elements
 */
var HashTable = /** @class */ (function () {
    /**
     * Create empty hash table
     */
    function HashTable() {
        this._data = new Array();
    }
    /**
     * Get value by property name <O(1)>
     * @param prop
     * @returns element data
     */
    HashTable.prototype.get = function (prop) {
        var hash = js_sha256_1.sha256(prop);
        var index = parseInt(hash, 16);
        return this._data[index];
    };
    /**
     * Set property <O(1)>
     * @param prop - property name
     * @param value - data
     */
    HashTable.prototype.set = function (prop, value) {
        var hash = js_sha256_1.sha256(prop);
        var index = parseInt(hash, 16);
        this._data[index] = value;
    };
    /**
     * Has value <O(1)>
     * @param prop - property name
     * @returns boolean
     */
    HashTable.prototype.has = function (prop) {
        var hash = js_sha256_1.sha256(prop);
        var index = parseInt(hash, 16);
        return Boolean(this._data[index]);
    };
    return HashTable;
}());
exports.default = HashTable;
