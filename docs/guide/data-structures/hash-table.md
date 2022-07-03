# HASH Table

In computing, a hash table, also known as hash map or dictionary, is a data structure that implements a set abstract
data type, a structure that can map keys to values.

Read full: [wiki/hash_table](https://en.wikipedia.org/wiki/Hash_table)

::: tip Implementation
This hash-table impl is based on open addressing method using quadratic probing
:::

## Import

```ts
import {HashTable} from "@raikuxq/alg-ds/data-structures";
```

## API reference

HASH Table API: [/api/data-structures/hash-table](/api/data-structures/hash-table)

## Example usage

```ts
import {HashTable} from "@raikuxq/alg-ds/data-structures";

const hashTable: IKeyValueStorage<number> = new HashTable();
hashTable.set("key1", 1);
hashTable.set("key2", 2);
hashTable.set("key3", 3);
hashTable.delete("key2");

hashTable.has("key1"); // true
hashTable.get("key1"); // 1
hashTable.has("key2"); // false
hashTable.get("key2"); // *THROWS*
hashTable.has("key3"); // true
hashTable.get("key3"); // 3

hashTable.set("key1", 10);
hashTable.get("key1"); // 10
hashTable.set("key2", 20);
hashTable.get("key2"); // 20
```
