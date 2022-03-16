import { performance } from "perf_hooks";
import Queue from "../data-structures/Queue/Queue";
import Stack from "../data-structures/Stack/Stack";

export const perf = (fn: () => void, operation: string): void => {
  const queue = new Queue<number>();

  const perfStart = performance.now();
  queue.enqueue(4);
  fn();
  const perfEnd = performance.now();
  console.log(`${operation} = ${perfEnd - perfStart}ms`);
};

export const perfQueue = (): void => {
  console.log(`QUEUE PERFORMANCE TEST:`);
  const queue = new Queue<number>();

  perf(() => {
    queue.enqueue(4);
  }, "enqueue");

  perf(() => {
    queue.peek();
  }, "peek");

  perf(() => {
    queue.dequeue();
  }, "dequeue");

  perf(() => {
    queue.isEmpty();
  }, "isEmpty");
};

export const perfStack = (): void => {
  console.log(`STACK PERFORMANCE TEST:`);
  const stack = new Stack<number>(10);

  perf(() => {
    stack.push(4);
  }, "push");

  perf(() => {
    stack.peek();
  }, "peek");

  perf(() => {
    stack.pop();
  }, "pop");

  perf(() => {
    stack.isEmpty();
  }, "isEmpty");
};
