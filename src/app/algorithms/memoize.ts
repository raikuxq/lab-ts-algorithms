import { FnToMemoize } from "src/app/types/FnToMemoize";

/**
 * Wrapper function that storing the results of calls and returning the cached result when the same inputs occur again
 */
export const memoize = <Key, Value>(
  fn: FnToMemoize<Key, Value>,
): FnToMemoize<Key, Value> => {
  const cache = new Map<string, Value>();

  return (...args: Array<Key>): Value => {
    const jsonArgs = JSON.stringify(args);

    if (!cache.has(jsonArgs)) {
      const result = fn(...args);
      cache.set(jsonArgs, result);
    }

    return <Value>cache.get(jsonArgs);
  };
};
