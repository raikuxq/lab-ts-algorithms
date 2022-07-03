# GraphIteratorDFS

Guide: [/guide/algorithms/graph/iterator-dfs](/guide/algorithms/graph/iterator-dfs)

### Signature

```ts
const iterator = new GraphIteratorDFS(graph);
```

### Params:

| Name  | Type                                        | Required | Default | Description |
|-------|---------------------------------------------|----------|---------|-------------|
| graph | [`IGraph<T>`](/api/types/interfaces#IGraph) | +        |         | Given graph |

### Returns:

#### [`IGraphIterator<T>`](/api/types/interfaces#IGraphIterator)

<br>

### Iterator methods:

#### `initIterator(from: T): void`

Init iterator by passing 'from' vertex

###### Params:

| Name | Type | Required | Default | Description  |
|------|------|----------|---------|--------------|
| from | `T`  | +        |         | Start vertex |

###### Throws [`IsNotFoundException`](/api/exceptions/state) when there is no next element

<br><br>

#### `next(): T`

Iterate to next element (depends on iteration strategy)

###### Throws [`IllegalStateException`](/api/exceptions/state) when there is no next element

<br><br>

#### `current(): T`

Get current element

###### Throws [`IllegalStateException`](/api/exceptions/state) when there is no current element

<br><br>

#### `hasNext(): boolean`

Check is there next element available
<br><br>

#### `getPath(from: T, to: T): Array<T>`

Get full path between two given vertices

###### Params:

| Name | Type | Required | Default | Description  |
|------|------|----------|---------|--------------|
| from | `T`  | +        |         | Start vertex |
| to   | `T`  | +        |         | End vertex   |

###### Throws [`IllegalStateException`](/api/exceptions/state) when there is no path at all

<br><br>
