import DoubleLinkedList from "../src/data-structures/DoubleLinkedList";


test('Double linked list: should correct add elements', () => {
  const testArr = [5,10,15,20,25];

  const list = new DoubleLinkedList<number>();
  list.createFromArray(testArr);
  const listData = list.getAsArray();

  expect(listData).toEqual(testArr);
});

test('Double linked list: should correct delete elements', () => {
  const testArr = [5,10,15,20,25,15];
  const testArrAfterDeletions = [5,10,20,25];

  const list = new DoubleLinkedList<number>();
  list.createFromArray(testArr);
  list.deleteNodesByValue(15);
  const listData = list.getAsArray();

  expect(listData).toEqual(testArrAfterDeletions);
});

test('Double linked list: should unshift correctly', () => {
  const testArr = [1,2,3,4,5];
  const testArrAfterUnshift = [0,1,2,3,4,5];

  const list = new DoubleLinkedList<number>();

  list.createFromArray(testArr);
  list.unshift(0);

  const listData = list.getAsArray();

  expect(listData).toEqual(testArrAfterUnshift);
});

test('Double linked list: should shift correctly', () => {
  const testArr = [1,2,3,4,5];
  const testArrAfterShift = [2,3,4,5];

  const list = new DoubleLinkedList<number>();
  list.createFromArray(testArr);

  const shifted = list.shift();
  const listData = list.getAsArray();

  expect(shifted).toBe(1);
  expect(listData).toEqual(testArrAfterShift);
});

test('Double linked list: should pop correctly', () => {
  const testArr = [0,1,2,3,4,5];
  const testArrAfterShift = [0,1,2,3,4];

  const list = new DoubleLinkedList<number>();
  list.createFromArray(testArr);

  const popped = list.pop();
  const listData = list.getAsArray();

  expect(popped).toBe(5);
  expect(listData).toEqual(testArrAfterShift);
});

test('Double linked list: should peek head and tail correctly', () => {
  const testArr = [0,1,2,3,4,5];

  const list = new DoubleLinkedList<number>();
  list.createFromArray(testArr);

  const head = list.peekHead();
  const tail = list.peekTail();

  expect(head).toBe(5);
  expect(tail).toBe(0);
});
