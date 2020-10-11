import IStack from "../interface/IStack";
import Stack from "../Stack";

describe("stack", () => {
  describe("method peek", () => {
    test("should correct peek value from top", () => {
      const stack: IStack<number> = new Stack(100);
      stack.push(10);
      const top = stack.peek();

      expect(stack.peek()).toBe(top);
    });
    test("should return null when stack is empty", () => {
      const stack: IStack<number> = new Stack(1);

      expect(stack.peek()).toBeNull();
    });
  });

  describe("method push", () => {
    test("should correct push to top", () => {
      const stack: IStack<number> = new Stack(100);
      stack.push(10);

      expect(stack.peek()).toBe(10);
    });
    test("should throw when stack is full", () => {
      const stack: IStack<number> = new Stack(1);
      stack.push(10);

      expect(() => {
        stack.push(20);
      }).toThrowError();
    });
  });

  describe("method pop", () => {
    describe("should correct pop from top", () => {
      const stack: IStack<number> = new Stack(100);
      stack.push(10);
      const popped = stack.pop();

      test("should delete correct", () => {
        expect(stack.isEmpty()).toBe(true);
      });
      test("should return correct value", () => {
        expect(popped).toBe(10);
      });
    });
    test("should throw when stack is empty", () => {
      const stack: IStack<number> = new Stack(1);

      expect(() => {
        stack.pop();
      }).toThrowError();
    });
  });

  describe("method isEmpty", () => {
    test("should return true when stack is empty", () => {
      const stack: IStack<number> = new Stack(100);
      expect(stack.isEmpty()).toBe(true);
    });
  });

  describe("method isFull", () => {
    test("should return false when stack elements length lower than its capacity", () => {
      const stack: IStack<number> = new Stack(100);
      stack.push(10);

      expect(stack.isFull()).toBe(false);
    });
    test("should return true when stack elements length same as its capacity", () => {
      const stack: IStack<number> = new Stack(1);
      stack.push(10);

      expect(stack.isFull()).toBe(true);
    });
  });
});
