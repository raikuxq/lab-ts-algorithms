import LoopedArray from "../src/data-structures/LoopedArray/LoopedArray";
import IArrayFacade from "../src/types/IArrayFacade";

describe("Looped Array", () => {
  describe("constructor", () => {
    test("should throw when capacity is less than 1", () => {
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

    test("should add elements to array's end", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);

      array.push(1);
      expect(array.peek()).toBe(1);
    });
    test("should overwrite when array is full", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(2);

      array.push(1);
      array.push(2);
      array.push(3);

      expect(array.getAsArray()).toEqual([3, 2]);
    });

    test("should collect correct elements before overwriting", () => {
      expect(loopedArray.getAsArray()).toEqual(["q", "w", "e", "r", "t"]);
    });

    test("should correctly overwrite ", () => {
      loopedArray.push("y");
      loopedArray.push("u");
      loopedArray.push("i");

      expect(loopedArray.getAsArray()).toEqual(["y", "u", "i", "r", "t"]);
    });
  });

  describe("method unshift", () => {
    const loopedArray: IArrayFacade<string> = new LoopedArray(5);

    loopedArray.unshift("q");
    loopedArray.unshift("w");
    loopedArray.unshift("e");
    loopedArray.unshift("r");
    loopedArray.unshift("t");

    test("should collect correct elements before overwriting", () => {
      expect(loopedArray.getAsArray()).toEqual(["t", "r", "e", "w", "q"]);
    });

    test("should correctly overwrite ", () => {
      loopedArray.unshift("y");
      loopedArray.unshift("u");
      loopedArray.unshift("i");

      expect(loopedArray.getAsArray()).toEqual(["i", "u", "y", "t", "r"]);
    });

    test("should add elements to array's start", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);

      array.unshift(1);
      array.unshift(0);
      expect(array.peekFromStart()).toBe(0);
    });
    test("should overwrite when array is full", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(2);
      array.unshift(1);
      array.unshift(2);
      array.unshift(3);
      expect(array.getAsArray()).toEqual([3, 2]);
    });
  });

  describe("method pushFromIndex", () => {
    test("should overwrite elements by index", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);

      array.pushFromArray([10, 30, 40, 50]);
      array.pushFromIndex(20, 1);
      expect(array.getAsArray()).toEqual([10, 20, 40, 50]);
    });
    test("should add elements to array from start", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);

      const expectedArr: Array<number> = [0, 10];
      array.pushFromArray([0]);
      array.pushFromIndex(10, 1);
      expect(array.getAsArray()).toEqual(expectedArr);
    });
    test("should add elements to empty array", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);

      const expectedArr: Array<number> = [10];
      array.pushFromIndex(10, 0);
      expect(array.getAsArray()).toEqual(expectedArr);
    });
    test("should add elements to array from end", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);

      array.pushFromArray([0, 10, 30]);
      array.pushFromIndex(20, 2);
      expect(array.getAsArray()).toEqual([0, 10, 20]);
    });
  });

  describe("method pushFromArray", () => {
    test("should add elements to array's end", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);
      const arr = [1, 2, 3, 4, 5];
      array.pushFromArray(arr);
      expect(array.getAsArray()).toEqual(arr);
    });
    test("should overwrite when array is full", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(2);
      array.pushFromArray([1]);
      array.pushFromArray([2, 3]);
      expect(array.getAsArray()).toEqual([3, 2]);
    });
  });

  describe("method peekFromStart", () => {
    test("should return first element of array", () => {
      const loopedArray: IArrayFacade<string> = new LoopedArray(5);

      loopedArray.push("q");
      loopedArray.push("w");
      loopedArray.push("e");

      expect(loopedArray.peekFromStart()).toEqual("q");
    });
    test("should return undefined when array is empty", () => {
      const loopedArray: IArrayFacade<number> = new LoopedArray(5);

      expect(loopedArray.peekFromStart()).toEqual(undefined);
    });
    test("should return undefined when array is empty", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);
      expect(array.peekFromStart()).toBeUndefined();
    });
    test("should return first element from array", () => {
      const array: IArrayFacade<number> = new LoopedArray(5);
      array.pushFromArray([10, 20, 30, 40, 50]);

      expect(array.peekFromStart()).toBe(10);
    });
  });

  describe("method peek", () => {
    test("should return last element of array", () => {
      const loopedArray: IArrayFacade<string> = new LoopedArray(5);

      loopedArray.push("q");
      loopedArray.push("w");
      loopedArray.push("e");

      expect(loopedArray.peek()).toEqual("e");
    });
    test("should return undefined when array is empty", () => {
      const loopedArray: IArrayFacade<number> = new LoopedArray(5);

      expect(loopedArray.peek()).toEqual(undefined);
    });
    test("should return undefined when array is empty", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);
      expect(array.peek()).toBeUndefined();
    });
    test("should return first element from array", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);
      array.pushFromArray([10, 20, 30, 40, 50]);

      expect(array.peek()).toBe(50);
    });
  });

  describe("method peekByIndex", () => {
    test("should throw when array is empty", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);
      expect(array.peekByIndex(0)).toBeUndefined();
    });
    test("should return element by its index from array", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);
      array.pushFromArray([10, 20, 30, 40, 50]);

      expect(array.peekByIndex(2)).toBe(30);
    });
    test("should return undefined when index exceed array length", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);

      expect(array.peekByIndex(1000)).toBeUndefined();
    });
  });

  describe("method shift", () => {
    describe("should delete first element and return its value", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);
      array.pushFromArray([10, 20]);
      const shifted = array.shift();

      test("should delete correct", () => {
        expect(array.getAsArray()).toEqual([20]);
      });
      test("should return correct value", () => {
        expect(shifted).toBe(10);
      });
    });

    test("should throw when array is empty", () => {
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

      test("should delete correct", () => {
        expect(array.getAsArray()).toEqual([10]);
      });

      test("should return correct value", () => {
        expect(shifted).toBe(40);
      });
    });

    test("should throw when array is empty", () => {
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

      test("should delete correct", () => {
        expect(array.getAsArray()).toEqual([10, undefined, 30]);
      });
      test("should return correct value", () => {
        expect(shifted).toBe(20);
      });
    });

    test("should throw when array is empty", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);

      expect(() => {
        array.shift();
      }).toThrowError();
    });
  });

  describe("method reverse", () => {
    test("should correct reverse array", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(12);

      const arraySource = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
      const reversedArray = [...arraySource].reverse();
      array.pushFromArray(arraySource);
      array.reverse();

      expect(array.getAsArray()).toEqual(reversedArray);
    });
  });

  describe("method clear", () => {
    test("should correct clear array", () => {
      const array: IArrayFacade<number> = new LoopedArray<number>(10);

      const testArray: Array<number> = [10, 20, 30, 40, 50, 60, 70, 80, 90];
      array.pushFromArray(testArray);
      array.clear();

      expect(array.getAsArray()).toHaveLength(0);
    });
  });
});
