import IHashTable from "../src/data-structures/IHashTable";
import HashTable from "../src/data-structures/HashTable/HashTable";

describe('Hash table', () => {

  test('any data types support', () => {
    const hashTable: IHashTable<any> = new HashTable<any>();

    hashTable.set('myNumberProp', 5);
    hashTable.set('myStringProp', 'string');
    hashTable.set('myArrayProp', [1,2,3,4,5]);

    expect(hashTable.get('myNumberProp')).toBe(5);
    expect(hashTable.get('myStringProp')).toBe('string');
    expect(hashTable.get('myArrayProp')).toEqual([1,2,3,4,5]);
  });

  test('when set to same property', () => {
    const hashTable: IHashTable<number> = new HashTable<number>();

    hashTable.set('myProp', 5);
    hashTable.set('myProp', 10);

    expect(hashTable.get('myProp')).toBe(10);
  });

});
