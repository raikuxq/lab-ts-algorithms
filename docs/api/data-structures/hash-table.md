# HashTable\<T>

Guide: [/guide/data-structures/hash-table](/guide/data-structures/hash-table)

## Generic Types

`T` - type of collection elements

## Implements interfaces

### [`IKeyValueStorage`](/api/types/interfaces#IKeyValueStorage)

## Methods

### `constructor(initialCapacity?: number): HashTable<T>`

Creates empty instance

###### Params:

| Name            | Type     | Required | Default | Description                                                      |
|-----------------|----------|----------|---------|------------------------------------------------------------------|
| initialCapacity | `number` | -        | 100     | Initial capacity of table <br/>(0 < capacity < NUMBER.MAX_VALUE) |

###### Throws: [`ValueOutOfRangeException`](/api/exceptions/argument) when given capacity is out of range

<br><br>

### `set(key: string, value: T): void`

Add new element or update its value by key

###### Params:

| Name  | Type     | Required | Default | Description |
|-------|----------|----------|---------|-------------|
| key   | `string` | +        | -       | -           |
| value | `T`      | +        | -       | -           |

<br><br>

### `has(key: string): boolean`

Check if hash table has given element by key

###### Params:

| Name | Type     | Required | Default | Description |
|------|----------|----------|---------|-------------|
| key  | `string` | +        | -       | -           |

<br><br>

### `get(key: string): T`

Get element by its key

###### Params:

| Name | Type     | Required | Default | Description |
|------|----------|----------|---------|-------------|
| key  | `string` | +        | -       | -           |

###### Throws: [`IsNotFoundException`](/api/exceptions/state) when key to search was not found

<br><br>

### `delete(key: string): void`

Remove element from hashtable by its key

###### Params:

| Name | Type     | Required | Default | Description |
|------|----------|----------|---------|-------------|
| key  | `string` | +        | -       | -           |

###### Throws: [`IsNotFoundException`](/api/exceptions/state) when key to remove was not found

<br><br>

### `clear(): void`

Remove all elements from table

<br><br>

### `length(): number`

Get table size
