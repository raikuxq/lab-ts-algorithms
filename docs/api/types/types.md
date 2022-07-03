# Types

## [`FnCompareTwo`](/api/types/types#FnCompareTwo)

```ts
 type FnCompareTwo<T> = (firstItem: T, secondItem: T) => boolean;
```

## [`FnSort`](/api/types/types#FnSort)

```ts
 type FnSort = (arg: Array<number>) => Array<number>;
```

## [`FnToMemoize`](/api/types/types#FnToMemoize)

```ts
 type FnToMemoize<Key, Value> = (...args: Array<Key>) => Value;
```

## `TypeArrayMatrix`

```ts
 type TypeArrayMatrix = Array<Array<number>>;
```
