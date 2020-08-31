import IQueue from "../../IQueue";
import Queue from "../Queue";

describe('Queue', () => {

  test('enqueue', () => {
    const queue: IQueue<number> = new Queue();

    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    const head = queue.peek();

    expect(head).toBe(10);
  });

  test('dequeue', () => {
    const queue: IQueue<number> = new Queue();

    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    const deleted = queue.dequeue();
    const head = queue.peek();

    expect(deleted).toBe(10);
    expect(head).toBe(20);
  });

  test('when is empty', () => {
    const queue: IQueue<number> = new Queue();

    expect(queue.peek()).toBeNull();
    expect(queue.dequeue()).toBeNull();
  });

})
