import { performance } from "perf_hooks";
import Queue from "../data-structures/Queue/Queue";
import Stack from "../data-structures/Stack/Stack";
import ILinearStorage from "../types/ILinearStorage";

export const perf = (fn: () => void, operation: string): void => {
  const queue = new Queue<number>();

  const perfStart = performance.now();
  queue.push(4);
  fn();
  const perfEnd = performance.now();
  console.log(
    `${operation} = ${Math.round((perfEnd - perfStart) * 100) / 100}ms`
  );
};

export const pushToLinearDS = (
  linearDS: ILinearStorage<string>,
  elementsCount: number,
  item: string
) => {
  for (let i = 0; i < elementsCount; i++) {
    linearDS.push(`${item}_${i}`);
  }
};

export const perfQueue = (): void => {
  console.log(`QUEUE PERFORMANCE TEST:`);
  const queue: ILinearStorage<string> = new Queue<string>();

  let elementsCount = 50;

  while (elementsCount <= 5000000) {
    pushToLinearDS(queue, elementsCount, "qwerty");

    perf(() => {
      queue.push("qwerty");
    }, `N: ${elementsCount} push: `);

    perf(() => {
      queue.peek();
    }, `N: ${elementsCount} peek: `);

    perf(() => {
      queue.pop();
    }, `N: ${elementsCount} pop: `);

    perf(() => {
      queue.has(`qwerty_${elementsCount - 10}`);
    }, `N: ${elementsCount} has: `);

    elementsCount *= 10;
    console.log("=========================");
  }
};

export const perfStack = (): void => {
  console.log(`STACK PERFORMANCE TEST:`);
  const stack: ILinearStorage<string> = new Stack<string>();

  let elementsCount = 50;

  while (elementsCount <= 5000000) {
    pushToLinearDS(stack, elementsCount, "qwerty");

    perf(() => {
      stack.push("qwerty");
    }, `N: ${elementsCount} push: `);

    perf(() => {
      stack.peek();
    }, `N: ${elementsCount} peek: `);

    perf(() => {
      stack.pop();
    }, `N: ${elementsCount} pop: `);

    perf(() => {
      stack.has(`qwerty_${elementsCount - 10}`);
    }, `N: ${elementsCount} has: `);

    elementsCount *= 10;
    console.log("=========================");
  }
};
