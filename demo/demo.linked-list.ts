import DoubleLinkedList from "src/app/data-structures/LinkedList/core/DoubleLinkedList/DoubleLinkedList";
import ILinkedList from "src/app/types/ILinkedList";

export const demoLinkedList = (): void => {
  console.log("\nEmpty linked list created");
  const list: ILinkedList<string> = new DoubleLinkedList<string>();

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

  console.log("\nCheck if head and tail correctly linked with each other");
  console.log(list);

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

  console.log("\nCheck if head and tail correctly linked with each other");
  console.log(list);

  list.clear();
  console.log("\nClear list... ");

  console.log("\nCheck is list empty:");
  console.log(list.isEmpty());
  console.log(list.getAsArray());
};
