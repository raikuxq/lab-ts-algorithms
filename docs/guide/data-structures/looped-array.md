# Looped Array

Looped array is a linear data structure. Facade above array.  
After reaching full array new pushed elements will be overwritten over old elements.

## Import

```ts
import {LoopedArray} from "@raikuxq/alg-ds/data-structures";
```

## API reference

Looped array API: [/api/data-structures/looped-array](/api/data-structures/looped-array)

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
