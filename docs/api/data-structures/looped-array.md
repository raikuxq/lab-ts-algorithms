# LoopedArray\<T>

Guide: [/guide/data-structures/looped-array](/guide/data-structures/looped-array)

## Generic Types

`T` - type of collection elements

## Implements interfaces

### [`IArrayFacade`](/api/types/interfaces#IArrayFacade)

### [`ILinearStorage`](/api/types/interfaces#ILinearStorage)

### [`ILinearStorageRA`](/api/types/interfaces#ILinearStorageRA)

## Methods

### `constructor(capacity: number): IArrayFacade<T>`

Creates empty instance

###### Params:

| Name     | Type     | Required | Default | Description                      |
|----------|----------|----------|---------|----------------------------------|
| capacity | `number` | +        | -       | Max capacity of array <br/>(> 0) |

###### Throws: [`ValueOutOfRangeException`](/api/exceptions/argument) when given capacity is out of range

<br><br>

### `peek(): T`

Returns value from top of array

<br><br>

### `pop(): T`

Removes item from array end (head element) and returns its value

###### Throws: [`CollectionIsEmptyException`](/api/exceptions/state) when array is empty

<br><br>

### `push(value: T): void`

Add value to top of array

###### Params:

| Name  | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| value | `T`  | +        | -       |             |

<br><br>

### `has(value: T): boolean`

Check is array has given value

###### Params:

| Name  | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| value | `T`  | +        | -       |             |

<br><br>

### `peekFromStart(): T`

Get first element of array

<br><br>

### `peekByIndex(index: number): T`

Get element by given index from array start

###### Params:

| Name  | Type     | Required | Default | Description                    |
|-------|----------|----------|---------|--------------------------------|
| index | `number` | +        | -       | 0 <= index <= array.length - 1 |

<br><br>

### `unshift(value: T): void`

Add new node into array start

###### Params:

| Name  | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| value | `T`  | +        | -       |             |

<br><br>

### `pushFromIndex(value: T, fromIndex: number): void`

Add new node into array by index

###### Params:

| Name      | Type     | Required | Default | Description                    |
|-----------|----------|----------|---------|--------------------------------|
| value     | `T`      | +        | -       |                                |
| fromIndex | `number` | +        | -       | 0 <= index <= array.length - 1 |

<br><br>

### `shift(): T`

Remove node from array start and get its value

###### Throws: [`CollectionIsEmptyException`](/api/exceptions/state) when array is empty

<br><br>

### `deleteFromIndex(fromIndex: number): T`

Remove node from array by index

###### Params:

| Name      | Type     | Required | Default | Description                    |
|-----------|----------|----------|---------|--------------------------------|
| fromIndex | `number` | +        | -       | 0 <= index <= array.length - 1 |

<br><br>

### `pushFromArray(elements: Array<T>): void`

Add elements from array collection in order from start

###### Params:

| Name     | Type       | Required | Default | Description |
|----------|------------|----------|---------|-------------|
| elements | `Array<T>` | +        | -       |             |

<br><br>

### `getAsArray(): Array<T>`

Convert linked array into array collection in order from start

###### Params:

| Name     | Type       | Required | Default | Description |
|----------|------------|----------|---------|-------------|
| elements | `Array<T>` | +        | -       |             |

<br><br>

### `clear(): void`

Remove all elements from array

<br><br>

### `isEmpty(): boolean`

Check is array has any value, returns true if array is empty

<br><br>

### `isFull(): boolean`

Check is array length exceed max capacity

<br><br>

### `length(): number`

Get array size

<br><br>
