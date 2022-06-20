# ILinkedList\<T>

::: tip Linked list
In computer science, a linked list is a linear collection of data elements whose order is not given by their physical
placement in memory. Instead, each element points to the next.

It is a data structure consisting of a collection of nodes which together represent a sequence. In its most basic form,
each node contains: data, and a reference (in other words, a link) to the next node in the sequence.

[wiki/linked_list](https://en.wikipedia.org/wiki/Linked_list)
:::

## Difference between singly-linked and doubly-linked lists

::: tip Double linked list
In a 'doubly linked list', each node contains, besides the next-node link, a second link field pointing to the '
previous' node in the sequence. The two links may be called 'forward('s') and 'backwards', or 'next' and 'prev'('
previous').
:::

::: tip Single linked list
Singly linked lists contain nodes which have a data field as well as 'next' field, which points to the next node in line
of nodes. Operations that can be performed on singly linked lists include insertion, deletion and traversal.
:::

## Import

```ts
import {SingleLinkedList, DoubleLinkedList} from "@raikuxq/alg-ds/data-structures";

const listSingle = new SingleLinkedList();
const listDouble = new DoubleLinkedList();
```

## Implements interfaces

### `ILinkedList`

```ts
const listSingle: ILinkedList = new SingleLinkedList();
const listDouble: ILinkedList = new DoubleLinkedList();
```

### `ILinearStorage`

```ts
const listSingle: ILinearStorage = new SingleLinkedList();
const listDouble: ILinearStorage = new DoubleLinkedList();
```

### `ILinearStorageRA`

```ts
const listSingle: ILinearStorageRA = new SingleLinkedList();
const listDouble: ILinearStorageRA = new DoubleLinkedList();
```

### `IIterable`

```ts
const listSingle: IITerable = new SingleLinkedList();
const listDouble: IITerable = new DoubleLinkedList();
```

### `IBiDirectIterable`

```ts
const list: IBiDirectIterable = new DoubleLinkedList();
```

## Methods

### `constructor(capacity?: number): IlinedList<T>`

Creates empty instance
| Name | Type | Required | Default | Description |
|----------|----------|----------|------------------|------------------------------|
| capacity | `number` | - | Number.MAX_VALUE | Max capacity of list <br/>(> 0) |

### `peek(): T`

Returns value from top of list

### `pop(): T`

Removes item from list end (head element) and returns its value

### `push(value: T): void`

Add value to top of list
| Name | Type | Required | Default | Description |
|-------|------|----------|---------|--------------|
| value | `T`    | + | - | |

### `has(value: T): boolean`

Check is list has given value
| Name | Type | Required | Default | Description |
|-------|------|----------|---------|----------------|
| value | `T`    | + | - | |

### `peekFromStart(): T`

Get first element of list (tail)

### `peekByIndex(index: number): T`

Get element by given index from list start
| Name | Type | Required | Default | Description |
|-------|----------|----------|---------|-------------------------------|
| index | `number` | + | - | 0 <= index <= list.length - 1 |

### `unshift(value: T): void`

Add new node into list start (node becomes tail)
| Name | Type | Required | Default | Description |
|-------|------|----------|---------|---------------|
| value | `T`    | + | - | |

### `pushFromIndex(value: T, fromIndex: number): void`

Add new node into list by index
| Name | Type | Required | Default | Description |
|-----------|------|----------|---------|---------------|
| value | `T`    | + | - | |
| fromIndex | `number` | + | - | 0 <= index <= list.length - 1 |

### `shift(): T`

Remove node from list start (tail element) and get its value

### `deleteFromIndex(fromIndex: number): T`

Remove node from list by index
| Name | Type | Required | Default | Description |
|-----------|------|----------|---------|---------------|
| fromIndex | `number` | + | - | 0 <= index <= list.length - 1 |

### `pushFromArray(elements: Array<T>): void`

Add elements from array collection in order from start
| Name | Type | Required | Default | Description |
|-----------|------|----------|---------|---------------|
| elements | `Array<T>` | + | - | |

### `getAsArray(): Array<T>`

Convert linked list into array collection in order from start
| Name | Type | Required | Default | Description |
|-----------|------|----------|---------|---------------|
| elements | `Array<T>` | + | - | |

### `clear(): void`

Remove all elements from list

### `isEmpty(): boolean`

Check is list has any value, returns true if list is empty

### `isFull(): boolean`

Check is list length exceed max capacity

### `length(): number`

Get list size

<br><br>

## Methods (Single Linked List)

### `iterator(fromIndex?: number): IIterator<T>`

| Name      | Type | Required | Default | Description   |
|-----------|------|----------|---------|---------------|
| fromIndex | `number` | +        | -       | 0 <= index <= list.length - 1 |

#### Methods

##### `current(): T`

##### `next(): T`

##### `hasNext(): boolean`

<br><br>

## Methods (Double Linked List)

### `iterator(fromIndex?: number): IBiDirectIterator<T>`

| Name      | Type | Required | Default | Description   |
|-----------|------|----------|---------|---------------|
| fromIndex | `number` | +        | -       | 0 <= index <= list.length - 1 |

#### Methods

##### `current(): T`

##### `next(): T`

##### `hasNext(): boolean`

##### `prev(): T`

##### `hasPrev(): boolean`

<br><br>

## Example linked list usage

```ts
import {DoubleLinkedList} from "@raikuxq/alg-ds/data-structures";

const list = new LinkedList<string>();

list.push("John");
list.push("Mary");
list.push("Kate");

list.peek(); // John
list.pop(); // John
list.peek(); // Mary
list.has("John"); // false
```

<br><br>

## Example iterator usage

```ts
import {DoubleLinkedList} from "@raikuxq/alg-ds/data-structures";

const list = new DoubleLinkedList<number>();
linkedList.pushFromArray([10, 20, 30]);

const iterator = linkedList.iterator(0);

iterator.current(); // 10
iterator.hasNext(); // true
iterator.next(); // 20
iterator.next(); // 30
iterator.current(); // 30
iterator.hasNext(); // false
iterator.hasPrev(); // true
iterator.prev(); // 20
iterator.prev(); // 10
iterator.hasPrev(); // false
```
