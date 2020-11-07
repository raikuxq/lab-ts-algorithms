import Queue from "../Queue";

describe("queue", () => {
  describe("method peek", () => {
    test("should correct peek value from top", () => {
      const queue: Queue<number> = new Queue();
      queue.enqueue(10);
      const top = queue.peek();

      expect(queue.peek()).toBe(top);
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
      queue.enqueue(10);

      expect(queue.peek()).toBe(10);
    });
  });

  describe("method dequeue", () => {
    describe("should correct dequeue from top", () => {
      const queue: Queue<number> = new Queue();
      queue.enqueue(10);
      const dequeued = queue.dequeue();

      test("should delete correct", () => {
        expect(queue.isEmpty()).toBe(true);
      });
      test("should return correct value", () => {
        expect(dequeued).toBe(10);
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
