import Stack from "../../../../src/data-structures/Stack/Stack";
import ILinearStorage from "../../../../src/types/ILinearStorage";

describe("stack", () => {
  describe("method peek", () => {
    it("should correct peek value from top", () => {
      const stack: ILinearStorage<number> = new Stack(100);
      stack.push(5);
      stack.push(10);

      expect(stack.peek()).toBe(10);
    });
    it("should throw when stack is empty", () => {
      const stack: ILinearStorage<number> = new Stack(1);

      expect(() => {
        stack.peek();
      }).toThrowError();
    });
  });

  describe("method push", () => {
    it("should correct push to top", () => {
      const stack: ILinearStorage<number> = new Stack(100);
      stack.push(5);
      stack.push(10);

      expect(stack.peek()).toBe(10);
    });
    it("should throw when stack is full", () => {
      const stack: ILinearStorage<number> = new Stack(1);
      stack.push(10);

      expect(() => {
        stack.push(20);
      }).toThrowError();
    });
  });

  describe("method pop", () => {
    describe("should correct pop from top", () => {
      const stack: ILinearStorage<number> = new Stack(100);
      stack.push(5);
      stack.push(10);
      const popped = stack.pop();

      it("should delete correct", () => {
        expect(stack.peek()).toBe(5);
      });
      it("should return correct value", () => {
        expect(popped).toBe(10);
      });
    });
    it("should throw when stack is empty", () => {
      const stack: ILinearStorage<number> = new Stack(1);

      expect(() => {
        stack.pop();
      }).toThrowError();
    });
  });

  describe("method has", function () {
    const stack = new Stack();
    stack.push(5);

    it("should return true when value exists", () => {
      expect(stack.has(5)).toBe(true);
    });

    it("should return false when value does not exist", () => {
      expect(stack.has(10)).toBe(false);
    });
  });

  describe("method length", function () {
    describe("when stack is non empty", () => {
      describe("after adding", () => {
        it("should return updated length value", () => {
          const stack = new Stack();
          stack.push(5);
          stack.push(15);
          stack.push(10);

          expect(stack.length()).toBe(3);
        });
      });

      describe("after deleting", () => {
        it("should return updated length value", () => {
          const stack = new Stack();
          stack.push(5);
          stack.push(15);
          stack.push(10);
          stack.pop();

          expect(stack.length()).toBe(2);
        });
      });
    });

    describe("when stack is empty", () => {
      it("should return zero value", () => {
        const stack = new Stack();

        expect(stack.length()).toBe(0);
      });
    });
  });

  describe("method isEmpty", () => {
    it("should return true when stack is empty", () => {
      const stack: ILinearStorage<number> = new Stack(100);
      expect(stack.isEmpty()).toBe(true);
    });
  });

  describe("method isFull", () => {
    it("should return false when stack elements length lower than its capacity", () => {
      const stack: ILinearStorage<number> = new Stack(100);
      stack.push(10);

      expect(stack.isFull()).toBe(false);
    });
    it("should return true when stack elements length same as its capacity", () => {
      const stack: ILinearStorage<number> = new Stack(1);
      stack.push(10);

      expect(stack.isFull()).toBe(true);
    });
  });

  describe("method clear", () => {
    it("should correctly clear stack", () => {
      const stack = new Stack();
      stack.push(10);
      stack.push(20);
      stack.clear();

      expect(stack.isEmpty()).toBe(true);
    });
  });

  describe("method reverse", () => {
    it("should correctly reverse stack", () => {
      const stack: ILinearStorage<number> = new Stack();
      stack.push(5);
      stack.push(10);
      stack.push(15);
      stack.reverse();

      expect(stack.peek()).toBe(5);
    });
  });
});
