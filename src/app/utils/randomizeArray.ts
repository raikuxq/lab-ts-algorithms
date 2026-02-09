/**
 * Generate random array
 */
export const randomizeArray = (length: number, max: number): Array<number> =>
  new Array(length).fill(0).map(() => Math.round(Math.random() * max));
