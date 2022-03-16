import Queue from "../src/data-structures/Queue/Queue";

describe("queue", () => {
  describe("method peek", () => {
    test("should correct peek value from top", () => {
      const queue: Queue<number> = new Queue();
      queue.enqueue(5);
      queue.enqueue(10);

      expect(queue.peek()).toBe(5);
    });
    test("should throw when queue is empty", () => {
      const queue: Queue<number> = new Queue();

      expect(() => {
        queue.peek();
      }).toThrowError();
    });
  });

  describe("method enqueue", () => {
    test("should correct enqueue to top", () => {
      const queue: Queue<number> = new Queue();
      queue.enqueue(5);
      queue.enqueue(10);

      expect(queue.peek()).toBe(5);
    });
  });

  describe("method dequeue", () => {
    describe("should correct dequeue from top", () => {
      const queue: Queue<number> = new Queue();
      queue.enqueue(5);
      queue.enqueue(10);
      const dequeued = queue.dequeue();

      test("should delete correct", () => {
        expect(queue.peek()).toBe(10);
      });
      test("should return correct value", () => {
        expect(dequeued).toBe(5);
      });
    });
    test("should throw when queue is empty", () => {
      const queue: Queue<number> = new Queue();

      expect(() => {
        queue.dequeue();
      }).toThrowError();
    });
  });

  describe("method isEmpty", () => {
    test("should return true when queue is empty", () => {
      const queue: Queue<number> = new Queue();
      expect(queue.isEmpty()).toBe(true);
    });
  });
});
