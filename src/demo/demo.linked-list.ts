import DoubleLinkedList from "../data-structures/LinkedList/DoubleLinkedList/DoubleLinkedList";
import ILinearStorageAccessible from "../types/ILinearStorageAccessible";

export const demoLinkedList = (): void => {
  console.log("\nEmpty linked list created");
  const list: ILinearStorageAccessible<string> = new DoubleLinkedList<string>();

  list.push("John");
  list.push("Mary");
  console.log("\nJohn and Mary were added");
  console.log(list.getAsArray());

  list.push("Kate");
  console.log("\nKate was added to end");
  console.log(list.getAsArray());

  console.log("\nChecking is list has John: ");
  console.log(list.has("John"));

  list.shift();
  console.log("\nDeleting first element... ");
  console.log("\nChecking is list has John: ");
  console.log(list.has("John"));
  console.log(list.getAsArray());

  list.pop();
  console.log("\nDeleting last element... ");
  console.log("\nCheck is list has Kate: ");
  console.log(list.has("Kate"));
  console.log(list.getAsArray());

  list.push("Bob");
  list.push("Elon");
  console.log("\nAdding Bob и Elon: ");
  console.log(list.getAsArray());

  list.unshift("Dan");
  console.log("\nAdding Dan to start: ");
  console.log(list.getAsArray());

  list.deleteFromIndex(2);
  console.log("\nDelete item by index 2: ");
  console.log(list.getAsArray());

  list.pushFromIndex("Sam", 2);
  console.log("\nAdding Sam by index 2: ");
  console.log(list.getAsArray());

  console.log("\nArray length is: ");
  console.log(list.length());

  console.log("\nPeek last element: ");
  console.log(list.peek());

  console.log("\nPeek first element: ");
  console.log(list.peekFromStart());

  console.log("\nPeek by index 2: ");
  console.log(list.peekByIndex(2));

  list.reverse();
  console.log("\nReversing list... ");
  console.log("\nReversed list: ");
  console.log(list.getAsArray());

  list.clear();
  console.log("\nClear list... ");

  console.log("\nCheck is list empty:");
  console.log(list.isEmpty());
  console.log(list.getAsArray());
};
