# HashTable\<T>

::: tip Hash table
In computing, a hash table, also known as hash map or dictionary, is a data structure that implements a set abstract
data type, a structure that can map keys to values.

[wiki/hash_table](https://en.wikipedia.org/wiki/Hash_table)
:::

::: tip Implementation
Based on open addressing using quadratic probing
:::

## Import

```ts
import {HashTable} from "@raikuxq/alg-ds/data-structures";

const table = new HashTable();
```

## Implements interfaces

### `IKeyValueStorage`

```ts
const table: IKeyValueStorage = new HashTable();
```

## Methods

### `constructor(capacity?: number): HashTable<T>`

Creates empty instance
| Name | Type | Required | Default | Description |
|----------|----------|----------|------------------|------------------------------|
| capacity | `number` | - | Number.MAX_VALUE | Max capacity of table <br/>(0 < capacity < NUMBER.MAX_VALUE) |

### `set(key: string, value: T): void`

Add new element or update its value by key
| Name | Type | Required | Default | Description |
|------|----------|----------|---------|-------------|
| key | `string` | + | - | - |
| value | `T` | + | - | - |

### `has(key: string): boolean`

Check if hash table has given element by key
| Name | Type | Required | Default | Description |
|------|----------|----------|---------|-------------|
| key | `string` | + | - | - |

### `get(key: string): T`

Get element by its key
| Name | Type | Required | Default | Description |
|------|----------|----------|---------|-------------|
| key | `string` | + | - | - |

### `delete(key: string): void`

Remove element from hashtable by its key
| Name | Type | Required | Default | Description |
|------|----------|----------|---------|-------------|
| key | `string` | + | - | - |

### `clear(): void`

Remove all elements from table

### `length(): number`

Get table size

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
