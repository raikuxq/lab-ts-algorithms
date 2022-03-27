import ILinearStorage from "../types/ILinearStorage";
import Stack from "../data-structures/Stack/Stack";

export const demoStack = () => {
  console.log("\nEmpty stack created");
  const stack: ILinearStorage<string> = new Stack<string>();

  stack.push("John");
  stack.push("Mary");
  console.log("\nJohn and Mary were added");
  console.log("\n*John > Mary*");
  console.log("\nStack peek element:");
  console.log(stack.peek());

  stack.push("Kate");
  console.log("\nKate was added to end");
  console.log("\n*John > Mary > Kate*");
  console.log("\nStack peek element:");
  console.log(stack.peek());

  console.log("\nChecking is stack has John: ");
  console.log(stack.has("John"));

  stack.pop();
  console.log("\nPop element... ");
  console.log("\nCheck is stack has Kate: ");
  console.log(stack.has("Kate"));
  console.log("\n*John > Mary*");
  console.log("\nStack peek element:");
  console.log(stack.peek());

  console.log("\nArray length is: ");
  console.log(stack.length());

  stack.clear();
  console.log("\nClear stack... ");

  console.log("\nCheck is stack empty:");
  console.log(stack.isEmpty());
};
