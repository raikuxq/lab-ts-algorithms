import Queue from "../../../../src/data-structures/Queue/Queue";
import ILinearStorage from "../../../../src/types/ILinearStorage";

describe("queue", () => {
  describe("method peek", () => {
    it("should correct peek value from top", () => {
      const queue: ILinearStorage<number> = new Queue();
      queue.push(5);
      queue.push(10);

      expect(queue.peek()).toBe(5);
    });
    it("should throw when queue is empty", () => {
      const queue: ILinearStorage<number> = new Queue();

      expect(() => {
        queue.peek();
      }).toThrowError();
    });
  });

  describe("method push", () => {
    it("should correct push to top", () => {
      const queue: ILinearStorage<number> = new Queue();
      queue.push(5);
      queue.push(10);

      expect(queue.peek()).toBe(5);
    });
  });

  describe("method pop", () => {
    describe("should correct pop from top", () => {
      const queue: ILinearStorage<number> = new Queue();
      queue.push(5);
      queue.push(10);
      const popd = queue.pop();

      it("should delete correct", () => {
        expect(queue.peek()).toBe(10);
      });
      it("should return correct value", () => {
        expect(popd).toBe(5);
      });
    });
    it("should throw when queue is empty", () => {
      const queue: ILinearStorage<number> = new Queue();

      expect(() => {
        queue.pop();
      }).toThrowError();
    });
  });

  // describe("method reverse", () => {
  //   it("should correctly reverse queue", () => {
  //     const queue: ILinearStorage<number> = new Queue();
  //     queue.push(5);
  //     queue.push(10);
  //     queue.push(15);
  //     queue.reverse();
  //
  //     expect(queue.peek()).toBe(15);
  //   });
  // });

  describe("method isEmpty", () => {
    it("should return true when queue is empty", () => {
      const queue: ILinearStorage<number> = new Queue();
      expect(queue.isEmpty()).toBe(true);
    });
  });
});
