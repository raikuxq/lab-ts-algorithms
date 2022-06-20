# LoopedArray\<T>

::: tip Looped array
Is a linear data structure, facade above array.  
After reaching full array new pushed elements will be overwritten over old elements.  
:::

## Import

```ts
import {LoopedArray} from "@raikuxq/alg-ds/data-structures";

const array = new LoopedArray();
```

## Implements interfaces

### `IArrayFacade`

```ts
const array: IArrayFacade = new LoopedArray();
```

### `ILinearStorage`

```ts
const array: ILinearStorage = new LoopedArray();
```

### `ILinearStorageRA`

```ts
const array: ILinearStorageRA = new LoopedArray();
```

## Methods

### `constructor(capacity: number): IArrayFacade<T>`

Creates empty instance
| Name | Type | Required | Default | Description |
|----------|----------|----------|------------------|------------------------------|
| capacity | `number` | + | - | Max capacity of array <br/>(> 0) |

### `peek(): T`

Returns value from top of array

### `pop(): T`

Removes item from array end (head element) and returns its value

### `push(value: T): void`

Add value to top of array
| Name | Type | Required | Default | Description |
|-------|------|----------|---------|--------------|
| value | `T`    | + | - | |

### `has(value: T): boolean`

Check is array has given value
| Name | Type | Required | Default | Description |
|-------|------|----------|---------|----------------|
| value | `T`    | + | - | |

### `peekFromStart(): T`

Get first element of array

### `peekByIndex(index: number): T`

Get element by given index from array start
| Name | Type | Required | Default | Description |
|-------|----------|----------|---------|-------------------------------|
| index | `number` | + | - | 0 <= index <= array.length - 1 |

### `unshift(value: T): void`

Add new node into array start
| Name | Type | Required | Default | Description |
|-------|------|----------|---------|---------------|
| value | `T`    | + | - | |

### `pushFromIndex(value: T, fromIndex: number): void`

Add new node into array by index
| Name | Type | Required | Default | Description |
|-----------|------|----------|---------|---------------|
| value | `T`    | + | - | |
| fromIndex | `number` | + | - | 0 <= index <= array.length - 1 |

### `shift(): T`

Remove node from array start and get its value

### `deleteFromIndex(fromIndex: number): T`

Remove node from array by index
| Name | Type | Required | Default | Description |
|-----------|------|----------|---------|---------------|
| fromIndex | `number` | + | - | 0 <= index <= array.length - 1 |

### `pushFromArray(elements: Array<T>): void`

Add elements from array collection in order from start
| Name | Type | Required | Default | Description |
|-----------|------|----------|---------|---------------|
| elements | `Array<T>` | + | - | |

### `getAsArray(): Array<T>`

Convert linked array into array collection in order from start
| Name | Type | Required | Default | Description |
|-----------|------|----------|---------|---------------|
| elements | `Array<T>` | + | - | |

### `clear(): void`

Remove all elements from array

### `isEmpty(): boolean`

Check is array has any value, returns true if array is empty

### `isFull(): boolean`

Check is array length exceed max capacity

### `length(): number`

Get array size

<br><br>

## Example looped array usage

```ts
import {LoopedArray} from "@raikuxq/alg-ds/data-structures";

const array = new LoopedArray<string>();

array.push("John");
array.push("Mary");
array.push("Kate");

array.peek(); // John
array.pop(); // John
array.peek(); // Mary
array.has("John"); // false
```
