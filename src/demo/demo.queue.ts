import Queue from "../data-structures/Queue/Queue";
import ILinearStorage from "../types/ILinearStorage";

export const demoQueue = (): void => {
  console.log("\nEmpty queue created");
  const queue: ILinearStorage<string> = new Queue<string>();

  queue.push("John");
  queue.push("Mary");
  console.log("\nJohn and Mary were added");
  console.log("\n*John > Mary*");
  console.log("\nQueue peek element:");
  console.log(queue.peek());

  queue.push("Kate");
  console.log("\nKate was added to end");
  console.log("\n*John > Mary > Kate*");
  console.log("\nQueue peek element:");
  console.log(queue.peek());

  console.log("\nChecking is queue has John: ");
  console.log(queue.has("John"));

  queue.pop();
  console.log("\nPop element... ");
  console.log("\nCheck is queue has John: ");
  console.log(queue.has("John"));
  console.log("\n*Mary > Kate*");
  console.log("\nQueue peek element:");
  console.log(queue.peek());

  console.log("\nArray length is: ");
  console.log(queue.length());

  queue.clear();
  console.log("\nClear queue... ");

  console.log("\nCheck is queue empty:");
  console.log(queue.isEmpty());
};
