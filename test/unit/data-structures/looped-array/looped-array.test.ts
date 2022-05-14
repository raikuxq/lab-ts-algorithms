import LoopedArray from "../../../../src/data-structures/LoopedArray/LoopedArray";
import IArrayFacade from "../../../../src/types/IArrayFacade";
import ILinearStorage from "../../../../src/types/ILinearStorage";

describe("Looped Array", () => {
  describe("constructor", () => {
    it("should throw when capacity is less than 1", () => {
      expect(() => {
        new LoopedArray(-5);
      }).toThrowError();

      expect(() => {
        new LoopedArray(0);
      }).toThrowError();
    });
  });

  describe("method push", () => {
    const loopedArray: IArrayFacade<string> = new LoopedArray(5);

    loopedArray.push("q");
    loopedArray.push("w");
    loopedArray.push("e");
    loopedArray.push("r");
    loopedArray.push("t");

    it("should collect correct elements before overwriting", () => {
      expect(loopedArray.getAsArray()).toEqual(["q", "w", "e", "r", "t"]);
    });

    it("should correctly overwrite ", () => {
      loopedArray.push("y");
      loopedArray.push("u");
      loopedArray.push("i");

      expect(loopedArray.getAsArray()).toEqual(["y", "u", "i"]);
    });

    it("should add elements to array's end", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);
      array.push(1);

      expect(array.peek()).toBe(1);
    });

    it("should overwrite when array is full", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(2);
      array.push(1);
      array.push(2);
      array.push(3);

      expect(array.getAsArray()).toEqual([3]);
    });
  });

  describe("method unshift", () => {
    const loopedArray: IArrayFacade<string> = new LoopedArray(5);

    loopedArray.unshift("q");
    loopedArray.unshift("w");
    loopedArray.unshift("e");
    loopedArray.unshift("r");
    loopedArray.unshift("t");

    it("should collect correct elements before overwriting", () => {
      expect(loopedArray.getAsArray()).toEqual(["t", "r", "e", "w", "q"]);
    });

    it("should correctly overwrite ", () => {
      loopedArray.unshift("y");
      loopedArray.unshift("u");
      loopedArray.unshift("i");

      expect(loopedArray.getAsArray()).toEqual(["i", "u", "y"]);
    });

    it("should add elements to array's start", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);
      array.unshift(1);
      array.unshift(0);

      expect(array.peekFromStart()).toBe(0);
    });

    it("should overwrite when array is full", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(2);
      array.unshift(1);
      array.unshift(2);
      array.unshift(3);
      array.unshift(4);

      expect(array.getAsArray()).toEqual([4, 3]);
    });
  });

  describe("method pushFromIndex", () => {
    it("should overwrite elements by index", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);
      array.pushFromArray([10, 30, 40, 50]);
      array.pushFromIndex(20, 1);

      expect(array.getAsArray()).toEqual([10, 20, 40, 50]);
    });

    it("should add elements to array from start", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);
      array.pushFromArray([0]);
      array.pushFromIndex(10, 1);

      expect(array.getAsArray()).toEqual([0, 10]);
    });

    it("should add elements to empty array", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);
      array.pushFromIndex(10, 0);

      expect(array.getAsArray()).toEqual([10]);
    });

    it("should add elements to array from end", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);
      array.pushFromArray([0, 10, 30]);
      array.pushFromIndex(20, 2);

      expect(array.getAsArray()).toEqual([0, 10, 20]);
    });
  });

  describe("method pushFromArray", () => {
    it("should add elements to array's end", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);
      const arr = [1, 2, 3, 4, 5];
      array.pushFromArray(arr);

      expect(array.getAsArray()).toEqual(arr);
    });

    it("should overwrite when array is full", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(2);
      array.pushFromArray([1]);
      array.pushFromArray([2, 3]);

      expect(array.getAsArray()).toEqual([3]);
    });
  });

  describe("method peekFromStart", () => {
    it("should return first element of array", () => {
      const loopedArray: IArrayFacade<string> = new LoopedArray(5);
      loopedArray.push("q");
      loopedArray.push("w");
      loopedArray.push("e");

      expect(loopedArray.peekFromStart()).toEqual("q");
    });

    it("should return undefined when array is empty", () => {
      const loopedArray: IArrayFacade<number> = new LoopedArray(5);

      expect(loopedArray.peekFromStart()).toEqual(undefined);
    });

    it("should return undefined when array is empty", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);
      expect(array.peekFromStart()).toBeUndefined();
    });

    it("should return first element from array", () => {
      const array: IArrayFacade<number> = new LoopedArray(5);
      array.pushFromArray([10, 20, 30, 40, 50]);

      expect(array.peekFromStart()).toBe(10);
    });
  });

  describe("method peek", () => {
    it("should return last element of array", () => {
      const loopedArray: IArrayFacade<string> = new LoopedArray(5);
      loopedArray.push("q");
      loopedArray.push("w");
      loopedArray.push("e");

      expect(loopedArray.peek()).toEqual("e");
    });
    it("should return undefined when array is empty", () => {
      const loopedArray: IArrayFacade<number> = new LoopedArray(5);

      expect(loopedArray.peek()).toEqual(undefined);
    });
    it("should return undefined when array is empty", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);

      expect(array.peek()).toBeUndefined();
    });
    it("should return first element from array", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);
      array.pushFromArray([10, 20, 30, 40, 50]);

      expect(array.peek()).toBe(50);
    });
  });

  describe("method peekByIndex", () => {
    it("should throw when array is empty", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);

      expect(array.peekByIndex(0)).toBeUndefined();
    });

    it("should return element by its index from array", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);
      array.pushFromArray([10, 20, 30, 40, 50]);

      expect(array.peekByIndex(2)).toBe(30);
    });

    it("should return undefined when index exceed array length", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);

      expect(array.peekByIndex(1000)).toBeUndefined();
    });
  });

  describe("method shift", () => {
    describe("should delete first element and return its value", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);
      array.pushFromArray([10, 20]);
      const shifted = array.shift();

      it("should delete correct", () => {
        expect(array.getAsArray()).toEqual([20]);
      });

      it("should return correct value", () => {
        expect(shifted).toBe(10);
      });
    });

    it("should throw when array is empty", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);
      expect(() => {
        array.shift();
      }).toThrowError();
    });
  });

  describe("method pop", () => {
    describe("should delete last element and return its value", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);
      array.pushFromArray([10, 40]);
      const shifted = array.pop();

      it("should delete correct", () => {
        expect(array.getAsArray()).toEqual([10]);
      });

      it("should return correct value", () => {
        expect(shifted).toBe(40);
      });
    });

    it("should throw when array is empty", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);

      expect(() => {
        array.pop();
      }).toThrowError();
    });
  });

  describe("method deleteFromIndex", () => {
    describe("should replace element with undefined by index and return its value", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);
      array.pushFromArray([10, 20, 30]);
      const shifted = array.deleteFromIndex(1);

      it("should delete correct", () => {
        expect(array.getAsArray()).toEqual([10, undefined, 30]);
      });

      it("should return correct value", () => {
        expect(shifted).toBe(20);
      });
    });

    it("should throw when array is empty", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);

      expect(() => {
        array.shift();
      }).toThrowError();
    });
  });

  describe("method reverse", () => {
    it("should correct reverse array", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(12);
      const arraySource = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
      const reversedArray = [...arraySource].reverse();
      array.pushFromArray(arraySource);
      array.reverse();

      expect(array.getAsArray()).toEqual(reversedArray);
    });
  });

  describe("method clear", () => {
    it("should correct clear array", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);
      const testArray: Array<number> = [10, 20, 30, 40, 50, 60, 70, 80, 90];
      array.pushFromArray(testArray);
      array.clear();

      expect(array.isEmpty()).toBe(true);
    });
  });

  describe("method has", function () {
    const array = new LoopedArray<number>(10);
    array.push(5);

    it("should return true when value exists", () => {
      expect(array.has(5)).toBe(true);
    });

    it("should return false when value does not exist", () => {
      expect(array.has(10)).toBe(false);
    });
  });

  describe("method length", function () {
    describe("when array is non empty", () => {
      describe("after adding", () => {
        it("should return updated length value", () => {
          const array = new LoopedArray<number>(10);
          array.push(5);
          array.push(15);
          array.push(10);

          expect(array.length()).toBe(3);
        });
      });

      describe("after deleting", () => {
        it("should return updated length value", () => {
          const array = new LoopedArray<number>(10);
          array.push(5);
          array.push(15);
          array.push(10);
          array.pop();

          expect(array.length()).toBe(2);
        });
      });
    });

    describe("when array is empty", () => {
      it("should return zero value", () => {
        const array = new LoopedArray<number>(10);

        expect(array.length()).toBe(0);
      });
    });
  });

  describe("method isEmpty", () => {
    it("should return true when array is empty", () => {
      const array: ILinearStorage<number> = new LoopedArray<number>(10);
      expect(array.isEmpty()).toBe(true);
    });
  });

  describe("method isFull", () => {
    it("should return false when array elements length lower than its capacity", () => {
      const array: ILinearStorage<number> = new LoopedArray<number>(100);
      array.push(10);

      expect(array.isFull()).toBe(false);
    });
    it("should return true when array elements length same as its capacity", () => {
      const array: ILinearStorage<number> = new LoopedArray<number>(1);
      array.push(10);

      expect(array.isFull()).toBe(true);
    });
  });
});
