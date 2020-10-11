import IHashTable from "../interface/IHashTable";
import HashTable from "../HashTable";

describe("Hash table", () => {
  test("should support multiple data types", () => {
    const hashTable: IHashTable<number | string | number[]> = new HashTable();

    hashTable.set("myNumberProp", 5);
    hashTable.set("myStringProp", "string");
    hashTable.set("myArrayProp", [1, 2, 3, 4, 5]);

    expect(hashTable.get("myNumberProp")).toBe(5);
    expect(hashTable.get("myStringProp")).toBe("string");
    expect(hashTable.get("myArrayProp")).toEqual([1, 2, 3, 4, 5]);
  });

  test("should correct update value", () => {
    const hashTable: IHashTable<number> = new HashTable();

    hashTable.set("myProp", 5);
    hashTable.set("myProp", 10);

    expect(hashTable.get("myProp")).toBe(10);
  });

  test("should correct check on exist", () => {
    const hashTable: IHashTable<number> = new HashTable();

    expect(hashTable.has("myProp")).toBe(false);
  });
});
