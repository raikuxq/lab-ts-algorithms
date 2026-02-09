/**
 * Round number to given digits after
 */
export const roundNumber = (num: number, digits = 3): number =>
  Math.round(num * 10 ** digits) / 10 ** digits;
