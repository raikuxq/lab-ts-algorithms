import IKeyValueStorage from "../../../../src/app/types/IKeyValueStorage";
import HashTable from "../../../../src/app/data-structures/HashTable/HashTable";
import ValueOutOfRangeException from "../../../../src/app/exceptions/ValueOutOfRangeException";
import IsNotFoundException from "../../../../src/app/exceptions/IsNotFoundException";

describe("Hash Table", () => {
  describe("constructor", () => {
    it("should throw when given capacity value is less than 1", () => {
      expect(() => {
        new HashTable(-5);
      }).toThrowError(ValueOutOfRangeException);
    });

    it("should create empty instance", () => {
      const hashTable = new HashTable();
      expect(hashTable.length()).toBe(0);
    });
  });

  describe("method set", () => {
    it("should support multiple data types", () => {
      const hashTable: IKeyValueStorage<
        number | string | number[]
      > = new HashTable();
      hashTable.set("myNumberProp", 5);
      hashTable.set("myStringProp", "string");
      hashTable.set("myArrayProp", [1, 2, 3, 4, 5]);

      expect(hashTable.get("myNumberProp")).toBe(5);
      expect(hashTable.get("myStringProp")).toBe("string");
      expect(hashTable.get("myArrayProp")).toEqual([1, 2, 3, 4, 5]);
    });

    it("should correctly create new prop", () => {
      const hashTable: IKeyValueStorage<number> = new HashTable();
      hashTable.set("key", 5);

      expect(hashTable.get("key")).toBe(5);
    });

    it("should correctly update value when it already exists", () => {
      const hashTable: IKeyValueStorage<number> = new HashTable();
      hashTable.set("key", 5);
      hashTable.set("key", 10);

      expect(hashTable.get("key")).toBe(10);
    });

    it("should be possible to create new nodes after deletion", () => {
      const hashTable: IKeyValueStorage<number> = new HashTable(5);
      hashTable.set("key1", 1);
      hashTable.set("key2", 2);
      hashTable.set("key3", 3);
      hashTable.delete("key2");
      hashTable.delete("key3");
      hashTable.set("key4", 4);

      expect(hashTable.get("key4")).toBe(4);
    });

    it("should correctly increase hashtable size when capacity >= 50% of max capacity", () => {
      const hashTable: IKeyValueStorage<number> = new HashTable(5);
      for (let i = 0; i < 15; i++) {
        hashTable.set(`key${i}`, i);
      }

      expect(hashTable.length()).toBe(15);
    });
  });

  describe("method has", () => {
    it("should return false when hashtable is empty", () => {
      const hashTable: IKeyValueStorage<number> = new HashTable();

      expect(hashTable.has("NOT_EXISTED_PROP")).toBe(false);
    });

    it("should return true when property is exists", () => {
      const hashTable: IKeyValueStorage<number> = new HashTable();
      hashTable.set("key", 5);

      expect(hashTable.has("key")).toBe(true);
    });

    it("should return false after deletion", () => {
      const hashTable: IKeyValueStorage<number> = new HashTable();
      hashTable.set("key", 5);
      hashTable.delete("key");

      expect(hashTable.has("key")).toBe(false);
    });
  });

  describe("method get", () => {
    it("should throw when hashtable is empty", () => {
      const hashTable: IKeyValueStorage<number> = new HashTable();

      expect(() => {
        hashTable.get("key");
      }).toThrowError(IsNotFoundException);
    });

    it("should return true when property is exists", () => {
      const hashTable: IKeyValueStorage<number> = new HashTable();
      hashTable.set("key", 5);

      expect(hashTable.get("key")).toBe(5);
    });

    it("should throw after property deletion", () => {
      const hashTable: IKeyValueStorage<number> = new HashTable();
      hashTable.set("key", 5);
      hashTable.delete("key");

      expect(() => {
        hashTable.get("key");
      }).toThrowError(IsNotFoundException);
    });
  });

  describe("method delete", () => {
    it("should delete prop correctly", () => {
      const hashTable: IKeyValueStorage<number> = new HashTable();
      hashTable.set("key", 5);
      hashTable.delete("key");

      expect(hashTable.has("key")).toBe(false);
    });

    it("should throw when element does not exist", () => {
      const hashTable = new HashTable();

      expect(() => {
        hashTable.delete("NOT_EXISTED_PROP");
      }).toThrowError(IsNotFoundException);
    });
  });

  describe("method length", () => {
    it("should return 0 when table is empty", () => {
      const hashTable: IKeyValueStorage<number> = new HashTable();

      expect(hashTable.length()).toBe(0);
    });

    it("should return correct length value of added elements", () => {
      const hashTable: IKeyValueStorage<number> = new HashTable();
      hashTable.set("key1", 1);
      hashTable.set("key2", 2);
      hashTable.set("key3", 3);

      expect(hashTable.length()).toBe(3);
    });

    it("should return updated length value after deletion", () => {
      const hashTable: IKeyValueStorage<number> = new HashTable();
      hashTable.set("key1", 1);
      hashTable.set("key2", 2);
      hashTable.set("key3", 3);
      hashTable.delete("key1");

      expect(hashTable.length()).toBe(2);
    });
  });

  describe("method clear", () => {
    it("should remove all elements", () => {
      const hashTable: IKeyValueStorage<number> = new HashTable();
      hashTable.set("key1", 1);
      hashTable.set("key2", 2);
      hashTable.clear();

      expect(hashTable.length()).toBe(0);
      expect(hashTable.has("key1")).toBe(false);
      expect(hashTable.has("key2")).toBe(false);
    });
  });
});
