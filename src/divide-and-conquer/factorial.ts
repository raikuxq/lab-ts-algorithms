export default function factorial(x: number): number {
  return x > 1 ? x * factorial(x - 1) : x;
}
