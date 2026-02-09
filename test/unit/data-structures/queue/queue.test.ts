import Queue from "src/app/data-structures/Queue/Queue";
import ILinearStorage from "src/app/types/ILinearStorage";
import CollectionIsEmptyException from "src/app/exceptions/CollectionIsEmptyException";
import CollectionIsFullException from "src/app/exceptions/CollectionIsFullException";

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
      }).toThrow(CollectionIsEmptyException);
    });
  });

  describe("method push", () => {
    it("should correct push to top", () => {
      const queue: ILinearStorage<number> = new Queue();
      queue.push(5);
      queue.push(10);

      expect(queue.peek()).toBe(5);
    });

    it("should throw when list is full", () => {
      const queue: ILinearStorage<number> = new Queue(2);
      queue.push(5);
      queue.push(10);

      expect(() => {
        queue.push(3);
      }).toThrow(CollectionIsFullException);
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
      }).toThrow(CollectionIsEmptyException);
    });
  });

  describe("method has", function () {
    const queue = new Queue();
    queue.push(5);

    it("should return true when value exists", () => {
      expect(queue.has(5)).toBe(true);
    });

    it("should return false when value does not exist", () => {
      expect(queue.has(10)).toBe(false);
    });
  });

  describe("method length", function () {
    describe("when queue is non empty", () => {
      describe("after adding", () => {
        it("should return updated length value", () => {
          const queue = new Queue();
          queue.push(5);
          queue.push(15);
          queue.push(10);

          expect(queue.length()).toBe(3);
        });
      });

      describe("after deleting", () => {
        it("should return updated length value", () => {
          const queue = new Queue();
          queue.push(5);
          queue.push(15);
          queue.push(10);
          queue.pop();

          expect(queue.length()).toBe(2);
        });
      });
    });

    describe("when queue is empty", () => {
      it("should return zero value", () => {
        const queue = new Queue();

        expect(queue.length()).toBe(0);
      });
    });
  });

  describe("method isEmpty", () => {
    it("should return true when queue is empty", () => {
      const queue: ILinearStorage<number> = new Queue();
      expect(queue.isEmpty()).toBe(true);
    });
  });

  describe("method isFull", () => {
    it("should return false when queue elements length lower than its capacity", () => {
      const queue: ILinearStorage<number> = new Queue(100);
      queue.push(10);

      expect(queue.isFull()).toBe(false);
    });

    it("should return true when queue elements length same as its capacity", () => {
      const queue: ILinearStorage<number> = new Queue(1);
      queue.push(10);

      expect(queue.isFull()).toBe(true);
    });
  });

  describe("method reverse", () => {
    it("should correctly reverse queue", () => {
      const queue: ILinearStorage<number> = new Queue();
      queue.push(5);
      queue.push(10);
      queue.push(15);
      queue.reverse();

      expect(queue.peek()).toBe(15);
    });
  });

  describe("method clear", () => {
    it("should correctly clear queue", () => {
      const queue = new Queue();
      queue.push(10);
      queue.push(20);
      queue.clear();

      expect(queue.isEmpty()).toBe(true);
    });
  });
});
