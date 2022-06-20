# Stack\<T>

::: tip Stack
In computer science, a stack is an abstract data type that serves as a collection of elements, with two main principal
operations:

+ Push, which adds an element to the collection, and
+ Pop, which removes the most recently added element that was not yet removed.

The order in which elements come off a stack gives rise to its alternative name, LIFO (last in, first out).

Considered as a linear data structure, or more abstractly a sequential collection, the push and pop operations occur
only at one end of the structure, referred to as the top of the stack.

[wiki/stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))
:::

## Import

```ts
import {Stack} from "@raikuxq/alg-ds/data-structures";

const stack = new Stack();
```

## Implements interfaces

### `ILinearStorage`

```ts
const stack: ILinearStorage = new Stack();
```

## Methods

### `constructor(capacity?: number): Stack<T>`

Creates empty instance
| Name | Type | Required | Default | Description |
|----------|----------|----------|------------------|------------------------------|
| capacity | `number` | - | Number.MAX_VALUE | Max capacity of stack <br/>(0 < capacity < NUMBER.MAX_VALUE) |

### `peek(): T`

Returns value from top of stack

### `pop(): T`

Returns value from top of stack and removes it

### `push(value: T): void`

Add value to top of stack
| Name | Type | Required | Default | Description |
|-------|------|----------|---------|--------------|
| value | `T`    | + | - | |

### `has(value: T): boolean`

Check is stack has given value
| Name | Type | Required | Default | Description |
|-------|------|----------|---------|----------------|
| value | `T`    | + | - | |

### `clear(): void`

Remove all elements from stack

### `isEmpty(): boolean`

Check is stack has any value, returns true if stack is empty

### `isFull(): boolean`

Check is stack length exceed max capacity (>=)

### `length(): number`

Get stack size

## Example usage

```ts
import {Stack} from "@raikuxq/alg-ds/data-structures";

const stack = new Stack<string>();

stack.push("John");
stack.push("Mary");
stack.push("Kate");

stack.peek(); // Kate
stack.pop(); // Kate
stack.peek(); // Mary
stack.has("John"); // true
```
