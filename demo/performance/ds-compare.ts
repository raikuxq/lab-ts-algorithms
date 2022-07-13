import Queue from "../../src/app/data-structures/Queue/Queue";
import Stack from "../../src/app/data-structures/Stack/Stack";
import ILinearStorage from "../../src/app/types/ILinearStorage";
import { roundNumber } from "../../src/app/utils";
import { perf } from "../../src/app/performance";

export const pushToLinearDS = (
  linearDS: ILinearStorage<string>,
  elementsCount: number,
  item: string
): void => {
  for (let i = 0; i < elementsCount; i++) {
    linearDS.push(`${item}_${i}`);
  }
};

export const perfLinearDS = (linearDS: ILinearStorage<string>): void => {
  let elementsCount = 50;

  while (elementsCount <= 5000000) {
    pushToLinearDS(linearDS, elementsCount, "qwerty");

    const perfPush = perf(() => {
      linearDS.push("qwerty");
    });
    const perfPeek = perf(() => {
      linearDS.peek();
    });

    const perfPop = perf(() => {
      linearDS.pop();
    });
    const perfHas = perf(() => {
      linearDS.has(`qwerty_${elementsCount - 10}`);
    });

    console.log(`N: ${elementsCount} push: ${roundNumber(perfPush)}ms`);
    console.log(`N: ${elementsCount} peek: ${roundNumber(perfPeek)}ms`);
    console.log(`N: ${elementsCount} pop: ${roundNumber(perfPop)}ms`);
    console.log(`N: ${elementsCount} has: ${roundNumber(perfHas)}ms`);
    console.log("=========================");

    elementsCount *= 10;
  }
};

export const perfQueue = (): void => {
  console.log(`QUEUE PERFORMANCE TEST:`);
  const queue: ILinearStorage<string> = new Queue<string>();

  perfLinearDS(queue);
};

export const perfStack = (): void => {
  console.log(`STACK PERFORMANCE TEST:`);
  const stack: ILinearStorage<string> = new Stack<string>();

  perfLinearDS(stack);
};
