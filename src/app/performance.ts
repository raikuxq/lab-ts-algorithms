import { performance } from "perf_hooks";

/**
 * Get time execution of function
 */
export const perf = (fn: () => void): number => {
  const perfStart = performance.now();
  fn();
  const perfEnd = performance.now();
  return perfEnd - perfStart;
};

/**
 * Get time execution of function
 */
export const perfAsync = async (fn: () => void): Promise<number> => {
  return Promise.resolve(perf(fn));
};
