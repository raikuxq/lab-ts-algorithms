# memoize<Key, Value>

Guide: [/guide/algorithms/memoize](/guide/algorithms/memoize)

### Generic Types

`Key` - key type (must be json-serializable)  
`Value` - value type (any type)

### Signature

```ts
memoize(fn);
```

### Params:

| Name | Type                                    | Required | Default | Description |
|------|-----------------------------------------|----------|---------|-------------|
| fn   | [`FnToMemoize`](/api/types/types#FnToMemoize) | +        |         |             |

### Returns:

#### [`FnToMemoize`](/api/types/types#FnToMemoize)

<br>

