# Queue\<T>

::: tip Queue
In computer science, a queue is a collection of entities that are maintained in a sequence and can be modified by the
addition of entities at one end of the sequence and the removal of entities from the other end of the sequence.

By convention, the end of the sequence at which elements are added is called the back, tail, or rear of the queue, and
the end at which elements are removed is called the head or front of the queue, analogously to the words used when
people line up to wait for goods or services.

[wiki/stack](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))
:::

## Import

```ts
import {Queue} from "@raikuxq/alg-ds/data-structures";

const queue = new Queue();
```

## Implements interfaces

### `ILinearStorage`

```ts
const queue: ILinearStorage = new Queue();
```

## Methods

### `constructor(capacity?: number): Queue<T>`

Creates empty instance
| Name | Type | Required | Default | Description |
|----------|----------|----------|------------------|------------------------------|
| capacity | `number` | - | Number.MAX_VALUE | Max capacity of queue <br/>(> 0) |

### `peek(): T`

Returns value from top of queue

### `pop(): T`

Returns value from top of queue and removes it

### `push(value: T): void`

Add value to top of queue
| Name | Type | Required | Default | Description |
|-------|------|----------|---------|--------------|
| value | `T`    | + | - | |

### `has(value: T): boolean`

Check is queue has given value
| Name | Type | Required | Default | Description |
|-------|------|----------|---------|----------------|
| value | `T`    | + | - | |

### `clear(): void`

Remove all elements from queue

### `isEmpty(): boolean`

Check is queue has any value, returns true if queue is empty

### `isFull(): boolean`

Check is queue length exceed max capacity

### `length(): number`

Get queue size

## Example usage

```ts
import {Queue} from "@raikuxq/alg-ds/data-structures";

const queue = new Queue<string>();

queue.push("John");
queue.push("Mary");
queue.push("Kate");

queue.peek(); // John
queue.pop(); // John
queue.peek(); // Mary
queue.has("John"); // false
```
