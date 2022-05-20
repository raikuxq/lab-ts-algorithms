import HashTable from "../data-structures/HashTable/HashTable";

export const demoHashtable = (): void => {
  const hashTable = new HashTable<number>(15);

  // emulate 66% load
  for (let i = 0; i < 10; i++) {
    hashTable.set(`key${i * 2}`, i * 2);
  }
  console.log(hashTable);

  for (let i = 10; i < 15; i++) {
    hashTable.set(`key${i * 2}`, i * 2);
  }
  console.log(hashTable);
  console.log("\n length:", hashTable.length());

  hashTable.set("key4", 10000);
  console.log("\n", hashTable.get("key4"));
  hashTable.delete("key4");
  console.log("\n has key4:", hashTable.has("key4"));
  hashTable.set("key4", 20000);
  console.log("\n has key4:", hashTable.has("key4"));
  console.log("\n key4 value:", hashTable.get("key4"));
  console.log("\n", hashTable);
  hashTable.clear();
  console.log("\n", hashTable);
};
