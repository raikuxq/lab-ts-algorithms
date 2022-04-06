import LoopedArray from "../data-structures/LoopedArray/LoopedArray";
import IArrayFacade from "../types/IArrayFacade";

export const demoLoopedArray = (): void => {
  console.log("LoopedArray instance was created with capacity = 4");
  const loopedArray: IArrayFacade<string> = new LoopedArray<string>(4);

  loopedArray.push("John");
  loopedArray.push("Mary");
  console.log("\nJohn and Mary were added");
  console.log(loopedArray.getAsArray());

  loopedArray.push("Kate");
  console.log("\nKate was added to end");
  console.log(loopedArray.getAsArray());

  console.log("\nChecking is array has John: ");
  console.log(loopedArray.has("John"));

  loopedArray.shift();
  console.log("\nDeleting first element... ");
  console.log("\nChecking is array has John: ");
  console.log(loopedArray.has("John"));
  console.log(loopedArray.getAsArray());

  loopedArray.pop();
  console.log("\nDeleting last element... ");
  console.log("\nCheck is array has Kate: ");
  console.log(loopedArray.has("Kate"));
  console.log(loopedArray.getAsArray());

  loopedArray.push("Bob");
  loopedArray.push("Elon");
  console.log("\nAdding Bob и Elon: ");
  console.log(loopedArray.getAsArray());

  loopedArray.unshift("Dan");
  console.log("\nAdding Dan to start: ");
  console.log(loopedArray.getAsArray());

  loopedArray.deleteFromIndex(2);
  console.log("\nDelete item by index 2: ");
  console.log(loopedArray.getAsArray());

  loopedArray.pushFromIndex("Sam", 2);
  console.log("\nAdding Sam by index 2: ");
  console.log(loopedArray.getAsArray());

  console.log("\nArray length is: ");
  console.log(loopedArray.length());

  console.log("\nPeek last element: ");
  console.log(loopedArray.peek());

  console.log("\nPeek first element: ");
  console.log(loopedArray.peekFromStart());

  console.log("\nPeek by index 2: ");
  console.log(loopedArray.peekByIndex(2));

  loopedArray.reverse();
  console.log("\nReversing array... ");
  console.log("\nReversed array: ");
  console.log(loopedArray.getAsArray());

  loopedArray.push("OW_END_1");
  console.log("\nAdding to end when array is full");
  console.log(loopedArray.getAsArray());

  loopedArray.push("OW_END_2");
  console.log("\nAdding to end when array is full");
  console.log(loopedArray.getAsArray());

  loopedArray.push("OW_END_3");
  console.log("\nAdding to end when array is full");
  console.log(loopedArray.getAsArray());

  loopedArray.push("OW_END_4");
  console.log("\nAdding to end when array is full");
  console.log(loopedArray.getAsArray());

  loopedArray.unshift("OW_START_1");
  console.log("\nAdding to start when array is full");
  console.log(loopedArray.getAsArray());

  loopedArray.unshift("OW_START_2");
  console.log("\nAdding to start when array is full");
  console.log(loopedArray.getAsArray());

  loopedArray.unshift("OW_START_3");
  console.log("\nAdding to start when array is full");
  console.log(loopedArray.getAsArray());

  loopedArray.unshift("OW_START_4");
  console.log("\nAdding to start when array is full");
  console.log(loopedArray.getAsArray());

  loopedArray.clear();
  console.log("\nClear array... ");

  console.log("\nCheck is array empty:");
  console.log(loopedArray.isEmpty());
  console.log(loopedArray.getAsArray());
};
