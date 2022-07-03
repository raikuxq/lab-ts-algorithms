# create-graph-from-matrix

Guide: [/guide/algorithms/graph/create-graph-from-matrix](/guide/algorithms/graph/create-graph-from-matrix)

### Signature

```ts
createGraphFromMatrix(matrix, fieldsList, type);
```

### Params:

| Name       | Type                                                   | Required | Default | Description                  |
|------------|--------------------------------------------------------|----------|---------|------------------------------|
| matrix     | [`TypeArrayMatrix`](/api/types/types#TypeArrayMatrix)  | +        |         | Adjacency matrix N*N         |
| fieldsList | `Array<T>`                                             | +        |         | Ordered list of all vertices |
| type       | [`EnumGraphType`](/api/types/enumerable#EnumGraphType) | +        |         | UNDIRECTED/DIRECTED          |

### Returns:

#### [`IGraph<T>`](/api/types/interfaces#IGraph)

<br>
