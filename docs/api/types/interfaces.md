# Interfaces

## `IArrayFacade`

```ts
import ILinearStorageRA from "./ILinearStorageRA";
import IConvertableToArray from "./IConvertableToArray";

export default interface IArrayFacade<T>
    extends ILinearStorageRA<T>,
        IConvertableToArray<T> {
}
```

## `IBinaryTree`

```ts
import {EnumTreeTraversalType} from "./EnumTreeTraversalType";

export default interface IBinaryTree<T> {
    has(value: T): boolean;

    insert(value: T): void;

    delete(value: T): void;

    subtree(value: T): IBinaryTree<T>;

    max(): T;

    min(): T;

    length(): number;

    height(): number;

    traverse(type: EnumTreeTraversalType): Array<T>;
}
```

## `IConvertableToArray`

```ts
export default interface IConvertableToArray<T> {
    pushFromArray(elements: Array<T>): void;

    getAsArray(): Array<T>;
}
```

## `IGraph`

```ts
export default interface IGraph<T> {
    weight(): number;

    vertices(): Array<T>;

    verticesCount(): number;

    edgesCount(): number;

    addVertex(data: T): this;

    removeVertex(data: T): this;

    hasVertex(data: T): boolean;

    getVertexNeighbors(data: T): Array<T>;

    addEdge(from: T, to: T, weight?: number): this;

    removeEdge(from: T, to: T): this;

    hasEdge(from: T, to: T): boolean;

    getEdgeWeight(from: T, to: T): number;
}
```

## `IGraphCreator`

```ts
import IGraph from "./IGraph";

export default interface IGraphCreator<T> {
    createGraph(): IGraph<T>;
}
```

## `IGraphIterator`

```ts
import IIterator from "./IIterator";

export default interface IGraphIterator<T> extends IIterator<T> {
    /**
     * Get path which passed by iterator between two vertices
     */
    getPath(from: T, to: T): Array<T>;

    /**
     * Initialize iterator by passing start vertex
     */
    initIterator(from: T): void;
}
```

## `IGraphIterationStrategy`

```ts
import IGraph from "./IGraph";
import IGraphIterator from "./IGraphIterator";

export default interface IGraphIterationStrategy<T> {
    createIterator(graph: IGraph<T>): IGraphIterator<T>;
}
```

## `IKeyValueStorage`

```ts
export default interface IKeyValueStorage<T> {
    set(key: string, value: T): void;

    has(key: string): boolean;

    get(key: string): T;

    delete(key: string): void;

    length(): number;

    clear(): void;
}
```

## `ILinearStorage`

```ts
export default interface ILinearStorage<T> {
    peek(): T;

    push(value: T): void;

    pop(): T;

    has(value: T): boolean;

    isEmpty(): boolean;

    isFull(): boolean;

    length(): number;

    clear(): void;

    reverse(): void;
}

```

## `ILinearStorageRA`

```ts
import ILinearStorage from "./ILinearStorage";

/**
 * Interface extends default linear storage with methods that allows read/write operations for all storage elements
 * RA - randomly accessible
 */
export default interface ILinearStorageRA<T> extends ILinearStorage<T> {
    peekFromStart(): T;

    peekByIndex(index: number): T;

    unshift(value: T): void;

    pushFromIndex(value: T, fromIndex: number): void;

    shift(): T;

    deleteFromIndex(fromIndex: number): T;
}

```

## `ILinkedList`

```ts
import ILinearStorageRA from "./ILinearStorageRA";
import IConvertableToArray from "./IConvertableToArray";

export default interface ILinkedList<T>
    extends ILinearStorageRA<T>,
        IConvertableToArray<T> {
}
```

## `IIterator`

```ts
export default interface IIterator<T> {
    /**
     * Will do one iteration and returns next item value
     */
    next(): T;

    /**
     * Will returns current value
     */
    current(): T;

    /**
     * Check if next element exists
     */
    hasNext(): boolean;
}
```

## `IBiDirectIterator`

```ts
import IIterator from "./IIterator";

export default interface IBiDirectIterator<T> extends IIterator<T> {
    /**
     * Will do one iteration back and returns prev item value
     */
    prev(): T;

    /**
     * Check if next element exists
     */
    hasPrev(): boolean;
}
```

## `IIterable`

```ts
import IIterator from "./IIterator";

export default interface IIterable<T> {
    iterator(fromIndex?: number): IIterator<T>;
}
```

## `IBiDirectIterable`

```ts
import IBiDirectIterator from "./IBiDirectIterator";
import IIterable from "./IIterable";

export default interface IBiDirectIterable<T> extends IIterable<T> {
    iterator(fromIndex?: number): IBiDirectIterator<T>;
}
```
