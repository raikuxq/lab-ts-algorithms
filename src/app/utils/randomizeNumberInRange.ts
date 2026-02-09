/**
 * Get random number in range
 */
export const randomizeNumberInRange = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;
