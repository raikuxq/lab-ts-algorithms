import { perf, roundNumber } from "../../utils";
import IKeyValueStorage from "../../types/IKeyValueStorage";
import HashTable from "../../data-structures/HashTable/HashTable";

export const pushToStorage = (
  linearDS: IKeyValueStorage<number>,
  elementsCount: number
): void => {
  for (let i = 0; i < elementsCount; i++) {
    linearDS.set(`key${i}`, i);
  }
};

export const perfHashTable = (): void => {
  console.log(`HASHTABLE PERFORMANCE TEST:`);
  const hashTable: IKeyValueStorage<number> = new HashTable<number>();
  let elementsCount = 50;

  while (elementsCount <= 5000000) {
    pushToStorage(hashTable, elementsCount);

    const perfSet = perf(() => {
      hashTable.set(`key${elementsCount}`, elementsCount);
    });
    const perfGet = perf(() => {
      hashTable.get(`key${elementsCount}`);
    });

    const perfHas = perf(() => {
      hashTable.has(`key${elementsCount - 10}`);
    });

    console.log(`N: ${elementsCount} set: ${roundNumber(perfSet)}ms`);
    console.log(`N: ${elementsCount} get: ${roundNumber(perfGet)}ms`);
    console.log(`N: ${elementsCount} has: ${roundNumber(perfHas)}ms`);
    console.log("=========================");

    elementsCount *= 10;
  }
};
